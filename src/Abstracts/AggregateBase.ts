import IAggregate = require('./IAggregate');
import Guid = require('../ValueObjects/Guid');
import IEvent = require('./IEvent');


abstract class AggregateBase implements IAggregate {
  public readonly Id: Guid;
  public getEvents: () => IEvent[] = () => [...this._events];

  public constructor() {
    this.Id = new Guid();
    this._events = [];
  }

  private readonly _events: IEvent[];

  public record(event: IEvent): void {
    this._events.push(event);
  }

  //protected abstract handle(event: IEvent): void;
}

export = AggregateBase;
