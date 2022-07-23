import Guid from '../ValueObjects/Guid';

export default abstract class Event {
  public readonly Id: Guid;

  protected constructor() {
    this.Id = new Guid();
  }
}
