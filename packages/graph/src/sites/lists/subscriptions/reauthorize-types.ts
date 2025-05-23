// DO NOT EDIT THIS FILE
import type { Operation } from './../../../common.ts';

export interface Endpoints {
  /**
   * Reauthorize a subscription when you receive a reauthorizationRequired challenge.
   */
  'POST /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize': Operation<
    '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize',
    'post'
  >;
}
