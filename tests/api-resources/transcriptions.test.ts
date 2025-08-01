// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Spitchy, { toFile } from 'spitchy';

const client = new Spitchy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transcriptions', () => {
  // skipped: tests are disabled for the time being
  test.skip('create', async () => {
    const responsePromise = client.transcriptions.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.transcriptions.create(
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
    ).rejects.toThrow(Spitchy.NotFoundError);
  });
});
