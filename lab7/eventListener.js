
const EventManagement = require('./EventManagement');


const eventManager = new EventManagement();


eventManager.on('start', () => {
  console.log('Event Started!');
});

eventManager.on('in-progress', () => {
  console.log('Event is in progress...');
});

eventManager.on('completed', () => {
  console.log('Event Completed!');
});

eventManager.start();
setTimeout(() => {
  eventManager.inProgress();
}, 2000);
setTimeout(() => {
  eventManager.completed();
}, 4000); 
