import FakeAggregate = require('./PretendAggregate');
import FakeEvent = require('./FakeEvent');
import IAggregate = require('../../src/Abstracts/IAggregate');
import IEvent = require('../../src/Abstracts/IEvent');
import SynchronousEventHandlerRegistry =
  require('../../src/SynchronousEventHandlerRegistry');
import SynchronousEventHandlerBase = require('../../src/SynchronousEventHandlerBase');
import Event from '../../src/Abstracts/Event';

const aggregate = new FakeAggregate();

class FakeEventHandler extends SynchronousEventHandlerBase<FakeEvent> {
  constructor() {
    super();
  }

  protected handle(context: IAggregate, event: FakeEvent): void {
    console.log('hello');
    context.record(event);
  }

  protected loadContext(event: FakeEvent): IAggregate {
    return aggregate;
  }

  protected onError(error: unknown, event: IEvent): void {}
}


class AnotherFakeEventHandler extends SynchronousEventHandlerBase<AnotherFakeEvent> {
  constructor() {
    super();
  }

  protected handle(context: IAggregate, event: AnotherFakeEvent): void {
    console.log('yooo');
    // eslint-disable-next-line no-throw-literal
    throw 'Fail the test';
  }

  protected loadContext(event: AnotherFakeEvent): IAggregate {
    return aggregate;
  }

  protected onError(error: unknown, event: IEvent): void {}
}

class AnotherFakeEvent extends Event {
  constructor() {
    super();
  }
}

const registry = new SynchronousEventHandlerRegistry();
// eslint-disable-next-line max-len
registry.register(new FakeEvent(),()=>new FakeEventHandler());
registry.
// eslint-disable-next-line max-len
    register(new AnotherFakeEvent(),()=>new AnotherFakeEventHandler());

describe('Aggregate Base', ()=> {
  it('Pushes on event when aggregate applies event', ()=>{
    // Arrange
    const event = new FakeEvent();
    const handler = registry.getHandler(event);
    // Act
    handler.apply(event);
    // Assert
    expect(aggregate.getEvents()).toHaveLength(2);
  });
});
