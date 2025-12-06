import { limitProperty } from './limitProperty';
import { timeoutProperty } from './timeoutProperty';
import { allowedUpdatesProperty } from './allowedUpdatesProperty';
import { TelegramApiResponse, Update } from './telegram.types';

import {
	NodeConnectionTypes,
	type INodeType,
	type INodeTypeDescription,
	type ITriggerFunctions,
	type ITriggerResponse,
	type IDataObject,
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
				name: 'botTokenTelegramApi',
				required: true,
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
			allowedUpdates = [];
		}

		let isPolling = true;

		// Note: promise is now typed once here
		let currentRequest: Promise<TelegramApiResponse<Update[]>> | null = null;

		const startPolling = async () => {
			let offset = 0;

			while (isPolling) {
				try {
					currentRequest = this.helpers.httpRequest({
						method: 'POST',
						url: `https://api.telegram.org/bot${credentials.accessToken}/getUpdates`,
						body: {
							offset,
							limit,
							timeout,
							allowed_updates: allowedUpdates,
						},
						json: true,
						timeout: (timeout + 5) * 1000,
					}) as Promise<TelegramApiResponse<Update[]>>;

					const response = await currentRequest;
					currentRequest = null;

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
							updates = updates.filter((update: Update) =>
								Object.keys(update).some((x) => allowedUpdates.includes(x)),
							);
						}

						this.emit([
							updates.map((update: Update) => ({
								json: update as unknown as IDataObject,
							})),
						]);
					}
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				} catch (error: any) {
					if (!isPolling) {
						break;
					}

					if (error.response?.status === 409) {
						continue;
					}

					throw error;
				}
			}
		};

		// Fire and forget
		void startPolling();

		const closeFunction = async () => {
			isPolling = false;

			if (currentRequest) {
				try {
					await currentRequest;
				} catch {
					// Ignore errors during cleanup
				}
			}
		};

		return {
			closeFunction,
		};
	}
}
