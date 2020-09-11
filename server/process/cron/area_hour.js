const cron = require("node-cron");
const path = require('path');
const moment = require("moment");
const getAreas = require("../utils/getAreas");
const mysql = require("../../models/mysql");
const Op = mysql.Sequelize.Op;

const NodeEnvParamHour = mysql.node_env_param_hours;
const AreaEnvParamHour = mysql.area_env_param_hours;
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

module.exports = cron.schedule("10 * * * *", async () => {
  logger.info("CRON: Get area data in every hour.");
  logger.info("FROM: node_env_param_hours");
  logger.info("TO: area_env_param_hours");

  const start_hour = moment()
    .subtract(1, "hour")
    .set({ minute: 0, second: 0 })
    .toDate();
  const end_hour = moment()
    .subtract(1, "hour")
    .set({ minute: 59, second: 59 })
    .toDate();

  const data = await NodeEnvParamHour.findAll({
    where: {
      datetime: { [Op.between]: [start_hour, end_hour] },
    },
    order: [["area_id", "ASC"]],
  });

  const nodes = await getAreas();

  if (!data.length) {
    return
    // return await AreaEnvParamHour.bulkCreate(nodes);
  }

  let hour_data_by_area = getAllAreaData(data).filter((e) =>
    ![undefined, null, 0, ""].includes(e.area_id)
  );

  // const ids = hour_data_by_area.map((v) => v.area_id);

  // const nodes_left = nodes.filter((v) => !ids.includes(v.area_id));

  // if (nodes_left.length) {
  //   hour_data_by_area = hour_data_by_area.concat(nodes_left);
  // }

  if (hour_data_by_area.length) {
    await AreaEnvParamHour.bulkCreate(hour_data_by_area);
  }
});

/**
 * Get all area hour data
 */

function getAllAreaData(data) {
  let cur_area_id = data[0].area_id;
  let cur_data = [];
  const hour_data = [];

  data.forEach((v, index) => {
    if (v.area_id === cur_area_id) {
      cur_data.push(v);
    }

    if (v.area_id !== cur_area_id) {
      hour_data.push(getAreaData(cur_data));
      cur_area_id = v.area_id;
      cur_data = [];
      cur_data.push(v);
    }

    if (index === data.length - 1) {
      hour_data.push(getAreaData(cur_data));
    }
  });

  return hour_data;
}

/**
 * Get area hour data
 */

function getAreaData(cur_data) {
  const hour_data = { ...getDefault() };

  const inf_keys = ["area_id", "area", "lat", "long"];
  const env_keys = ["tem", "hum", "pm_25", "no", "co", "co2", "aqi"];

  cur_data.forEach((e) => {
    if (!hour_data.area_id && ![undefined, null, 0, ""].includes(e.area_id)) {
      inf_keys.forEach((key) => (hour_data[key] = e[key]));
    }

    env_keys.forEach((key) => (hour_data[key] += e[key]));
  });

  const length = cur_data.length;

  if (length) {
    env_keys.forEach((key) => {
      if (["tem", "hum", "aqi"].includes(key)) {
        hour_data[key] = Math.round(hour_data[key] / length);
      } else {
        hour_data[key] = Math.round((hour_data[key] / length) * 100) / 100;
      }
    });
  }

  return hour_data;
}

/**
 * Get default data
 */

function getDefault() {
  const datetime = moment()
    .subtract(1, "hour")
    .set({ minute: 0, second: 0 })
    .toDate();

  return {
    area_id: "",
    tem: 0,
    hum: 0,
    pm_25: 0,
    no: 0,
    co: 0,
    co2: 0,
    aqi: 0,
    datetime: datetime,
    area: "",
    lat: "",
    long: "",
  };
}
