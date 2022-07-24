// eslint-disable-next-line max-len
import IAggregate = require('./Abstracts/IAggregate');
import IEvent = require('./Abstracts/IEvent');
import {AsyncEventHandler} from './AsyncEventHandler';

abstract class AsyncEventHandlerBase<T extends IEvent> implements AsyncEventHandler<T> {
  protected constructor() {}

  public async apply(event: T): Promise<void> {
    try {
      const context = await this.loadContext(event);
      await this.handle(context, event);
      context.record(event);
    } catch (error: unknown) {
      await this.onError(error, event);
    }
  }

  protected abstract handle(context: IAggregate, event: T): Promise<void>;
  protected abstract loadContext(event: T): Promise<IAggregate>;
  protected abstract onError(error: unknown, event:T): Promise<void>;
}

export = AsyncEventHandlerBase;
