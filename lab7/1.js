const os = require('os');

function displayMemoryUsage() {
  setInterval(() => {
    
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();

    
    const usedMemory = totalMemory - freeMemory;

    const freeMemoryPercentage = (freeMemory / totalMemory) * 100;

  
    console.log(`Total Memory: ${(totalMemory / (1024 ** 3)).toFixed(2)} GB`);
    console.log(`Used Memory: ${(usedMemory / (1024 ** 3)).toFixed(2)} GB`);
    console.log(`Free Memory: ${(freeMemory / (1024 ** 3)).toFixed(2)} GB`);
    console.log(`Free Memory Percentage: ${freeMemoryPercentage.toFixed(2)}%\n`);
  }, 5000); 
}

displayMemoryUsage();
