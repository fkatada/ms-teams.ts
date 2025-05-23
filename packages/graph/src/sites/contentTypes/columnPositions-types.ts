// DO NOT EDIT THIS FILE
import type { Operation } from './../../common.ts';

export interface Endpoints {
  /**
   * Column order information in a content type.
   */
  'GET /sites/{site-id}/contentTypes/{contentType-id}/columnPositions': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/columnPositions',
    'get'
  >;
  /**
   * Column order information in a content type.
   */
  'GET /sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}',
    'get'
  >;
}
