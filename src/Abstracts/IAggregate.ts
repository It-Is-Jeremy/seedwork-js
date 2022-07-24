import Guid = require('../ValueObjects/Guid');
import IEvent = require('./IEvent');
interface IAggregate{
    Id: Guid;
    getEvents: () => IEvent[];
    record: (event: IEvent) => void;
}

export = IAggregate;
