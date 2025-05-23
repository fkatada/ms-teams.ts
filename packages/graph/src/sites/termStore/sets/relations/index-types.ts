// DO NOT EDIT THIS FILE
import type { Operation } from './../../../../common.ts';

export interface Endpoints {
  /**
   */
  'DELETE /sites/{site-id}/termStore/sets/{set-id}/relations/{relation-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/relations/{relation-id}',
    'delete'
  >;
  /**
   * Get the different relation of a [term] or [set] from the relations navigation property.
   */
  'GET /sites/{site-id}/termStore/sets/{set-id}/relations': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/relations',
    'get'
  >;
  /**
   * Indicates which terms have been pinned or reused directly under the set.
   */
  'GET /sites/{site-id}/termStore/sets/{set-id}/relations/{relation-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/relations/{relation-id}',
    'get'
  >;
  /**
   */
  'PATCH /sites/{site-id}/termStore/sets/{set-id}/relations/{relation-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/relations/{relation-id}',
    'patch'
  >;
  /**
   */
  'POST /sites/{site-id}/termStore/sets/{set-id}/relations': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/relations',
    'post'
  >;
}
