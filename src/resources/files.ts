// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { FilesCursor, type FilesCursorParams, PagePromise } from '../core/pagination';
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
  ): PagePromise<FileMetasFilesCursor, FileMeta> {
    return this._client.getAPIList('/v1/files', FilesCursor<FileMeta>, { query, ...options });
  }

  /**
   * Delete File
   */
  delete(fileID: string, options?: RequestOptions): APIPromise<FileDeleteResponse> {
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
  get(fileID: string, options?: RequestOptions): APIPromise<FileMeta> {
    return this._client.get(path`/v1/files/${fileID}`, options);
  }

  /**
   * Upload a file to your storage.
   */
  upload(body: FileUploadParams, options?: RequestOptions): APIPromise<FileMeta> {
    return this._client.post('/v1/files', multipartFormRequestOptions({ body, ...options }, this._client));
  }

  /**
   * Get Usage
   */
  usage(options?: RequestOptions): APIPromise<FileUsage> {
    return this._client.get('/v1/files:usage', options);
  }
}

export type FileMetasFilesCursor = FilesCursor<FileMeta>;

/**
 * Metadata info for this file.
 */
export interface FileMeta {
  created_at: string;

  file_id: string;

  original_name: string | null;

  size_bytes: number | null;

  status: string;

  uploaded_by?: string | null;
}

export interface FileUsage {
  /**
   * number of files available.
   */
  num_files?: number;

  /**
   * total storage available in human-readable format
   */
  total?: string;

  /**
   * storage used in bytes
   */
  total_bytes?: number;

  /**
   * storage used in human-readable format
   */
  used?: string;

  /**
   * total storage available in bytes
   */
  used_bytes?: number;
}

export interface FileDeleteResponse {
  status?: boolean;
}

export type FileDownloadResponse = unknown;

export interface FileListParams extends FilesCursorParams {}

export interface FileDownloadParams {
  ttl?: number;
}

export interface FileUploadParams {
  file: Uploadable;
}

export declare namespace Files {
  export {
    type FileMeta as FileMeta,
    type FileUsage as FileUsage,
    type FileDeleteResponse as FileDeleteResponse,
    type FileDownloadResponse as FileDownloadResponse,
    type FileMetasFilesCursor as FileMetasFilesCursor,
    type FileListParams as FileListParams,
    type FileDownloadParams as FileDownloadParams,
    type FileUploadParams as FileUploadParams,
  };
}
