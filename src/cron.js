const cron = require('node-cron');
const express = require('express');
const app = express();
const routes = require('../routes/index')
const fs = require('fs');
const path = require('path');

//*first
// cron.schedule('* 41 * * * *', () => { //menit 41
    //code execution on schedule
//     console.log('Cron job is running every second');
// })

//*second using range
cron.schedule('1-5 * * * * *', () => { //detik 1-5
    console.log('Cron job is running every range second');
})

//*third feature email
function sendEmail(){
    console.log('Sending email to new user');
}

cron.schedule('* 58 * * * *', () => { //menit 58
    sendEmail();
});

app.use((req, res, next) => {
    console.log('Request received');
    next();
});

app.use('/', routes);

//*fourth delete file
const errorLogPath = path.join(__dirname, 'error.log');

cron.schedule('0 20 * * * *', function() { //menit 20
    console.log('---------------------');
    console.log('Running Cron Job');
    fs.unlink(errorLogPath, err => {
      if (err) throw err;
      console.log('Error file successfully deleted');
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

module.exports = cron;