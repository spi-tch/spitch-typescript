// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'spitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Spitch from 'spitch';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/files',
  operationId: 'upload_file_v1_files_post',
};

export const tool: Tool = {
  name: 'upload_files',
  description: 'Upload File',
  inputSchema: {
    type: 'object',
    properties: {
      file: {
        type: 'string',
        title: 'File',
      },
    },
    required: ['file'],
  },
  annotations: {},
};

export const handler = async (client: Spitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.files.upload(body)) as object);
};

export default { metadata, tool, handler };
