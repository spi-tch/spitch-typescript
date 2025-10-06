// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'spitch-mcp/filtering';
import { Metadata, asTextContentResult } from 'spitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Spitch from 'spitch';

export const metadata: Metadata = {
  resource: 'text',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/diacritics',
  operationId: 'tone_mark_v1_diacritics_post',
};

export const tool: Tool = {
  name: 'tone_mark_text',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTone Mark\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/diacritics',\n  $defs: {\n    diacritics: {\n      type: 'object',\n      title: 'Diacritics',\n      properties: {\n        request_id: {\n          type: 'string',\n          title: 'Request Id'\n        },\n        text: {\n          type: 'string',\n          title: 'Text'\n        }\n      },\n      required: [        'request_id',\n        'text'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      language: {
        type: 'string',
        title: 'Language',
        enum: ['yo', 'en', 'ha', 'ig', 'am'],
      },
      text: {
        type: 'string',
        title: 'Text',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['language', 'text'],
  },
  annotations: {},
};

export const handler = async (client: Spitch, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.text.toneMark(body)));
};

export default { metadata, tool, handler };
