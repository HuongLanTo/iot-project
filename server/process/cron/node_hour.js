const cron = require("node-cron");
const moment = require("moment");
const path = require('path');
const mysql = require("../../models/mysql");
const getAqi = require("../utils/aqi");
const getDataByHour = require("../utils/getDataByHour");
const getNodes = require("../utils/getNodes");
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

const NodeEnvParamHour = mysql.node_env_param_hours;

module.exports = cron.schedule("5 * * * *", async () => {
// module.exports = cron.schedule("* * * * *", async () => {
  logger.info("CRON: Get hour data in every hour.");
  logger.info("FROM: MongoDB");
  logger.info("TO: node_env_param_hours");

  const data = await getDataByHour(moment().subtract(1, "hour").toDate());

  const nodes = await getNodes();

  if (!data.length) {
    return
    // return await NodeEnvParamHour.bulkCreate(nodes);
  }

  const data_filter_1 = data.map((v) => filterData(v));

  let data_filter_2 = getAllHourData(data_filter_1).filter(
    (v) => ![undefined, null, 0, ""].includes(v.node_id)
  );

  // const ids_filter = data_filter_2.map((v) => v.node_id);

  // const nodes_left = nodes.filter((v) => !ids_filter.includes(v.node_id));

  // if (nodes_left.length) {
  //   data_filter_2 = data_filter_2.concat(nodes_left);
  // }

  if (data_filter_2.length) {
    await NodeEnvParamHour.bulkCreate(data_filter_2);
  }
});

function filterData(data) {
  const co = data.co ? data.co : 0;
  const pm25 = data.pm25 ? data.pm25 : 0;
  const aqi = getAqi({ co, pm25 });
  const location =
    data.node_id.location.detail_location +
    ", " +
    data.node_id.location.district.name +
    ", " +
    data.node_id.location.province.name;

  return {
    node_id: String(data.node_id._id),
    area_id: String(data.node_id.location.district._id),
    name: data.node_id.name,
    tem: data.temperature ? data.temperature : 0,
    hum: data.humidity ? data.humidity : 0,
    pm_25: pm25,
    no: data.no ? data.no * 1000 : 0,
    co: co * 1000,
    co2: data.co2 ? data.co2 * 1000 : 0,
    aqi: aqi,
    datetime: data.created_at,
    area: data.node_id.location.district.name,
    location: location,
    lat: data.node_id.location.latitude,
    long: data.node_id.location.longitude,
  };
}

/**
 * Get all node hour data
 */

function getAllHourData(data) {
  let cur_node_id = data[0].node_id;
  let cur_data = [];
  const hour_data = [];

  data.forEach((v, index) => {
    if (v.node_id === cur_node_id) {
      cur_data.push(v);
    }

    if (v.node_id !== cur_node_id) {
      hour_data.push(getHourData(cur_data));
      cur_node_id = v.node_id;
      cur_data = [];
      cur_data.push(v);
    }

    if (index === data.length - 1) {
      hour_data.push(getHourData(cur_data));
    }
  });

  return hour_data;
}

/**
 * Get node hour data
 */

function getHourData(cur_data) {
  const hour_data = { ...getDefault() };

  const inf_keys = [
    "node_id",
    "area_id",
    "name",
    "area",
    "location",
    "lat",
    "long",
  ];
  const env_keys = ["tem", "hum", "pm_25", "no", "co", "co2", "aqi"];

  cur_data.forEach((e) => {
    if (!hour_data.node_id && ![undefined, null, 0, ""].includes(e.node_id)) {
      inf_keys.forEach((key) => (hour_data[key] = e[key]));
    }

    env_keys.forEach((key) => (hour_data[key] += e[key]));
  });

  env_keys.forEach((key) => {
    if (["tem", "hum", "aqi"].includes(key)) {
      hour_data[key] = Math.round(hour_data[key] / cur_data.length);
    } else {
      hour_data[key] =
        Math.round((hour_data[key] / cur_data.length) * 100) / 100;
    }
  });

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
    node_id: "",
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
    location: "",
    lat: "",
    long: "",
  };
}
