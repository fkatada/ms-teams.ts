// DO NOT EDIT THIS FILE
import type { Operation } from './../../common.ts';

export interface Endpoints {
  /**
   * Get the occurrences, exceptions, and single instances of events in a calendar view defined by a time range, from the user&#x27;s default calendar,
or from some other calendar of the user.
   */
  'GET /me/calendarView': Operation<'/me/calendarView', 'get'>;
  /**
   * The calendar view for the calendar. Read-only. Nullable.
   */
  'GET /me/calendarView/{event-id}': Operation<'/me/calendarView/{event-id}', 'get'>;
}
