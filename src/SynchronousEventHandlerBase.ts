import IAggregate = require('./Abstracts/IAggregate');
import IEvent = require('./Abstracts/IEvent');
import {SynchronousEventHandler} from './SynchronousEventHandler';

// eslint-disable-next-line max-len
abstract class SynchronousEventHandlerBase<T extends IEvent> implements SynchronousEventHandler<T> {
  protected constructor() {
  }
  public apply(event: T) {
    try {
      const context = this.loadContext(event);
      this.handle(context, event);
      context.record(event);
    } catch (error: unknown) {
      this.onError(error, event);
    }
  }

    protected abstract handle(context: IAggregate, event: T): void;
    protected abstract loadContext(event: T): IAggregate;
    protected abstract onError(error: unknown, event:T): void;
}

export = SynchronousEventHandlerBase;
