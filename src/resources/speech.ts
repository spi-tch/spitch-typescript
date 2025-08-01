// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Speech extends APIResource {
  /**
   * Synthesize
   */
  generate(body: SpeechGenerateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v1/speech', { body, ...options });
  }

  /**
   * Transcribe
   */
  transcribe(
    body: SpeechTranscribeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SpeechTranscribeResponse> {
    return this._client.post('/v1/transcriptions', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }
}

export type SpeechGenerateResponse = unknown;

export interface SpeechTranscribeResponse {
  request_id: string;

  text: string;

  timestamps?: Array<SpeechTranscribeResponse.Timestamp> | null;
}

export namespace SpeechTranscribeResponse {
  export interface Timestamp {
    end: number;

    start: number;

    text: string;
  }
}

export interface SpeechGenerateParams {
  language: 'yo' | 'en' | 'ha' | 'ig' | 'am';

  text: string;

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

  model?: 'legacy' | null;
}

export interface SpeechTranscribeParams {
  content?: Uploadable | null;

  language?: 'yo' | 'en' | 'ha' | 'ig' | 'am' | null;

  model?: 'mansa_v1' | 'legacy' | null;

  special_words?: string | null;

  timestamp?: 'sentence' | 'word' | 'none' | null;

  url?: string | null;
}

export declare namespace Speech {
  export {
    type SpeechGenerateResponse as SpeechGenerateResponse,
    type SpeechTranscribeResponse as SpeechTranscribeResponse,
    type SpeechGenerateParams as SpeechGenerateParams,
    type SpeechTranscribeParams as SpeechTranscribeParams,
  };
}
