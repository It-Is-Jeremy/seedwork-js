import Guid from '../ValueObjects/Guid';
import {IEvent} from './Event';

export default interface IAggregate{
    Id: Guid;
    GetEvents: () => IEvent[];
    apply: (event:IEvent) => void;
};
