// DO NOT EDIT THIS FILE
import type { Operation } from './../../../../common.ts';

export interface Endpoints {
  /**
   */
  'DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields',
    'delete'
  >;
  /**
   * A collection of the fields and values for this version of the list item.
   */
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields',
    'get'
  >;
  /**
   */
  'PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields',
    'patch'
  >;
}
