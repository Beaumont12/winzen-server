const cron = require('cron');
const https = require('https');

// Define the backend URL
const backendUrl = 'https://your-backend-api-endpoint';

// Define a cron job to hit the endpoint every 14 minutes
const job = new cron.CronJob('*/14 * * * *', function () {
    console.log('Pinging server to keep it alive...');
    https
        .get(backendUrl, (res) => {
            if (res.statusCode === 200) {
                console.log('Server is alive');
            } else {
                console.error(`Failed to ping server with status code: ${res.statusCode}`);
            }
        })
        .on('error', (err) => {
            console.error('Error during ping:', err.message);
        });
}, null, true, 'America/Los_Angeles');

// Export the job
module.exports = job;