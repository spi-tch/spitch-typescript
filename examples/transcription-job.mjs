// Run submit once, then run resume with the printed ID in another process.
import Spitch from 'spitch';

const [command, value, timeoutSeconds = '300'] = process.argv.slice(2);
if (!value || !['submit', 'resume'].includes(command)) {
  throw new Error('Usage: node transcription-job.mjs submit URL | resume JOB_ID [timeout_seconds]');
}
const client = new Spitch();
if (command === 'submit') {
  console.log((await client.speech.submitTranscription({ url: value })).id);
} else {
  const job = await client.speech.waitForTranscription(value, { timeoutMs: Number(timeoutSeconds) * 1000 });
  if (job.status === 'failed') throw new Error('Transcription failed: ' + JSON.stringify(job.error));
  if (!job.result) throw new Error('The completed job has no result.');
  console.log(job.result.text);
}
