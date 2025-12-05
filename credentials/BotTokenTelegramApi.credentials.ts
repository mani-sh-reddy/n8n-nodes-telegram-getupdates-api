import type {
	// IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BotTokenTelegramApi implements ICredentialType {
	name = 'botTokenTelegramApi';

	// eslint-disable-next-line n8n-nodes-base/cred-class-field-display-name-missing-api
	displayName = 'Telegram Bot Token';
	default = 'Telegram Bot Token';

	icon: Icon = "file:token.svg";

	documentationUrl = 'https://core.telegram.org/bots/api';

	properties: INodeProperties[] = [
		{
			displayName: 'Bot Token (eg: 123456789:ABCdefGHIjklMNOpqrsTUVwxyz​)',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	// authenticate: IAuthenticateGeneric = {
	// 	type: 'generic',
	// 	properties: {},
	// };

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.telegram.org',
			url: '=/bot{{$credentials.accessToken}}/getMe',
			method: 'GET',
		},
		rules: [
			{
				type: 'responseSuccessBody',
				properties: {
					message: 'Invalid Telegram Bot Token',
					key: 'ok',
					value: 'true',
				},
			},
		],
	};
}
