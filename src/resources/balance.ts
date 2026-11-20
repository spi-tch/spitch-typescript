import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Balance extends APIResource {
  /** Read the prepaid balance for the account that owns the API key. */
  get(options?: RequestOptions): APIPromise<BalanceResponse> {
    return this._client.get('/v1/balance', options);
  }
}

export interface BalanceResponse {
  /** Available prepaid credit as an exact decimal string. */
  amount: string;
  currency: 'USD';
}
