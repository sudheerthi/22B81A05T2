// EventManagement.js
const EventEmitter = require('events');

// EventManagement class extends EventEmitter to handle custom events
class EventManagement extends EventEmitter {
  start() {
    this.emit('start');
  }

  inProgress() {
    this.emit('in-progress');
  }

  completed() {
    this.emit('completed');
  }
}

module.exports = EventManagement;
