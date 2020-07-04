const express = require("express");
const mongoose = require("mongoose");

const cron = require('./cron/index')
const mongo = require("../config/mongo");
const mysql = require("../models/mysql");

const app = express();
const server = require("http").Server(app);

const port = '1412'

/**
 * Cron run
 */
cron

/**
 * MySQL connect
 */
mysql.sequelize.sync();

/**
 * Mongo connect
 */
mongoose.connect(mongo.mongoPath, (err) => {
  if (err) console.log(err);
  else console.log("Cron connect MongoDB success.");
});

server.listen(port, (err) => {
  if (err) console.log(err);
  else console.log("Server run cron started at port " + port);
});