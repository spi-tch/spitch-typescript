// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Spitch, { toFile } from 'spitch';

const client = new Spitch({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource speech', () => {
  test('generate: required and optional params', async () => {
    const response = await client.speech.generate({
      text: 'text',
      voice: 'sade',
      format: 'mp3',
      language: 'language',
      speed: 0.7,
    });
  });

  test('transcribe: only required params', async () => {
    const responsePromise = client.speech.transcribe({
      content: await toFile(Buffer.from('3c90cdcc-0d14-4b50-8038-8dd25796052a'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('transcribe: required and optional params', async () => {
    const response = await client.speech.transcribe({
      content: await toFile(Buffer.from('3c90cdcc-0d14-4b50-8038-8dd25796052a'), 'README.md'),
      language: 'language',
      model: 'mansa_v1',
      special_words: 'special_words',
      timestamp: 'sentence',
    });
  });
});
