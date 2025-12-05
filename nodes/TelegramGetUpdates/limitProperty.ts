import type { INodeProperties } from 'n8n-workflow';

export const limitProperty: INodeProperties = {
  displayName: 'Limit',
  name: 'limit',
  type: 'number',
  typeOptions: {
    minValue: 1,
  },
  // eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-limit
  default: 100,
  // eslint-disable-next-line n8n-nodes-base/node-param-description-wrong-for-limit
  description: 'Limits the number of updates to be retrieved',
};