import Guid = require('../ValueObjects/Guid');
import IEvent = require('./IEvent');
interface Aggregate {
    Id: Guid;
    getEvents: () => IEvent[];
    record: (event: IEvent) => void;
}

export = Aggregate;
