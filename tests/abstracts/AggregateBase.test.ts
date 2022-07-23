import { FakeAggregate } from './PretendAggregate';
import Event from '../../src/abstracts/Event';


class GenericEvent extends Event{
    constructor() {
        super();
    }
}

describe('Aggregate Base', ()=> {
    it('Pushes on event when aggregate applies event', ()=>{
        //Arrange
        const aggregate = new FakeAggregate();
        //Act
        aggregate.apply(new GenericEvent());
        //Assert
        expect(aggregate.GetEvents()).toHaveLength(1);
    });


});