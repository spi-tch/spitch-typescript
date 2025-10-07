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
   * Get a paginated list of files for the authenticated organization.
   *
   * Args: identity: Authentication identity containing org_id and user_id limit:
   * Maximum number of files to return (max 100) status: Optional filter by file
   * status (processing, ready, etc.) cursor: Optional pagination cursor for getting
   * next page db: Database session
   *
   * Returns: ListFilesResponse: Paginated list of files with metadata
   *
   * Raises: HTTPException: 400 if cursor is invalid
   */
  list(
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FilesFilesCursor, File> {
    return this._client.getAPIList('/v1/files', FilesCursor<File>, { query, ...options });
  }

  /**
   * Delete a file and its associated S3 object.
   *
   * Args: file_id: UUID of the file to delete identity: Authentication identity
   * containing org_id db: Database session s3: S3 session for deleting objects
   *
   * Returns: dict: Success confirmation
   *
   * Raises: HTTPException: 404 if file not found or doesn't belong to org
   */
  delete(fileID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v1/files/${fileID}`, options);
  }

  /**
   * Generate a pre-signed download URL for a file.
   *
   * Args: file_id: UUID of the file to download identity: Authentication identity
   * containing org_id ttl: Time-to-live for the download URL in seconds (60-3600)
   * db: Database session s3: S3 session for generating pre-signed URLs
   *
   * Returns: FileDownloadResponse: Contains file_id, download URL, and expiration
   * time
   *
   * Raises: HTTPException: 404 if file not found, doesn't belong to org, or not
   * ready
   */
  download(
    fileID: string,
    query: FileDownloadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileDownloadResponse> {
    return this._client.get(path`/v1/files/${fileID}/url`, { query, ...options });
  }

  /**
   * Get metadata for a specific file.
   *
   * Args: file_id: UUID of the file to retrieve identity: Authentication identity
   * containing org_id db: Database session
   *
   * Returns: FileMetaResponse: File metadata including upload information
   *
   * Raises: HTTPException: 404 if file not found or doesn't belong to org
   * HTTPException: 500 if uploader information is corrupted
   */
  get(fileID: string, options?: RequestOptions): APIPromise<File> {
    return this._client.get(path`/v1/files/${fileID}`, options);
  }

  /**
   * Upload a file to the Spitch server.
   *
   * Args: file: The file to upload from the request identity: Authentication
   * identity containing org_id and user_id db: Database session
   *
   * Returns: FileMetaResponse: Metadata for the uploaded file
   *
   * Raises: HTTPException: 500 if upload fails
   */
  upload(body: FileUploadParams, options?: RequestOptions): APIPromise<File> {
    return this._client.post('/v1/files', multipartFormRequestOptions({ body, ...options }, this._client));
  }

  /**
   * Get storage usage statistics for the authenticated organization.
   *
   * Args: identity: Authentication identity containing org_id db: Database session
   *
   * Returns: FileUsage: Usage statistics including total/used bytes and file count
   *
   * Raises: HTTPException: 500 if unable to calculate usage
   */
  usage(options?: RequestOptions): APIPromise<FileUsage> {
    return this._client.get('/v1/files:usage', options);
  }
}

export type FilesFilesCursor = FilesCursor<File>;

/**
 * description of a file. Attributes: file_id: unique identifier for the file.
 * status: status of the file, `processing` or `ready` original_name: original name
 * of the file. If the file was uploaded via API
 */
export interface File {
  category: string | null;

  content_type: string | null;

  created_at: string;

  file_id: string;

  original_name: string | null;

  size_bytes: number | null;

  status: 'uploading' | 'ready';

  uploaded_by?: string | null;
}

/**
 * Storage usage information for an organization.
 *
 * Attributes: total: Human-readable total storage limit used: Human-readable used
 * storage amount total_bytes: Total storage limit in bytes used_bytes: Used
 * storage amount in bytes num_files: Number of files stored
 */
export interface FileUsage {
  num_files: number;

  total: string;

  total_bytes: number;

  used: string;

  used_bytes: number;
}

/**
 * Response model for listing files.
 *
 * Attributes: items: List of file metadata responses next_cursor: Optional cursor
 * for pagination to get next page of results
 */
export interface Files {
  items: Array<File>;

  next_cursor?: string | null;
}

export type FileDeleteResponse = unknown;

/**
 * Response model for file download URLs.
 *
 * Attributes: file_id: Unique identifier for the file url: Pre-signed download URL
 * expires_at: When the download URL expires
 */
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
