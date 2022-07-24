import {AsyncEventHandler, SynchronousEventHandler} from "./EventHandler";
import IEvent = require("./Abstracts/IEvent");

class AsyncEventHandlerRegistry{
    private readonly _registry:Map<string, AsyncEventHandler>

    public register<Event extends IEvent, Handler extends AsyncEventHandler>(): void{
        this._registry.set((typeof Event), Handler);
    }

    public async handle<Event extends IEvent>(event:Event){
        const hander = this._registry.get(Event);

    }

}

class SynchronousEventHandlerRegistry{
    private readonly _registry:Map<Event, SynchronousEventHandler>;
}

export = {
    AsyncEventHandlerRegistry,
    SynchronousEventHandlerRegistry
}