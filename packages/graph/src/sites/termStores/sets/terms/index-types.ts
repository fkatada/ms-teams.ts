// DO NOT EDIT THIS FILE
import type { Operation } from './../../../../common.ts';

export interface Endpoints {
  /**
   */
  'DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}': Operation<
    '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}',
    'delete'
  >;
  /**
   * All the terms under the set.
   */
  'GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms': Operation<
    '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms',
    'get'
  >;
  /**
   * All the terms under the set.
   */
  'GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}': Operation<
    '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}',
    'get'
  >;
  /**
   */
  'PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}': Operation<
    '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}',
    'patch'
  >;
  /**
   */
  'POST /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms': Operation<
    '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms',
    'post'
  >;
}
