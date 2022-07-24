import IAggregate = require("./Abstracts/IAggregate");
import IEvent = require("./Abstracts/IEvent");
import AsyncEventHandler = require("./EventHandler");
import SynchronousEventHandler = require("./EventHandler");

abstract class AsyncEventHandlerBase<T extends IEvent> implements AsyncEventHandler {
    protected constructor() {}

    public async apply(event: T){
        try {
            const context = await this.loadContext(event);
            await this.handle(context, event);
            context.record(event);
        } catch(error: unknown) {
            await this.onError(error, event);
        }
    }

    protected abstract handle(context: IAggregate, event: T): Promise<void>;
    protected abstract loadContext(event: T): Promise<IAggregate>;
    protected abstract onError(error: unknown, event:IEvent): Promise<void>;
}

abstract class SynchronousEventHandlerBase<T extends IEvent> implements SynchronousEventHandler{
    protected constructor() {
    }
    public apply(event: T){
        try{
            const context = this.loadContext(event);
            this.handle(context, event);
            context.record(event);
        } catch(error: unknown) {
            this.onError(error, event);
        }
    }

    protected abstract handle(context: IAggregate, event: T): void;
    protected abstract loadContext(event: T): IAggregate;
    protected abstract onError(error: unknown, event:IEvent): void;
}

export = {
    AsyncEventHandlerBase,
    SynchronousEventHandlerBase
}