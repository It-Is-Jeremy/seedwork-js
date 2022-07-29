import {EventHandler} from './EventHandler';
import IEvent = require('./Abstracts/IEvent');
import Aggregate from './Abstracts/Aggregate';

class EventHandlerRegistry {
  private readonly _registry:Map<string, ()=>EventHandler<any, any>>;

  constructor() {
    this._registry = new Map<string, ()=>EventHandler<any, any>>();
  }

  public register(
      sampleEvent: IEvent,
      handlerActivator: ()=>EventHandler<IEvent, Aggregate | void>): void {
    this._registry.set(sampleEvent.constructor.name, handlerActivator);
  }

  public send(event: IEvent): Promise<Aggregate | void> {
    const handler = this._registry.get(event.constructor.name);

    if (handler === undefined) {
      // eslint-disable-next-line no-throw-literal
      throw 'not found';
    }

    return handler().apply(event);
  }
}

export = EventHandlerRegistry;
