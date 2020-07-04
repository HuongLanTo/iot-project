const cron = require("node-cron");
const moment = require("moment");
const mysql = require("../../models/mysql");
const Op = mysql.Sequelize.Op;

const NodeEnvParamHour = mysql.node_env_param_hours;
const NodeEnvParamDay = mysql.node_env_param_days;

/**
 * Cron run
 */

module.exports = cron.schedule("10 0 * * *", async () => {
  console.log("CRON: Get node data in every day.");
  console.log("FROM: node_env_param_hours");
  console.log("TO: node_env_param_days");

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

  if (!data.length) {
    return;
  }

  const day_data_by_node = getAllDayData(data).filter((e) => e.node_id != 0);

  if (day_data_by_node.length) {
    await NodeEnvParamDay.bulkCreate(day_data_by_node);
  }
});

/**
 * Get all node day data
 */

function getAllDayData(data) {
  let cur_node_id = 1;
  let cur_data = [];
  const day_data = [];

  data.forEach((hour, index) => {
    if (hour.node_id === cur_node_id) {
      cur_data.push(hour);
    }

    if (hour.node_id !== cur_node_id) {
      day_data.push(getDayData(cur_data));
      cur_node_id = hour.node_id;
      cur_data = [];
      cur_data.push(hour);
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

  const inf_keys = ["node_id", "area_id", "area", "location", "lat", "long"];
  const env_keys = ["tem", "hum", "pm_25", "no", "co", "co2", "aqi"];

  cur_data.forEach((e) => {
    if (day_data.node_id === 0 && e.node_id !== 0) {
      inf_keys.forEach((key) => (day_data[key] = e[key]));
    }

    env_keys.forEach((key) => (day_data[key] += e[key]));
  });

  env_keys.forEach((key) => (day_data[key] = Math.round(day_data[key] / 24)));

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
    node_id: 0,
    area_id: 0,
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
