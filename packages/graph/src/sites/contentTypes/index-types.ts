// DO NOT EDIT THIS FILE
import type { Operation } from './../../common.ts';

export interface Endpoints {
  /**
   * Remove a content type from a list or a site.
   */
  'DELETE /sites/{site-id}/contentTypes/{contentType-id}': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}',
    'delete'
  >;
  /**
   * Get the collection of contentType resources in a site.
   */
  'GET /sites/{site-id}/contentTypes': Operation<'/sites/{site-id}/contentTypes', 'get'>;
  /**
   * Retrieve the metadata for a content type in a site or a list.
   */
  'GET /sites/{site-id}/contentTypes/{contentType-id}': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}',
    'get'
  >;
  /**
   * Update a content type.
   */
  'PATCH /sites/{site-id}/contentTypes/{contentType-id}': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}',
    'patch'
  >;
  /**
   * Create a new contentType in a site.
   */
  'POST /sites/{site-id}/contentTypes': Operation<'/sites/{site-id}/contentTypes', 'post'>;
}
