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
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
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

export interface SpeechTranscribeParams {
  /**
   * The audio file or content that you want to transcribe. This could be;
   * `file bytes`, a `url to an audio file` (ensure the link does not require
   * authentication to access the file) or a `file UUID`.
   */
  content: Uploadable | string;

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
}

export declare namespace Speech {
  export {
    type Segment as Segment,
    type Transcription as Transcription,
    type SpeechGenerateParams as SpeechGenerateParams,
    type SpeechTranscribeParams as SpeechTranscribeParams,
  };
}
