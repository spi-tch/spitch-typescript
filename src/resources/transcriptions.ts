// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SpeechAPI from './speech';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Transcriptions extends APIResource {
  /**
   * Transcribe
   */
  create(
    body: TranscriptionCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TranscriptionCreateResponse> {
    return this._client.post('/v1/transcriptions', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }
}

export interface TranscriptionCreateResponse {
  request_id: string;

  text: string;

  timestamps?: Array<TranscriptionCreateResponse.Timestamp> | null;
}

export namespace TranscriptionCreateResponse {
  export interface Timestamp {
    end: number;

    start: number;

    text: string;
  }
}

export interface TranscriptionCreateParams {
  content?: Uploadable | null;

  language?: SpeechAPI.Language | null;

  model?: 'mansa_v1' | 'legacy' | null;

  special_words?: string | null;

  timestamp?: 'sentence' | 'word' | 'none' | null;

  url?: string | null;
}

export declare namespace Transcriptions {
  export {
    type TranscriptionCreateResponse as TranscriptionCreateResponse,
    type TranscriptionCreateParams as TranscriptionCreateParams,
  };
}
