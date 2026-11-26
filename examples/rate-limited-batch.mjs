// node examples/rate-limited-batch.mjs FILE_ID [FILE_ID ...]
import { setTimeout as sleep } from 'node:timers/promises';
import { pathToFileURL } from 'node:url';
import Spitch from 'spitch';

const maxAttempts = 3; // Includes the first request.
const budgetMs = 30_000;
const limitHeaders = [
  'Retry-After',
  'RateLimit-Limit',
  'RateLimit-Remaining',
  'RateLimit-Reset',
  'X-Usage-Tier',
];

export async function readFileMetadata(client, fileId) {
  const deadline = performance.now() + budgetMs;
  const signal = AbortSignal.timeout(budgetMs);
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    signal.throwIfAborted();
    try {
      return await client.files.get(fileId, { signal });
    } catch (error) {
      if (!(error instanceof Spitch.RateLimitError)) throw error;
      const headers = error.headers;
      const advice = limitHeaders
        .filter((name) => headers?.has(name))
        .map((name) => name + ': ' + headers.get(name));
      console.error('HTTP 429 (attempt ' + attempt + '/' + maxAttempts + '): ' + advice.join(', '));
      if (attempt === maxAttempts) throw new Error('File retry attempts exhausted.');
      const delay = headers?.get('Retry-After')?.trim() ?? '';
      if (!/^[0-9]+$/.test(delay)) throw new Error('No usable Retry-After in seconds; stopping the batch.');
      const waitMs = Number(delay) * 1000;
      if (waitMs >= deadline - performance.now())
        throw new Error('Retry-After exceeds the remaining file budget.');
      await sleep(waitMs, undefined, { signal });
    }
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const fileIds = process.argv.slice(2);
    if (!fileIds.length) throw new Error('Usage: node rate-limited-batch.mjs FILE_ID [FILE_ID ...]');
    // The loop owns all retries. Keep one file in flight at a time.
    const client = new Spitch({ maxRetries: 0 });
    for (const fileId of fileIds) {
      const file = await readFileMetadata(client, fileId);
      console.log(file.file_id, file.status);
    }
  } catch (error) {
    console.error(
      error instanceof Spitch.APIError && error.status === 402 ?
        'HTTP 402: check workspace billing.'
      : error.message,
    );
    process.exitCode = 1;
  }
}
