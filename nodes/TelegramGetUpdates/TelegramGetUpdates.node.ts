import { limitProperty } from './limitProperty';
import { timeoutProperty } from './timeoutProperty';
import { allowedUpdatesProperty } from './allowedUpdatesProperty';
import {
	NodeConnectionTypes,
	type INodeType,
	type INodeTypeDescription,
	type ITriggerFunctions,
	type ITriggerResponse,
	type IDataObject
} from 'n8n-workflow';

export class TelegramGetUpdates implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Telegram (Poll)',
		name: 'telegramGetUpdates',
		icon: { light: 'file:telegram.svg', dark: 'file:telegram_dark.svg' },
		group: ['trigger'],
		version: 1,
		subtitle: 'Telegram (Poll)',
		description: 'Receive incoming Telegram updates using long polling.',
		usableAsTool: true,

		inputs: [],
		outputs: [NodeConnectionTypes.Main],

		defaults: {
			name: 'Poll for messages',
		},

		requestDefaults: {
			baseURL: 'https://api.telegram.org',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},

		credentials: [
			{
				name: "botTokenTelegramApi",
				required: true
			},
		],

		properties: [limitProperty, timeoutProperty, allowedUpdatesProperty],
	};

	async trigger(this: ITriggerFunctions): Promise<ITriggerResponse> {
		const credentials = await this.getCredentials('botTokenTelegramApi');

		const limit = this.getNodeParameter('limit') as number;
		const timeout = this.getNodeParameter('timeout') as number;

		let allowedUpdates = this.getNodeParameter('allowed_updates') as string[];

		if (allowedUpdates.includes('all_updates')) {
			allowedUpdates = [] as string[];
		}

		let isPolling = true;
		let currentRequest: Promise<any> | null = null;

		const startPolling = async () => {
			let offset = 0;

			while (isPolling) {
				try {
					// Store the current request so we can wait for it during cleanup
					currentRequest = this.helpers.request({
						method: 'POST',
						uri: `https://api.telegram.org/bot${credentials.accessToken}/getUpdates`,
						body: {
							offset,
							limit,
							timeout,
							allowed_updates: allowedUpdates,
						},
						json: true,
						timeout: (timeout + 5) * 1000, // Add buffer to HTTP timeout (in ms)
					});

					const response = (await currentRequest) as ApiResponse<Update[]>;
					currentRequest = null;

					// Exit loop if polling was stopped during the request
					if (!isPolling) {
						break;
					}

					if (!response.ok || !response.result) {
						continue;
					}

					let updates = response.result;
					if (updates.length > 0) {
						offset = updates[updates.length - 1].update_id + 1;

						if (allowedUpdates.length > 0) {
							updates = updates.filter((update) =>
								Object.keys(update).some((x) => allowedUpdates.includes(x)),
							);
						}

						this.emit([updates.map((update) => ({ json: update as unknown as IDataObject }))]);
					}
				} catch (error) {
					// Exit loop if polling was stopped
					if (!isPolling) {
						break;
					}

					// Handle 409 conflicts during workflow saves/reactivations
					if (error.response?.status === 409) {
						console.debug('Telegram API returned 409, likely due to multiple polling instances');
						continue;
					}

					// Re-throw other errors
					throw error;
				}
			}
		};

		// Start polling without awaiting (runs in background)
		startPolling();

		const closeFunction = async () => {
			isPolling = false;

			// Wait for the current request to complete (if any)
			// This prevents the "request cancelled" error and allows graceful shutdown
			if (currentRequest) {
				try {
					await currentRequest;
				} catch (error) {
					// Ignore errors during cleanup
				}
			}
		};

		return {
			closeFunction,
		};
	}
}
