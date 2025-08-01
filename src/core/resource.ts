// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Spitchy } from '../client';

export abstract class APIResource {
  protected _client: Spitchy;

  constructor(client: Spitchy) {
    this._client = client;
  }
}
