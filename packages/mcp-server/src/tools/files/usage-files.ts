// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'spitch-mcp/filtering';
import { Metadata, asTextContentResult } from 'spitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Spitch from 'spitch';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/files:usage',
  operationId: 'get_usage_v1_files_usage_get',
};

export const tool: Tool = {
  name: 'usage_files',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Usage\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/file_usage',\n  $defs: {\n    file_usage: {\n      type: 'object',\n      title: 'FileUsage',\n      properties: {\n        num_files: {\n          type: 'integer',\n          title: 'Num Files'\n        },\n        total: {\n          type: 'string',\n          title: 'Total'\n        },\n        total_bytes: {\n          type: 'integer',\n          title: 'Total Bytes'\n        },\n        used: {\n          type: 'string',\n          title: 'Used'\n        },\n        used_bytes: {\n          type: 'integer',\n          title: 'Used Bytes'\n        }\n      },\n      required: [        'num_files',\n        'total',\n        'total_bytes',\n        'used',\n        'used_bytes'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Spitch, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.files.usage()));
};

export default { metadata, tool, handler };
