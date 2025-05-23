// DO NOT EDIT THIS FILE
import type { Operation } from './../../../common.ts';

export interface Endpoints {
  /**
   * The application that is linked to the tab. This can&#x27;t be changed after tab creation.
   */
  'GET /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp': Operation<
    '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp',
    'get'
  >;
}
