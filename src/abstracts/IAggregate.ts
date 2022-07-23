import Guid from '../ValueObjects/Guid';

export default interface IAggregate{
    Id: Guid;
    GetEvents: () => Event[];
    apply: (event:Event) => void;
    isEqual: (other: IAggregate) => boolean;
};
