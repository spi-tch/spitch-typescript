// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Speech extends APIResource {
  /**
   * Synthesize
   */
  synthesize(body: SpeechSynthesizeParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v1/speech', { body, ...options });
  }
}

export type Language = 'yo' | 'en' | 'ha' | 'ig' | 'am';

export type SpeechSynthesizeResponse = unknown;

export interface SpeechSynthesizeParams {
  language: Language;

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

export declare namespace Speech {
  export {
    type Language as Language,
    type SpeechSynthesizeResponse as SpeechSynthesizeResponse,
    type SpeechSynthesizeParams as SpeechSynthesizeParams,
  };
}
