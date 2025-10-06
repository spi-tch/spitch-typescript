// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'spitch-mcp/filtering';
import { Metadata, asTextContentResult } from 'spitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Spitch from 'spitch';

export const metadata: Metadata = {
  resource: 'speech',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/transcriptions',
  operationId: 'transcribe_v1_transcriptions_post',
};

export const tool: Tool = {
  name: 'transcribe_speech',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTranscribe\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/transcription',\n  $defs: {\n    transcription: {\n      type: 'object',\n      title: 'Transcription',\n      properties: {\n        request_id: {\n          type: 'string',\n          title: 'Request Id'\n        },\n        text: {\n          type: 'string',\n          title: 'Text'\n        },\n        timestamps: {\n          type: 'array',\n          title: 'Timestamps',\n          items: {\n            type: 'object',\n            title: 'TimeStamp',\n            properties: {\n              end: {\n                type: 'number',\n                title: 'End'\n              },\n              start: {\n                type: 'number',\n                title: 'Start'\n              },\n              text: {\n                type: 'string',\n                title: 'Text'\n              }\n            },\n            required: [              'end',\n              'start',\n              'text'\n            ]\n          }\n        }\n      },\n      required: [        'request_id',\n        'text'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      language: {
        type: 'string',
        title: 'Language',
        enum: ['yo', 'en', 'ha', 'ig', 'am'],
      },
      content: {
        type: 'string',
        title: 'Content',
      },
      model: {
        type: 'string',
        title: 'STTModelEnum',
        enum: ['mansa_v1', 'legacy', 'human'],
      },
      special_words: {
        type: 'string',
        title: 'Special Words',
      },
      timestamp: {
        type: 'string',
        title: 'TimestampEnum',
        enum: ['sentence', 'word', 'none'],
      },
      url: {
        type: 'string',
        title: 'Url',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['language'],
  },
  annotations: {},
};

export const handler = async (client: Spitch, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.speech.transcribe(body)));
};

export default { metadata, tool, handler };
