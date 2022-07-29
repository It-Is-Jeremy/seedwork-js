import AggregateBase = require('./Abstracts/AggregateBase');
import Event = require('./Abstracts/Event');
import Guid = require('./ValueObjects/Guid');
import InvalidGuidStringError =
  require('./ValueObjects/InvalidGuidStringError');
import EventHandlerBase = require('./EventHandlerBase');
import EventHandlerRegistry
  = require('./EventHandlerRegistry');

export = {
  AggregateBase,
  Event,
  Guid,
  InvalidGuidStringError,
  EventHandlerBase,
  EventHandlerRegistry,
}
