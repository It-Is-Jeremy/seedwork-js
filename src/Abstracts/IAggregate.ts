import Guid = require('../ValueObjects/Guid');
import IEvent = require('./IEvent');
interface IAggregate{
    Id: Guid;
    GetEvents: () => IEvent[];
    apply: (event:IEvent) => void;
}

export = IAggregate;
