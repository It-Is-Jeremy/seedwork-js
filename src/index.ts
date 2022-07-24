import AggregateBase = require('./Abstracts/AggregateBase');
import IAggregate = require('./Abstracts/IAggregate');
import Event = require('./Abstracts/Event');
import IEvent = require('./Abstracts/IEvent');
import Guid = require('./ValueObjects/Guid');
import InvalidGuidStringError = require('./ValueObjects/InvalidGuidStringError');
const {AsyncEventHandlerBase, SynchronousEventHandlerBase } = require('./EventHandlerBase');

export = {
  AggregateBase,
  Event,
  Guid,
  InvalidGuidStringError,
  AsyncEventHandlerBase,
  SynchronousEventHandlerBase
}
