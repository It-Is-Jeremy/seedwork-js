import IAggregate from './IAggregate';
import Guid from '../ValueObjects/Guid';
import {IEvent} from './IEvent';

export default abstract class AggregateBase implements IAggregate {
  public readonly Id: Guid;
  public GetEvents: () => IEvent[] = () => [...this._events];

  protected constructor() {
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
