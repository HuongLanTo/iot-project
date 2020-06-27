const env = require("dotenv");
env.config();

const mysql = {
  dialect: "mysql",
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
  operatorsAliases: false,
};

module.exports = mysql;
