// DO NOT EDIT THIS FILE
import type { Operation } from './../../../../common.ts';

export interface Endpoints {
  /**
   */
  'DELETE /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    'delete'
  >;
  /**
   * Exposes the itemActivities represented in this itemActivityStat resource.
   */
  'GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities',
    'get'
  >;
  /**
   * Exposes the itemActivities represented in this itemActivityStat resource.
   */
  'GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    'get'
  >;
  /**
   */
  'PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    'patch'
  >;
  /**
   */
  'POST /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities',
    'post'
  >;
}
