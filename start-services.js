// start-services.js
const { exec } = require('child_process');

const startService = (serviceName) => {
  const command = `cd ${serviceName} && node index.js`;
  const childProcess = exec(command);

  childProcess.stdout.on('data', (data) => {
    console.log(`[${serviceName}] ${data}`);
  });

  childProcess.stderr.on('data', (data) => {
    console.error(`[${serviceName}] ${data}`);
  });
};

startService('user-service');
startService('order-service');
