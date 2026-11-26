import assert from 'node:assert/strict';
import { test } from 'node:test';
import Spitch from 'spitch';
import { readFileMetadata } from '../examples/rate-limited-batch.mjs';

for (const [statuses, advice, message] of [
  [[429, 200], '0', ''],
  [[429, 429, 429], '0', 'attempts exhausted'],
  [[429], null, 'No usable Retry-After'],
  [[429], 'bad', 'No usable Retry-After'],
  [[429], '90', 'remaining file budget'],
  [[402], '0', '402'],
]) {
  test('file reads: ' + statuses.join(',') + ' with advice ' + advice, async () => {
    const pending = [...statuses];
    const methods = [];
    const client = new Spitch({
      apiKey: 'demo',
      maxRetries: 0,
      fetch: async (_url, init) => {
        methods.push(init.method);
        const status = pending.shift();
        assert.ok(status);
        const headers = { 'RateLimit-Limit': '60', 'RateLimit-Remaining': '0', 'RateLimit-Reset': '2' };
        if (advice !== null) headers['Retry-After'] = advice;
        return Response.json(status === 200 ? { file_id: 'demo', status: 'ready' } : { detail: 'fixture' }, {
          headers,
          status,
        });
      },
    });
    if (message) await assert.rejects(readFileMetadata(client, 'demo'), new RegExp(message));
    else assert.equal((await readFileMetadata(client, 'demo')).file_id, 'demo');
    assert.deepEqual(
      methods,
      statuses.map(() => 'GET'),
    );
  });
}
