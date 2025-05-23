import { ActivityParams, ConversationReference, SentActivity } from '@microsoft/teams.api';

import { IActivityEvent, IErrorEvent } from '../../events';
import { IStreamer } from '../streamer';

import { IPluginActivityEvent } from './plugin-activity-event';
import { IPluginActivityResponseEvent } from './plugin-activity-response-event';
import { IPluginActivitySentEvent } from './plugin-activity-sent-event';
import { IPluginErrorEvent } from './plugin-error-event';
import { IPluginStartEvent } from './plugin-start-event';

/**
 * represents a plugins
 * unique name
 */
export type PluginName = 'http' | Omit<string, 'http'>;

/**
 * emitted when the plugin
 * encounters an error
 */
export type OnErrorPluginEvent = (event: IErrorEvent) => void;

/**
 * emitted when the plugin
 * receives an activity
 */
export type OnActivityPluginEvent = (event: IActivityEvent) => void;

export interface IPlugin<TEvents extends {} = {}> {
  /**
   * The event types that this plugin can emit. This is just a type, but we need it
   * for the type system to pick it up. You don't actually need to assign this to 
   * anything.
   * Simply having `__eventType!: MyEvents` works.
   */
  __eventType?: TEvents;

  /**
   * lifecycle method called by the `App`
   * once during initialization
   */
  onInit?(): void | Promise<void>;

  /**
   * lifecycle method called by the `App`
   * once during startup
   */
  onStart?(event: IPluginStartEvent): void | Promise<void>;

  /**
   * lifecycle method called by the `App`
   * once during shutdown
   */
  onStop?(): void | Promise<void>;

  /**
   * called by the `App`
   * when an error occurs
   */
  onError?(event: IPluginErrorEvent): void | Promise<void>;

  /**
   * called by the `App`
   * when an activity is received
   */
  onActivity?(event: IPluginActivityEvent): void | Promise<void>;

  /**
   * called by the `App`
   * when an activity is sent
   */
  onActivitySent?(event: IPluginActivitySentEvent): void | Promise<void>;

  /**
   * called by the `App`
   * when an activity response is sent
   */
  onActivityResponse?(event: IPluginActivityResponseEvent): void | Promise<void>;

  /**
   * called by the `App`
   * to send an activity
   */
  send?(activity: ActivityParams, ref: ConversationReference): Promise<SentActivity>;

  /**
   * called by the `App`
   * to create a new activity stream
   */
  createStream?(ref: ConversationReference): IStreamer;
}

export type EmitPluginEvent<TEvents extends {}> = <Name extends keyof TEvents>(
  name: Name,
  arg: TEvents[Name]
) => void;

export type PluginWithEvents<TEvents extends {}> = Pick<Required<IPlugin<TEvents>>, '__eventType'>;