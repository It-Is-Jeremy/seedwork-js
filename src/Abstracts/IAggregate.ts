import Guid from '../ValueObjects/Guid';
import {IEvent} from './IEvent';
import Stakeholders from './Stakeholders';

export default interface IAggregate{
    Id: Guid;
    Stakeholders?: Stakeholders;
    GetEvents: () => IEvent[];
    apply: (event:IEvent) => void;
};
