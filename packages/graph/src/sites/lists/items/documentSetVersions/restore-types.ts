// DO NOT EDIT THIS FILE
import type { Operation } from './../../../../common.ts';

export interface Endpoints {
  /**
   * Restore a document set version.
   */
  'POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore',
    'post'
  >;
}
