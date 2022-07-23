import Guid from '../ValueObjects/Guid';
export interface IEvent {
  Id: Guid;
}

export default abstract class Event implements IEvent {
  public readonly Id: Guid;

  protected constructor() {
    this.Id = new Guid();
  }
}
