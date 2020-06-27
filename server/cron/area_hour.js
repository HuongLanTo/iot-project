const cron = require('node-cron')

module.exports = cron.schedule('1 * * * *', () => {
  console.log('area hour test cron in every hour');
})