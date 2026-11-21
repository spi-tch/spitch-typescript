import Spitch from 'spitch';

const client = new Spitch();
const result = await client.speech.transcribe({
  url: 'https://spitch.app/docs-assets/audio/voices/ngozi.wav',
});
console.log(result.text);
// For a local copy, import createReadStream from node:fs and call
// client.speech.transcribe({ content: createReadStream('ngozi.wav') }).
