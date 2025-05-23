// DO NOT EDIT THIS FILE
import type { Operation } from './../../../../../../common.ts';

export interface Endpoints {
  /**
   * The to [term] of the relation. The term to which the relationship is defined.
   */
  'GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm',
    'get'
  >;
}
