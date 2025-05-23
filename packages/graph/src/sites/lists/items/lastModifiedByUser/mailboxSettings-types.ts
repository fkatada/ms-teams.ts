// DO NOT EDIT THIS FILE
import type { Operation } from './../../../../common.ts';

export interface Endpoints {
  /**
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
   */
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/lastModifiedByUser/mailboxSettings',
    'get'
  >;
  /**
   */
  'PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/lastModifiedByUser/mailboxSettings',
    'patch'
  >;
}
