import FakeAggregate = require('./PretendAggregate');
import FakeEvent = require('./FakeEvent');
import IAggregate = require('../../src/Abstracts/Aggregate');
import IEvent = require('../../src/Abstracts/IEvent');
import EventHandlerRegistry =
  require('../../src/EventHandlerRegistry');
import EventHandlerBase = require('../../src/EventHandlerBase');
import Event from '../../src/Abstracts/Event';

const aggregate = new FakeAggregate();

class FakeEventHandler extends EventHandlerBase<FakeEvent, void> {
  constructor() {
    super();
  }

  protected handle(context: IAggregate, event: FakeEvent): Promise<void> {
    console.log('hello');
    context.record(event);
    return Promise.resolve();
  }

  protected loadContext(event: FakeEvent): Promise<IAggregate> {
    return Promise.resolve(aggregate);
  }

  protected onError(error: unknown, event: IEvent): Promise<void> {
    return Promise.resolve();
  }
}


class AnotherFakeEventHandler extends EventHandlerBase<AnotherFakeEvent, void> {
  constructor() {
    super();
  }

  protected handle(context: IAggregate, event: AnotherFakeEvent): Promise<void> {
    console.log('yooo');
    // eslint-disable-next-line no-throw-literal
    throw 'Fail the test';
  }

  protected loadContext(event: AnotherFakeEvent): Promise<IAggregate> {
    return Promise.resolve(aggregate);
  }

  protected onError(error: unknown, event: IEvent): Promise<void> {
    return Promise.resolve();
  }
}

class AnotherFakeEvent extends Event {
  constructor() {
    super();
  }
}

const registry = new EventHandlerRegistry();
// eslint-disable-next-line max-len
registry.register(new FakeEvent(),()=>new FakeEventHandler());
registry.
// eslint-disable-next-line max-len
    register(new AnotherFakeEvent(),()=>new AnotherFakeEventHandler());

describe('Aggregate Base', ()=> {
  it('Pushes on event when aggregate applies event', async()=>{
    // Arrange
    const event = new FakeEvent();

    // Act
    const handler = await registry.send(event);
    // Assert
    expect(aggregate.getEvents()).toHaveLength(2);
  });
});
