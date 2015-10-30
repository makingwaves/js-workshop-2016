// hmmm ... maybe we could mixin an EventEmitter here
// https://nodejs.org/api/events.html#events_class_events_eventemitter

var _ = require('underscore');
var EventEmitter = require('events');
var myModule = {};
_.extend(myModule, EventEmitter.prototype);

module.exports = myModule;
