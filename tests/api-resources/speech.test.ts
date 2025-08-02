// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Spitch, { toFile } from 'spitch';

const client = new Spitch({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource speech', () => {
  test('generate: only required params', async () => {
    const responsePromise = client.speech.generate({ language: 'yo', text: 'text', voice: 'sade' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generate: required and optional params', async () => {
    const response = await client.speech.generate({
      language: 'yo',
      text: 'text',
      voice: 'sade',
      model: 'legacy',
    });
  });

  test('transcribe: only required params', async () => {
    const responsePromise = client.speech.transcribe({ language: 'yo' });
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
      language: 'yo',
      content: await toFile(Buffer.from('# my file contents'), 'README.md'),
      model: 'mansa_v1',
      special_words: 'special_words',
      timestamp: 'sentence',
      url: 'url',
    });
  });
});
