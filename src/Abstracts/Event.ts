import Guid from '../ValueObjects/Guid';
import {IEvent} from "./IEvent";

export default abstract class Event implements IEvent {
  public readonly Id: Guid;

  protected constructor() {
    this.Id = new Guid();
  }
}
