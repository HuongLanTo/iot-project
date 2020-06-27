"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const basename = path.basename(__filename);
const config = require("../../config/mysql");

const mysql = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    operatorsAliases: config.operatorsAliases,
    timezone: "+07:00",
    logging: false,
    define: {
      charset: "utf8",
      collate: "utf8_unicode_ci",
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = sequelize["import"](path.join(__dirname, file));
    mysql[model.name] = model;
  });

Object.keys(mysql).forEach((modelName) => {
  if (mysql[modelName].associate) {
    mysql[modelName].associate(mysql);
  }
});

mysql.sequelize = sequelize;
mysql.Sequelize = Sequelize;

module.exports = mysql;
