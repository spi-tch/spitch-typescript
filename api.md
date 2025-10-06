# Speech

Types:

- <code><a href="./src/resources/speech.ts">Transcription</a></code>

Methods:

- <code title="post /v1/speech">client.speech.<a href="./src/resources/speech.ts">generate</a>({ ...params }) -> Response</code>
- <code title="post /v1/transcriptions">client.speech.<a href="./src/resources/speech.ts">transcribe</a>({ ...params }) -> Transcription</code>

# Text

Types:

- <code><a href="./src/resources/text.ts">Diacritics</a></code>
- <code><a href="./src/resources/text.ts">Translation</a></code>

Methods:

- <code title="post /v1/diacritics">client.text.<a href="./src/resources/text.ts">toneMark</a>({ ...params }) -> Diacritics</code>
- <code title="post /v1/translate">client.text.<a href="./src/resources/text.ts">translate</a>({ ...params }) -> Translation</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">File</a></code>
- <code><a href="./src/resources/files.ts">FileUsage</a></code>
- <code><a href="./src/resources/files.ts">Files</a></code>
- <code><a href="./src/resources/files.ts">FileDeleteResponse</a></code>
- <code><a href="./src/resources/files.ts">FileDownloadResponse</a></code>

Methods:

- <code title="get /v1/files">client.files.<a href="./src/resources/files.ts">list</a>({ ...params }) -> FilesFilesCursor</code>
- <code title="delete /v1/files/{file_id}">client.files.<a href="./src/resources/files.ts">delete</a>(fileID) -> FileDeleteResponse</code>
- <code title="get /v1/files/{file_id}/url">client.files.<a href="./src/resources/files.ts">download</a>(fileID, { ...params }) -> FileDownloadResponse</code>
- <code title="get /v1/files/{file_id}">client.files.<a href="./src/resources/files.ts">get</a>(fileID) -> File</code>
- <code title="post /v1/files">client.files.<a href="./src/resources/files.ts">upload</a>({ ...params }) -> File</code>
- <code title="get /v1/files:usage">client.files.<a href="./src/resources/files.ts">usage</a>() -> FileUsage</code>
