// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Text extends APIResource {
  /**
   * Add appropriate tone marks to text.
   */
  toneMark(body: TextToneMarkParams, options?: RequestOptions): APIPromise<Diacritics> {
    return this._client.post('/v1/diacritics', { body, ...options });
  }

  /**
   * Translate text from one language to another. Select the source and target
   * languages, and get text in new language.
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
  /**
   * Only Yoruba is supported at the moment.
   */
  language: string;

  text: string;
}

export interface TextTranslateParams {
  /**
   * An ISO 639 code of the language you want to translate to.
   */
  target: string;

  /**
   * The text to be translated.
   */
  text: string;

  /**
   * Whether to be `formal` or `casual`.
   */
  formality?: 'casual' | 'formal';

  /**
   * An ISO 639 code of the language you're translating from
   */
  source?: string | null;

  /**
   * The tone of the translated text.
   */
  tone?: 'neutral' | 'warm' | 'professional' | 'narration';
}

export declare namespace Text {
  export {
    type Diacritics as Diacritics,
    type Translation as Translation,
    type TextToneMarkParams as TextToneMarkParams,
    type TextTranslateParams as TextTranslateParams,
  };
}
