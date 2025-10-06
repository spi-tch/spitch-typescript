// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Files extends APIResource {
  /**
   * Get Files
   */
  list(
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListResponse> {
    return this._client.get('/v1/files', { query, ...options });
  }

  /**
   * Delete File
   */
  delete(fileID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v1/files/${fileID}`, options);
  }

  /**
   * Download File
   */
  download(
    fileID: string,
    query: FileDownloadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/v1/files/${fileID}/url`, { query, ...options });
  }

  /**
   * Get File
   */
  get(fileID: string, options?: RequestOptions): APIPromise<FileGetResponse> {
    return this._client.get(path`/v1/files/${fileID}`, options);
  }

  /**
   * Upload File
   */
  upload(body: FileUploadParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v1/files', multipartFormRequestOptions({ body, ...options }, this._client));
  }

  /**
   * Get Usage
   */
  usage(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/files:usage', options);
  }
}

export interface FileListResponse {
  items: Array<FileListResponse.Item>;

  next_cursor?: string | null;
}

export namespace FileListResponse {
  export interface Item {
    category: string | null;

    content_type: string | null;

    created_at: string;

    file_id: string;

    original_name: string | null;

    size_bytes: number | null;

    status: string;
  }
}

export type FileDeleteResponse = unknown;

export type FileDownloadResponse = unknown;

export interface FileGetResponse {
  category: string | null;

  content_type: string | null;

  created_at: string;

  file_id: string;

  original_name: string | null;

  size_bytes: number | null;

  status: string;
}

export type FileUploadResponse = unknown;

export type FileUsageResponse = unknown;

export interface FileListParams {
  cursor?: string | null;

  limit?: number;

  status?: 'uploading' | 'ready' | null;
}

export interface FileDownloadParams {
  ttl?: number;
}

export interface FileUploadParams {
  file: Uploadable;
}

export declare namespace Files {
  export {
    type FileListResponse as FileListResponse,
    type FileDeleteResponse as FileDeleteResponse,
    type FileDownloadResponse as FileDownloadResponse,
    type FileGetResponse as FileGetResponse,
    type FileUploadResponse as FileUploadResponse,
    type FileUsageResponse as FileUsageResponse,
    type FileListParams as FileListParams,
    type FileDownloadParams as FileDownloadParams,
    type FileUploadParams as FileUploadParams,
  };
}
