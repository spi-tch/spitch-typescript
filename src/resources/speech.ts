// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';

export class Speech extends APIResource {
  /**
   * Synthesize
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
   * Transcribe
   */
  transcribe(body: SpeechTranscribeParams, options?: RequestOptions): APIPromise<SpeechTranscribeResponse> {
    return this._client.post(
      '/v1/transcriptions',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

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
  language: 'yo' | 'en' | 'ha' | 'ig' | 'am';

  content?: Uploadable | null;

  model?: 'mansa_v1' | 'legacy' | null;

  special_words?: string | null;

  timestamp?: 'sentence' | 'word' | 'none' | null;

  url?: string | null;
}

export declare namespace Speech {
  export {
    type SpeechTranscribeResponse as SpeechTranscribeResponse,
    type SpeechGenerateParams as SpeechGenerateParams,
    type SpeechTranscribeParams as SpeechTranscribeParams,
  };
}
