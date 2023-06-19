const cron = require('node-cron');

cron.schedule('0 12 * * *', () => {
    //code execution on schedule
    console.log('Cron job is running.....');
})

module.exports = cron;