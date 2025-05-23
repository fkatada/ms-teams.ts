// DO NOT EDIT THIS FILE
import type { Operation } from './../../common.ts';

export interface Endpoints {
  /**
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  'POST /chats/{chat-id}/members/remove': Operation<'/chats/{chat-id}/members/remove', 'post'>;
}
