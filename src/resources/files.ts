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
  ): PagePromise<FilesFilesCursor, File> {
    return this._client.getAPIList('/v1/files', FilesCursor<File>, { query, ...options });
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
  ): APIPromise<FileDownloadResponse> {
    return this._client.get(path`/v1/files/${fileID}/url`, { query, ...options });
  }

  /**
   * Get File
   */
  get(fileID: string, options?: RequestOptions): APIPromise<File> {
    return this._client.get(path`/v1/files/${fileID}`, options);
  }

  /**
   * Upload File
   */
  upload(body: FileUploadParams, options?: RequestOptions): APIPromise<File> {
    return this._client.post('/v1/files', multipartFormRequestOptions({ body, ...options }, this._client));
  }

  /**
   * Get Usage
   */
  usage(options?: RequestOptions): APIPromise<FileUsage> {
    return this._client.get('/v1/files:usage', options);
  }
}

export type FilesFilesCursor = FilesCursor<File>;

export interface File {
  category: string | null;

  content_type: string | null;

  created_at: string;

  file_id: string;

  original_name: string | null;

  size_bytes: number | null;

  status: string;

  uploaded_by: string | null;
}

export interface FileUsage {
  num_files: number;

  total: string;

  total_bytes: number;

  used: string;

  used_bytes: number;
}

export interface Files {
  items: Array<File>;

  next_cursor?: string | null;
}

export interface FileDeleteResponse {
  status?: boolean;
}

export interface FileDownloadResponse {
  expires_at: string;

  file_id: string;

  url: string;
}

export interface FileListParams extends FilesCursorParams {
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
    type File as File,
    type FileUsage as FileUsage,
    type Files as Files,
    type FileDeleteResponse as FileDeleteResponse,
    type FileDownloadResponse as FileDownloadResponse,
    type FilesFilesCursor as FilesFilesCursor,
    type FileListParams as FileListParams,
    type FileDownloadParams as FileDownloadParams,
    type FileUploadParams as FileUploadParams,
  };
}
