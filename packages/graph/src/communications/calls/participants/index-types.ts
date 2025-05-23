// DO NOT EDIT THIS FILE
import type { Operation } from './../../../common.ts';

export interface Endpoints {
  /**
   * Delete a specific participant in a call. In some situations, it is appropriate for an application to remove a participant from an active call. This action can be done before or after the participant answers the call. When an active caller is removed, they are immediately dropped from the call with no pre- or post-removal notification. When an invited participant is removed, any outstanding add participant request is canceled.
   */
  'DELETE /communications/calls/{call-id}/participants/{participant-id}': Operation<
    '/communications/calls/{call-id}/participants/{participant-id}',
    'delete'
  >;
  /**
   * Retrieve a list of participant objects in the call.
   */
  'GET /communications/calls/{call-id}/participants': Operation<
    '/communications/calls/{call-id}/participants',
    'get'
  >;
  /**
   * Retrieve the properties and relationships of a participant object.
   */
  'GET /communications/calls/{call-id}/participants/{participant-id}': Operation<
    '/communications/calls/{call-id}/participants/{participant-id}',
    'get'
  >;
  /**
   */
  'PATCH /communications/calls/{call-id}/participants/{participant-id}': Operation<
    '/communications/calls/{call-id}/participants/{participant-id}',
    'patch'
  >;
  /**
   */
  'POST /communications/calls/{call-id}/participants': Operation<
    '/communications/calls/{call-id}/participants',
    'post'
  >;
}
