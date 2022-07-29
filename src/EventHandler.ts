import IEvent from './Abstracts/IEvent';
import Aggregate from './Abstracts/Aggregate';

// eslint-disable-next-line max-len
export interface EventHandler<TReq extends IEvent, TRes extends Aggregate | void>{
  apply: (event: TReq) => Promise<TRes>,
}
