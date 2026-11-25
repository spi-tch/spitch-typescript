import Spitch from 'spitch';

test.each(['succeeded', 'failed'])('polls a saved job to %s', async (terminal) => {
  const states = ['queued', 'processing', terminal];
  const methods: string[] = [];
  const client = new Spitch({
    apiKey: 'demo',
    fetch: async (input, init) => {
      methods.push(init!.method!);
      const url = new URL(String(input));
      if (init!.method === 'POST') expect(url.searchParams.get('async')).toBe('true');
      else expect(url.pathname).toBe('/v1/transcriptions/demo');
      return Response.json({
        id: 'demo',
        status: states.shift(),
        created_at: 'now',
        polling_url: '/v1/transcriptions/demo',
      });
    },
  });
  const job = await client.speech.submitTranscription({ url: 'https://example.org/audio.wav' });
  expect((await client.speech.waitForTranscription(job.id, { pollIntervalMs: 1 })).status).toBe(terminal);
  expect(methods).toEqual(['POST', 'GET', 'GET']);
});

test('stops polling at the deadline', async () => {
  const client = new Spitch({
    apiKey: 'demo',
    fetch: async () => Response.json({ id: 'demo', status: 'processing' }),
  });
  await expect(client.speech.waitForTranscription('demo', { timeoutMs: 20 })).rejects.toThrow('Timed out');
});
