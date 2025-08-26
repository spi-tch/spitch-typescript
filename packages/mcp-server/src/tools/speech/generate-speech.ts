// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'spitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Spitch from 'spitch';

export const metadata: Metadata = {
  resource: 'speech',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/speech',
  operationId: 'synthesize_v1_speech_post',
};

export const tool: Tool = {
  name: 'generate_speech',
  description: 'Synthesize',
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
      voice: {
        type: 'string',
        title: 'Voice',
        enum: [
          'sade',
          'segun',
          'femi',
          'funmi',
          'amina',
          'aliyu',
          'hasan',
          'zainab',
          'john',
          'jude',
          'lina',
          'lucy',
          'henry',
          'kani',
          'ngozi',
          'amara',
          'obinna',
          'ebuka',
          'hana',
          'selam',
          'tena',
          'tesfaye',
        ],
      },
      model: {
        type: 'string',
        title: 'TTSModelEnum',
        enum: ['legacy'],
      },
    },
    required: ['language', 'text', 'voice'],
  },
  annotations: {},
};

export const handler = async (client: Spitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.speech.generate(body));
};

export default { metadata, tool, handler };
