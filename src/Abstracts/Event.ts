import Guid = require('../ValueObjects/Guid');
import IEvent = require('./IEvent');

abstract class Event implements IEvent {
  public readonly Id: Guid;

  public constructor() {
    this.Id = new Guid();
  }
}

export = Event;
