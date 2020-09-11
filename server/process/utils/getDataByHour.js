const fs = require("fs");
const User = require("../../models/mongo/user");
const Node = require("../../models/mongo/node");
const Sensor = require("../../models/mongo/sensor");
const Location = require("../../models/mongo/location");
const District = require("../../models/mongo/district");
const Province = require("../../models/mongo/province");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const base64 = require("js-base64").Base64;
const moment = require("moment");
const { db } = require("../../models/mongo/user");

// log4js.configure("./config/log4js.json");
// const logger = log4js.getLogger("getDataSensorByHour");


const getDataByHour = async function getDataByHour(date) {
  const start_date = moment(date).set({ minute: 0, second: 0 }).toDate();
  const end_date = moment(date).set({ minute: 59, second: 59 }).toDate();

  return await Sensor.find({
    created_at: {
      $gte: start_date,
      $lt: end_date,
    },
  })
  .sort({ node_id: 1 })
  .populate({
    path : 'node_id',
    populate : {
      path : 'location',
      populate: {
        path: 'district province',
        select: "_id name code"
      },
      select: "_id detail_location latitude longitude province district"
    },
    select: "_id ip name  created_by location"
  })
  .then((data) => {
    return data;
  });
};

module.exports = getDataByHour;
