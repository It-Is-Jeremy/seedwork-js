import Aggregate = require('./Abstracts/Aggregate');
import IEvent = require('./Abstracts/IEvent');
import {EventHandler} from './EventHandler';

// eslint-disable-next-line max-len
abstract class EventHandlerBase<TReq extends IEvent, TRes extends Aggregate | void> implements EventHandler<TReq, TRes> {
  protected constructor() {}

  public async apply(event: TReq): Promise<TRes> {
    try {
      const context = await this.loadContext(event);
      const response = await this.handle(context, event);
      context.record(event);
      return response;
    } catch (error: unknown) {
      await this.onError(error, event);
      throw error;
    }
  }

  protected abstract handle(context: Aggregate, event: TReq): Promise<TRes>;
  protected abstract loadContext(event: TReq): Promise<Aggregate>;
  protected abstract onError(error: unknown, event:TReq): Promise<void>;
}

export = EventHandlerBase;
