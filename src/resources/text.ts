// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Text extends APIResource {
  /**
   * Tone Mark
   */
  toneMark(body: TextToneMarkParams, options?: RequestOptions): APIPromise<Diacritics> {
    return this._client.post('/v1/diacritics', { body, ...options });
  }

  /**
   * Translate
   */
  translate(body: TextTranslateParams, options?: RequestOptions): APIPromise<Translation> {
    return this._client.post('/v1/translate', { body, ...options });
  }
}

export interface Diacritics {
  request_id: string;

  text: string;
}

export interface Translation {
  request_id: string;

  text: string;
}

export interface TextToneMarkParams {
  language: 'yo' | 'en' | 'ha' | 'ig' | 'am';

  text: string;
}

export interface TextTranslateParams {
  source: 'yo' | 'en' | 'ha' | 'ig' | 'am';

  target: 'yo' | 'en' | 'ha' | 'ig' | 'am';

  text: string;
}

export declare namespace Text {
  export {
    type Diacritics as Diacritics,
    type Translation as Translation,
    type TextToneMarkParams as TextToneMarkParams,
    type TextTranslateParams as TextTranslateParams,
  };
}
