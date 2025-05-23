// DO NOT EDIT THIS FILE
import type { Operation } from './../../../common.ts';

export interface Endpoints {
  /**
   */
  'DELETE /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
    'delete'
  >;
  /**
   * A collection of all the tabs in the chat. Nullable.
   */
  'GET /users/{user-id}/chats/{chat-id}/tabs': Operation<
    '/users/{user-id}/chats/{chat-id}/tabs',
    'get'
  >;
  /**
   * A collection of all the tabs in the chat. Nullable.
   */
  'GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
    'get'
  >;
  /**
   */
  'PATCH /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
    'patch'
  >;
  /**
   */
  'POST /users/{user-id}/chats/{chat-id}/tabs': Operation<
    '/users/{user-id}/chats/{chat-id}/tabs',
    'post'
  >;
}
