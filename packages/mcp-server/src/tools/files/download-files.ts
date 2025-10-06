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
  httpPath: '/v1/files/{file_id}/url',
  operationId: 'download_file_v1_files__file_id__url_get',
};

export const tool: Tool = {
  name: 'download_files',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDownload File\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'FileDownloadResponse',\n  properties: {\n    expires_at: {\n      type: 'string',\n      title: 'Expires At',\n      format: 'date-time'\n    },\n    file_id: {\n      type: 'string',\n      title: 'File Id'\n    },\n    url: {\n      type: 'string',\n      title: 'Url'\n    }\n  },\n  required: [    'expires_at',\n    'file_id',\n    'url'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      file_id: {
        type: 'string',
        title: 'File Id',
      },
      ttl: {
        type: 'integer',
        title: 'Ttl',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.files.download(file_id, body)));
};

export default { metadata, tool, handler };
