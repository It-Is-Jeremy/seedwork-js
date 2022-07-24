import FakeAggregate = require('./PretendAggregate');
import FakeEvent = require("./FakeEvent");
import IAggregate = require("../../src/Abstracts/IAggregate");
import IEvent = require("../../src/Abstracts/IEvent");
const { SynchronousEventHandlerBase } = require('../../src/EventHandlerBase');

const aggregate = new FakeAggregate();

class FakeEventHandler extends SynchronousEventHandlerBase<FakeEvent>{
    constructor() {
        super();

    }

    protected handle(context: IAggregate, event: FakeEvent): void {

    }

    protected loadContext(event: FakeEvent): IAggregate {
        return aggregate;
    }

    protected onError(error: unknown, event: IEvent): void {}

}

describe('Aggregate Base', ()=> {
    it('Pushes on event when aggregate applies event', ()=>{
        //Arrange
        const handler = new FakeEventHandler()
        //Act
        handler.apply(new FakeEvent());
        //Assert
        expect(aggregate.GetEvents()).toHaveLength(1);
    });


});