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
  httpPath: '/v1/files/{file_id}',
  operationId: 'get_file_v1_files__file_id__get',
};

export const tool: Tool = {
  name: 'get_files',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet File\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'FileMetaResponse',\n  properties: {\n    category: {\n      type: 'string',\n      title: 'Category'\n    },\n    content_type: {\n      type: 'string',\n      title: 'Content Type'\n    },\n    created_at: {\n      type: 'string',\n      title: 'Created At',\n      format: 'date-time'\n    },\n    file_id: {\n      type: 'string',\n      title: 'File Id'\n    },\n    original_name: {\n      type: 'string',\n      title: 'Original Name'\n    },\n    size_bytes: {\n      type: 'integer',\n      title: 'Size Bytes'\n    },\n    status: {\n      type: 'string',\n      title: 'Status'\n    }\n  },\n  required: [    'category',\n    'content_type',\n    'created_at',\n    'file_id',\n    'original_name',\n    'size_bytes',\n    'status'\n  ]\n}\n```",
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Spitch, args: Record<string, unknown> | undefined) => {
  const { file_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.files.get(file_id)));
};

export default { metadata, tool, handler };
