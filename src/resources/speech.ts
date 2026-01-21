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
   * Convert text to speech. Select a voice and use that to generate audio in any
   * format. Audio is retured in chunks.
   */
  generate(params: SpeechGenerateParams, options?: RequestOptions): APIPromise<Response> {
    const { 'Spitch-X-Data-Retention': spitchXDataRetention, ...body } = params;
    return this._client.post('/v1/speech', {
      body,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'audio/wav',
          ...(spitchXDataRetention?.toString() != null ?
            { 'Spitch-X-Data-Retention': spitchXDataRetention?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * Convert speech to text. Upload audio file containing speech and get back text
   * that represents the content of the audio file.
   */
  transcribe(params: SpeechTranscribeParams, options?: RequestOptions): APIPromise<SpeechTranscribeResponse> {
    const { 'Spitch-X-Data-Retention': spitchXDataRetention, ...body } = params;
    return this._client.post(
      '/v1/transcriptions',
      multipartFormRequestOptions(
        {
          body,
          ...options,
          headers: buildHeaders([
            {
              ...(spitchXDataRetention?.toString() != null ?
                { 'Spitch-X-Data-Retention': spitchXDataRetention?.toString() }
              : undefined),
            },
            options?.headers,
          ]),
        },
        this._client,
      ),
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
export interface SpeechTranscribeResponse {
  /**
   * for audit purposes.
   */
  request_id: string;

  text: string;

  /**
   * sentence-level or word-level groupings of your transcript. Each sentence (or
   * word) will fall within a time range.
   */
  segments?: Array<Segment> | null;
}

export interface SpeechGenerateParams {
  /**
   * Body param
   */
  language: 'yo' | 'en' | 'ha' | 'ig' | 'am' | 'pcm';

  /**
   * Body param
   */
  text: string;

  /**
   * Body param
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
    | 'ngozi'
    | 'amara'
    | 'obinna'
    | 'ebuka'
    | 'hana'
    | 'selam'
    | 'tena'
    | 'tesfaye';

  /**
   * Body param: the audio format for the returned audio bytes.
   */
  format?: 'mp3' | 'wav' | 'ogg_opus' | 'webm_opus' | 'mulaw' | 'alaw' | 'flac' | 'pcm_s16le';

  /**
   * Body param
   */
  model?: string | null;

  /**
   * Header param
   */
  'Spitch-X-Data-Retention'?: boolean;
}

export interface SpeechTranscribeParams {
  /**
   * Body param
   */
  language: 'yo' | 'en' | 'ha' | 'ig' | 'am' | 'pcm';

  /**
   * Body param
   */
  content?: Uploadable | string | null;

  /**
   * Body param
   */
  model?: 'mansa_v1' | 'legacy' | null;

  /**
   * Body param
   */
  special_words?: string | null;

  /**
   * Body param
   */
  timestamp?: 'sentence' | 'word' | 'none' | null;

  /**
   * @deprecated Body param
   */
  url?: string | null;

  /**
   * Header param
   */
  'Spitch-X-Data-Retention'?: boolean;
}

export declare namespace Speech {
  export {
    type Segment as Segment,
    type SpeechTranscribeResponse as SpeechTranscribeResponse,
    type SpeechGenerateParams as SpeechGenerateParams,
    type SpeechTranscribeParams as SpeechTranscribeParams,
  };
}
