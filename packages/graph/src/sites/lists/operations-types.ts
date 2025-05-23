// DO NOT EDIT THIS FILE
import type { Operation } from './../../common.ts';

export interface Endpoints {
  /**
   */
  'DELETE /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}',
    'delete'
  >;
  /**
   * The collection of long-running operations on the list.
   */
  'GET /sites/{site-id}/lists/{list-id}/operations': Operation<
    '/sites/{site-id}/lists/{list-id}/operations',
    'get'
  >;
  /**
   * The collection of long-running operations on the list.
   */
  'GET /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}',
    'get'
  >;
  /**
   */
  'PATCH /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}',
    'patch'
  >;
  /**
   */
  'POST /sites/{site-id}/lists/{list-id}/operations': Operation<
    '/sites/{site-id}/lists/{list-id}/operations',
    'post'
  >;
}
