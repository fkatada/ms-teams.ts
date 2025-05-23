// DO NOT EDIT THIS FILE
import type { Operation } from './../../common.ts';

export interface Endpoints {
  /**
   * Unpin a message from a chat.
   */
  'DELETE /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}': Operation<
    '/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    'delete'
  >;
  /**
   * Get a list of pinnedChatMessages in a chat.
   */
  'GET /chats/{chat-id}/pinnedMessages': Operation<'/chats/{chat-id}/pinnedMessages', 'get'>;
  /**
   * A collection of all the pinned messages in the chat. Nullable.
   */
  'GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}': Operation<
    '/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    'get'
  >;
  /**
   */
  'PATCH /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}': Operation<
    '/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    'patch'
  >;
  /**
   * Pin a chat message in the specified chat. This API cannot create a new chat; you must use the list chats method to retrieve the ID of an existing chat before you can pin a chat message.
   */
  'POST /chats/{chat-id}/pinnedMessages': Operation<'/chats/{chat-id}/pinnedMessages', 'post'>;
}
