import { IActivityContext } from '../contexts';

export type RouteHandler<In extends IActivityContext<any>, Out = void> = (
  ctx: In
) => Out | Promise<Out>;
