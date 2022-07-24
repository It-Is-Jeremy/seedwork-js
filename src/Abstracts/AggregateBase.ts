import IAggregate = require('./IAggregate');
import Guid = require('../ValueObjects/Guid');
import IEvent = require('./IEvent');

abstract class AggregateBase implements IAggregate {
  public readonly Id: Guid;
  public GetEvents: () => IEvent[] = () => [...this._events];

  constructor() {
    this.Id = new Guid();
    this._events = [];
  }

  private readonly _events: IEvent[];

  apply(event: IEvent): void {
    this.handle(event);
    this._events.push(event);
  }

  protected abstract handle(event: IEvent): void;
}

export = AggregateBase;
