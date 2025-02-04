const os = require('os');

function logUptime() {
  const seconds = os.uptime();
 
  const minutes = Math.floor((seconds%(3600)) / 60);
 
  const hours = Math.floor((seconds%(24*3600))/(60*60));
  const days = Math.floor(seconds/(24*60*60));

  console.log(`System Uptime: ${days} days, ${hours} hours, ${minutes} minutes`);
}

logUptime();


