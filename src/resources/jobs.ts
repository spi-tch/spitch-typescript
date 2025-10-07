// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { FilesCursor, type FilesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Get Jobs
   */
  list(
    query: JobListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<JobsFilesCursor, Job> {
    return this._client.getAPIList('/v1/jobs', FilesCursor<Job>, { query, ...options });
  }

  /**
   * Get Job
   */
  get(jobID: string, options?: RequestOptions): APIPromise<Job> {
    return this._client.get(path`/v1/jobs/${jobID}`, options);
  }
}

export type JobsFilesCursor = FilesCursor<Job>;

/**
 * Metadata model for job metadata.
 */
export interface Job {
  created_by: string;

  due_date: string;

  job_id: string;

  org_id: string;

  status: string;
}

/**
 * Response model for listing jobs.
 *
 * Attributes: items: list of job metadata responses next_cursor: Optional cursor
 * for pagination to get next page of results
 */
export interface Jobs {
  items: Array<Job>;

  next_cursor?: string | null;
}

export interface JobListParams extends FilesCursorParams {
  status?: 'queued' | 'in_progress' | 'finished' | null;
}

export declare namespace Jobs {
  export {
    type Job as Job,
    type Jobs as Jobs,
    type JobsFilesCursor as JobsFilesCursor,
    type JobListParams as JobListParams,
  };
}
