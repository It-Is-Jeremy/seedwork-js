import AggregateBase = require('./Abstracts/AggregateBase');
import IAggregate = require('./Abstracts/IAggregate');
import Event = require('./Abstracts/Event');
import IEvent = require('./Abstracts/IEvent');
import Guid = require('./ValueObjects/Guid');
import InvalidGuidStringError = require('./ValueObjects/InvalidGuidStringError');

export = {
  AggregateBase,
  Event,
  Guid,
  InvalidGuidStringError,
}
