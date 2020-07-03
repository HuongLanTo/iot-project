const cron = require('node-cron')

module.exports = cron.schedule('1 0 * * *', () => {
  console.log('area hour test cron in every day');
})