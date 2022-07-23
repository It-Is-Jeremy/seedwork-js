import IAggregate from './IAggregate';
import Guid from '../ValueObjects/Guid';

export default abstract class AggregateBase implements IAggregate {
  public readonly Id: Guid;
  public GetEvents: () => Event[] = () => [...this._events];

  protected constructor() {
    this.Id = new Guid();
    this._events = [];
  }

  private readonly _events: Event[];

  apply(event: Event): void {
    this.handle(event);
    this._events.push(event);
  }

  protected abstract handle(event: Event): void;

  public abstract isEqual(other: IAggregate):boolean;
}
