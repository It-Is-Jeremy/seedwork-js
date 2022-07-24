import {SynchronousEventHandler} from './SynchronousEventHandler';
import IEvent = require('./Abstracts/IEvent');

class SynchronousEventHandlerRegistry {
  private readonly _registry:Map<string, ()=>SynchronousEventHandler<any>>;
  constructor() {
    this._registry = new Map<string, ()=>SynchronousEventHandler<any>>();
  }

  public register(
      sampleEvent: IEvent,
      handlerActivator: ()=>SynchronousEventHandler<IEvent>): void {
    this._registry.set(sampleEvent.constructor.name, handlerActivator);
  }

  public getHandler(event: IEvent): SynchronousEventHandler<IEvent> {
    const handler = this._registry.get(event.constructor.name);

    if (handler === undefined) {
      // eslint-disable-next-line no-throw-literal
      throw 'not found';
    }

    return handler();
  }
}


export = SynchronousEventHandlerRegistry;
