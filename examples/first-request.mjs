import { writeFile } from 'node:fs/promises';
import Spitch from 'spitch';

try {
  const client = new Spitch({ maxRetries: 0 });
  const response = await client.speech
    .generate({
      text: 'Nnọọ na Spitch. Ọ dị ezigbo mma inwe gị ebe a.',
      voice: 'ngozi',
      language: 'ig',
      format: 'wav',
    })
    .asResponse();

  await writeFile('hello.wav', new Uint8Array(await response.arrayBuffer()));
  console.log('Saved hello.wav');
  const requestId = response.headers.get('x-request-id');
  console.log(`Request ID: ${requestId ?? 'unavailable (response header missing)'}`);
} catch (error) {
  if (error instanceof Spitch.APIError) {
    console.error(`Speech request failed: ${error.message}`);
    const requestId = error.headers?.get('x-request-id');
    if (requestId) console.error(`Request ID: ${requestId}`);
  } else {
    console.error(error instanceof Error ? error.message : String(error));
  }
  process.exitCode = 1;
}
