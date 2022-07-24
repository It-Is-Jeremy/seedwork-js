import FakeAggregate = require('./PretendAggregate');
import FakeEvent = require("./FakeEvent");


describe('Aggregate Base', ()=> {
    it('Pushes on event when aggregate applies event', ()=>{
        //Arrange
        const aggregate = new FakeAggregate();
        //Act
        aggregate.apply(new FakeEvent());
        //Assert
        expect(aggregate.GetEvents()).toHaveLength(1);
    });


});