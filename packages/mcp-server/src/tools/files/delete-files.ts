// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'spitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Spitch from 'spitch';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/files/{file_id}',
  operationId: 'delete_file_v1_files__file_id__delete',
};

export const tool: Tool = {
  name: 'delete_files',
  description: 'Delete File',
  inputSchema: {
    type: 'object',
    properties: {
      file_id: {
        type: 'string',
        title: 'File Id',
      },
    },
    required: ['file_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Spitch, args: Record<string, unknown> | undefined) => {
  const { file_id, ...body } = args as any;
  return asTextContentResult((await client.files.delete(file_id)) as object);
};

export default { metadata, tool, handler };
