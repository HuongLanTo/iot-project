const cron = require('node-cron')

module.exports = cron.schedule('* * * * *', () => {
  console.log('node hour test cron in every hour');
})