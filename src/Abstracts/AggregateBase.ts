import Aggregate = require('./Aggregate');
import Guid = require('../ValueObjects/Guid');
import IEvent = require('./IEvent');


abstract class AggregateBase implements Aggregate {
  public readonly Id: Guid;
  private readonly _events: IEvent[];

  private _entityVersion:number;

  private _isDeleted: boolean;


  public constructor() {
    this.Id = new Guid();
    this._events = [];
    this._entityVersion = 0;
    this._isDeleted = false;
  }

  public getEntityVersion(): number {
    return this._entityVersion;
  }

  public incrementEntityVersion(): void {
    this._entityVersion++;
  }

  public getEvents: () => IEvent[] = () => [...this._events];

  public isDeleted(): boolean {
    return this._isDeleted;
  }

  public delete(): void {
    this._isDeleted = true;
  }


  public record(event: IEvent): void {
    this._events.push(event);
  }

  // protected abstract handle(event: IEvent): void;
}

export = AggregateBase;
