const cron = require("node-cron");
const path = require('path');
const moment = require("moment");
const getNodes = require("../utils/getNodes");
const mysql = require("../../models/mysql");
const Op = mysql.Sequelize.Op;

const NodeEnvParamHour = mysql.node_env_param_hours;
const NodeEnvParamDay = mysql.node_env_param_days;
const log4js = require("log4js");

// log4js.configure("./process/config/log4js.json");
log4js.configure({
  "appenders": {
    "everything": {
      "type": ["dateFile"],
      "filename": "./process/logs/log.txt",
      "pattern": ".yyyy-MM-dd-hh",
      "compress": false
    }
  },
  "categories": {
    "default": { "appenders": ["everything"], "level": "debug" }
  }
});
const logger = log4js.getLogger(path.basename(__filename));
/**
 * Cron run
 */

module.exports = cron.schedule("15 0 * * *", async () => {
  logger.info("CRON: Get node data in every day.");
  logger.info("FROM: node_env_param_hours");
  logger.info("TO: node_env_param_days");

  const start_date = moment()
    .subtract(1, "day")
    .set({ hour: 0, minute: 0, second: 0 })
    .toDate();
  const end_date = moment()
    .subtract(1, "day")
    .set({ hour: 23, minute: 59, second: 59 })
    .toDate();

  const data = await NodeEnvParamHour.findAll({
    where: {
      datetime: { [Op.between]: [start_date, end_date] },
    },
    order: [["node_id", "ASC"]],
  });

  const nodes = await getNodes("day")

  if (!data.length) {
    return
    // return await NodeEnvParamDay.bulkCreate(nodes);
  }

  let day_data_by_node = getAllDayData(data).filter(
    (e) => ![undefined, null, "", 0].includes(e.node_id)
  );

  // const ids = day_data_by_node.map((v) => v.node_id);

  // const nodes_left = nodes.filter((v) => !ids.includes(v.node_id));

  // if (nodes_left.length) {
  //   day_data_by_node = day_data_by_node.concat(nodes_left);
  // }

  if (day_data_by_node.length) {
    await NodeEnvParamDay.bulkCreate(day_data_by_node);
  }
});

/**
 * Get all node day data
 */

function getAllDayData(data) {
  let cur_node_id = data[0].node_id;
  let cur_data = [];
  const day_data = [];

  data.forEach((v, index) => {
    if (v.node_id === cur_node_id) {
      cur_data.push(v);
    }

    if (v.node_id !== cur_node_id) {
      day_data.push(getDayData(cur_data));
      cur_node_id = v.node_id;
      cur_data = [];
      cur_data.push(v);
    }

    if (index === data.length - 1) {
      day_data.push(getDayData(cur_data));
    }
  });

  return day_data;
}

/**
 * Get node day data
 */

function getDayData(cur_data) {
  const day_data = { ...getDefault() };

  const inf_keys = ["node_id", "area_id", "area", "location", "lat", "long", "name"];
  const env_keys = ["tem", "hum", "pm_25", "no", "co", "co2", "aqi"];

  cur_data.forEach((e) => {
    if (!day_data.node_id && ![undefined, null, "", 0].includes(e.node_id)) {
      inf_keys.forEach((key) => (day_data[key] = e[key]));
    }

    env_keys.forEach((key) => (day_data[key] += e[key]));
  });

  env_keys.forEach((key) => {
    if (["hum", "tem", "aqi"].includes(key)) {
      day_data[key] = Math.round(day_data[key] / cur_data.length);
    } else {
      day_data[key] = Math.round((day_data[key] / cur_data.length) * 100) / 100;
    }
  });

  return day_data;
}

/**
 * Get default data
 */

function getDefault() {
  const datetime = moment()
    .subtract(1, "day")
    .set({ hour: 23, minute: 00 })
    .toDate();

  return {
    node_id: "",
    area_id: "",
    name: "",
    tem: 0,
    hum: 0,
    pm_25: 0,
    no: 0,
    co: 0,
    co2: 0,
    aqi: 0,
    datetime: datetime,
    area: "",
    location: "",
    lat: "",
    long: "",
  };
}
