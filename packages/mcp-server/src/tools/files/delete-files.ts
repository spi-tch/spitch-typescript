// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'spitch-mcp/filtering';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete File\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    status: {\n      type: 'boolean',\n      title: 'Status'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      file_id: {
        type: 'string',
        title: 'File Id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['file_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Spitch, args: Record<string, unknown> | undefined) => {
  const { file_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.files.delete(file_id)));
};

export default { metadata, tool, handler };
