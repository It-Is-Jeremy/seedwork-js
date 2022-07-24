import {AsyncEventHandler} from './AsyncEventHandler';
import IEvent = require('./Abstracts/IEvent');

class AsyncEventHandlerRegistry {
  private readonly _registry:Map<string, ()=>AsyncEventHandler<any>>;

  constructor() {
    this._registry = new Map<string, ()=>AsyncEventHandler<any>>();
  }

  public register(
      sampleEvent: IEvent,
      handlerActivator: ()=>AsyncEventHandler<IEvent>): void {
    this._registry.set(sampleEvent.constructor.name, handlerActivator);
  }

  public getHandler(event: IEvent): AsyncEventHandler<IEvent> {
    const handler = this._registry.get(event.constructor.name);

    if (handler === undefined) {
      // eslint-disable-next-line no-throw-literal
      throw 'not found';
    }

    return handler();
  }
}

export = AsyncEventHandlerRegistry;
