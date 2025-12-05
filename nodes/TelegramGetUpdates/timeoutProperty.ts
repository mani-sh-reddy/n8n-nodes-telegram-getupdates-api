import type { INodeProperties } from 'n8n-workflow';

export const timeoutProperty: INodeProperties = {
  displayName: 'Timeout',
  name: 'timeout',
  type: 'number',
  typeOptions: {
    minValue: 0,
  },
  default: 60,
  description: 'Timeout in seconds for long polling',
};
