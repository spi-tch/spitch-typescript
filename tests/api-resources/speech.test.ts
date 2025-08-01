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

  test('transcribe', async () => {
    const responsePromise = client.speech.transcribe();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('transcribe: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.speech.transcribe(
        {
          content: await toFile(Buffer.from('# my file contents'), 'README.md'),
          language: 'yo',
          model: 'mansa_v1',
          special_words: 'special_words',
          timestamp: 'sentence',
          url: 'url',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Spitch.NotFoundError);
  });
});
