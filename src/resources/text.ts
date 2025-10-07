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

/**
 * Response model for text diacritization requests.
 *
 *     Attributes:
 *         request_id: Unique identifier for the diacritization request
 *         text: Text with added diacritical marks for proper pronunciation
 *         language: Language code for the diacritized text
 */
export interface Diacritics {
  request_id: string;

  text: string;
}

/**
 * Translation result model.
 *
 * Attributes: request_id (UUID): Unique ID for this request. text: translated
 * text. due_date: used when model is `human`. the date you can expect the
 * translation to be delivered
 */
export interface Translation {
  request_id: string;

  text: string;

  due_date?: string | null;
}

export interface TextToneMarkParams {
  language: 'yo' | 'en' | 'ha' | 'ig' | 'am';

  text: string;
}

export interface TextTranslateParams {
  source: 'yo' | 'en' | 'ha' | 'ig' | 'am';

  target: 'yo' | 'en' | 'ha' | 'ig' | 'am';

  file_id?: string | null;

  instructions?: string | null;

  model?: 'human' | 'auto';

  text?: string | null;
}

export declare namespace Text {
  export {
    type Diacritics as Diacritics,
    type Translation as Translation,
    type TextToneMarkParams as TextToneMarkParams,
    type TextTranslateParams as TextTranslateParams,
  };
}
