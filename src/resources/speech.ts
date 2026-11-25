// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';

/**
 * All speech-focused APIs (TTS and STT)
 */
export class Speech extends APIResource {
  /**
   * Generate audio
   */
  generate(body: SpeechGenerateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/v1/speech', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'audio/wav' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Convert speech to text. Upload audio file containing speech and get back text
   * that represents the content of the audio file.
   */
  transcribe(body: SpeechTranscribeParams, options?: RequestOptions): APIPromise<Transcription> {
    return this._client.post(
      '/v1/transcriptions',
      multipartFormRequestOptions({ body: transcriptionBody(body), ...options }, this._client),
    );
  }

  /** Submit the audio once and save the returned job ID. */
  submitTranscription(body: SpeechTranscribeParams, options?: RequestOptions): APIPromise<TranscriptionJob> {
    return this._client.post(
      '/v1/transcriptions',
      multipartFormRequestOptions(
        {
          ...options,
          body: transcriptionBody(body),
          query: { ...options?.query, async: true },
          maxRetries: 0,
        },
        this._client,
      ),
    );
  }

  /** Retrieve a job using the workspace that submitted it. */
  getTranscription(jobId: string, options?: RequestOptions): APIPromise<TranscriptionJob> {
    if (!jobId || jobId === '.' || jobId === '..') throw new TypeError('Provide a transcription job ID.');
    return this._client.get('/v1/transcriptions/' + encodeURIComponent(jobId), options);
  }

  /** Poll by ID until succeeded or failed. A deadline leaves the server-side job running. */
  async waitForTranscription(
    jobId: string,
    { timeoutMs = 300_000, pollIntervalMs = 2_000 } = {},
  ): Promise<TranscriptionJob> {
    for (const value of [timeoutMs, pollIntervalMs]) {
      if (!Number.isFinite(value) || value <= 0 || value > 2_147_483_647) {
        throw new RangeError('timeoutMs and pollIntervalMs must be positive and within the timer range.');
      }
    }
    const controller = new AbortController();
    const deadline = performance.now() + timeoutMs;
    const timeoutError = () =>
      new Error('Timed out waiting for transcription ' + jobId + '. Resume with the same job ID.');
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      while (performance.now() < deadline) {
        const job = await this.getTranscription(jobId, { maxRetries: 0, signal: controller.signal });
        const remaining = deadline - performance.now();
        if (remaining <= 0) break;
        if (job.status === 'succeeded' || job.status === 'failed') return job;
        await new Promise<void>((resolve) => setTimeout(resolve, Math.min(pollIntervalMs, remaining)));
      }
      throw timeoutError();
    } catch (error) {
      if (controller.signal.aborted) throw timeoutError();
      throw error;
    } finally {
      clearTimeout(timer);
    }
  }
}

function transcriptionBody(body: SpeechTranscribeParams) {
  const { content, url, ...params } = body;
  if ((content == null) === (url == null)) {
    throw new TypeError('Supply exactly one audio source: content for a file or url for a public audio URL.');
  }
  const address = typeof content === 'string' ? content : url;
  if (address !== undefined && !/^https?:\/\/[^/\s]+/i.test(address)) {
    throw new TypeError('Supply a public HTTP(S) audio URL in url.');
  }
  const source = address !== undefined ? { url: address } : { content };
  return { ...params, ...source };
}

export interface TranscriptionJob {
  id: string;
  status: 'queued' | 'processing' | 'succeeded' | 'failed';
  created_at: string;
  polling_url: string;
  completed_at?: string | null;
  result?: Transcription | null;
  error?: Record<string, unknown> | null;
}

/**
 * a segment (sentence or word-level) of the transcript. It contains a start and
 * end time.
 */
export interface Segment {
  /**
   * the exact time when this segment ended.
   */
  end: number;

  /**
   * the exact time when this segment started.
   */
  start: number;

  /**
   * the text that belongs in this timeframe.
   */
  text: string;
}

/**
 * Response from speech-to-text.
 */
export interface Transcription {
  /**
   * for audit purposes.
   */
  request_id?: string;

  /**
   * Either `sentence-level` or `word-level` groupings of your transcript. Each
   * sentence (or word) will fall within a time range.
   */
  segments?: Array<Segment> | null;

  text?: string;
}

export interface SpeechGenerateParams {
  /**
   * The text for which you want to generate audio.
   */
  text: string;

  /**
   * The voice you want to be used for audio generation.
   */
  voice:
    | 'sade'
    | 'segun'
    | 'femi'
    | 'funmi'
    | 'amina'
    | 'aliyu'
    | 'hasan'
    | 'zainab'
    | 'john'
    | 'jude'
    | 'lina'
    | 'lucy'
    | 'henry'
    | 'kani'
    | 'remi'
    | 'kingsley'
    | 'ngozi'
    | 'amara'
    | 'obinna'
    | 'ebuka'
    | 'hana'
    | 'haile'
    | 'tena'
    | 'tesfaye'
    | 'ufoma'
    | 'tega'
    | 'justice'
    | 'boma';

  /**
   * The audio format for the returned audio data, defaults to `wav`.
   */
  format?: 'mp3' | 'wav' | 'ogg_opus' | 'webm_opus' | 'mulaw' | 'alaw' | 'flac' | 'pcm_s16le';

  /**
   * This is optional; an ISO 639 language code to be used for the generation.
   */
  language?: string;

  /**
   * The speed of the voice, defaults to `1.0`
   */
  speed?: number;
}

export type SpeechTranscribeParams = (
  | { content: Uploadable | string; url?: never }
  | { url: string; content?: never }
) & {
  /**
   * This is optional, an ISO-639 language code that corresponds to the language in
   * the `content`.
   */
  language?: string | null;

  /**
   * @deprecated Select the model to be used to perform the transcription, this param
   * has been deprecated.
   */
  model?: 'mansa_v1' | 'legacy' | null;

  special_words?: string | null;

  timestamp?: 'sentence' | 'word' | null;
};

export declare namespace Speech {
  export {
    type Segment as Segment,
    type Transcription as Transcription,
    type TranscriptionJob as TranscriptionJob,
    type SpeechGenerateParams as SpeechGenerateParams,
    type SpeechTranscribeParams as SpeechTranscribeParams,
  };
}
