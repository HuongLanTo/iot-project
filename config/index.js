var env = require('dotenv')
env.config()

module.exports = {
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD,
  dialect: 'mysql',
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT
}
