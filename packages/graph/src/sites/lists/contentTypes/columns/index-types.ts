// DO NOT EDIT THIS FILE
import type { Operation } from './../../../../common.ts';

export interface Endpoints {
  /**
   */
  'DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    'delete'
  >;
  /**
   * The collection of column definitions for this content type.
   */
  'GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns',
    'get'
  >;
  /**
   * The collection of column definitions for this content type.
   */
  'GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    'get'
  >;
  /**
   */
  'PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    'patch'
  >;
  /**
   */
  'POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns',
    'post'
  >;
}
