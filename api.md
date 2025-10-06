# Speech

Types:

- <code><a href="./src/resources/speech.ts">SpeechTranscribeResponse</a></code>

Methods:

- <code title="post /v1/speech">client.speech.<a href="./src/resources/speech.ts">generate</a>({ ...params }) -> Response</code>
- <code title="post /v1/transcriptions">client.speech.<a href="./src/resources/speech.ts">transcribe</a>({ ...params }) -> SpeechTranscribeResponse</code>

# Text

Types:

- <code><a href="./src/resources/text.ts">TextToneMarkResponse</a></code>
- <code><a href="./src/resources/text.ts">TextTranslateResponse</a></code>

Methods:

- <code title="post /v1/diacritics">client.text.<a href="./src/resources/text.ts">toneMark</a>({ ...params }) -> TextToneMarkResponse</code>
- <code title="post /v1/translate">client.text.<a href="./src/resources/text.ts">translate</a>({ ...params }) -> TextTranslateResponse</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/files.ts">FileDeleteResponse</a></code>
- <code><a href="./src/resources/files.ts">FileDownloadResponse</a></code>
- <code><a href="./src/resources/files.ts">FileGetResponse</a></code>
- <code><a href="./src/resources/files.ts">FileUploadResponse</a></code>
- <code><a href="./src/resources/files.ts">FileUsageResponse</a></code>

Methods:

- <code title="get /v1/files">client.files.<a href="./src/resources/files.ts">list</a>({ ...params }) -> FileListResponse</code>
- <code title="delete /v1/files/{file_id}">client.files.<a href="./src/resources/files.ts">delete</a>(fileID) -> unknown</code>
- <code title="get /v1/files/{file_id}/url">client.files.<a href="./src/resources/files.ts">download</a>(fileID, { ...params }) -> unknown</code>
- <code title="get /v1/files/{file_id}">client.files.<a href="./src/resources/files.ts">get</a>(fileID) -> FileGetResponse</code>
- <code title="post /v1/files">client.files.<a href="./src/resources/files.ts">upload</a>({ ...params }) -> unknown</code>
- <code title="get /v1/files:usage">client.files.<a href="./src/resources/files.ts">usage</a>() -> unknown</code>
