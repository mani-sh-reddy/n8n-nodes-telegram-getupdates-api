import type { INodeProperties } from 'n8n-workflow';

export const usernameProperty: INodeProperties = {
  displayName: 'Filter by Username (Optional)',
  name: 'filter_username',
  type: 'string',
  default: '',
  description:
    'Optional: Only receive events from a specific user ID. Leave empty to receive events from any user. Only events with a user ID will be emitted when this filter is active.',
  displayOptions: {
    show: {},
  },
};