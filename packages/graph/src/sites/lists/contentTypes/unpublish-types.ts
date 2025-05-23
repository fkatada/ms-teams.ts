// DO NOT EDIT THIS FILE
import type { Operation } from './../../../common.ts';

export interface Endpoints {
  /**
   * Unpublish a contentType from a content type hub site.
   */
  'POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/unpublish': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/unpublish',
    'post'
  >;
}
