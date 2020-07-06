const cron = require('node-cron')
const moment = require("moment");
const mysql = require("../../models/mysql");
const Op = mysql.Sequelize.Op;

const NodeEnvParamHour = mysql.node_env_param_hours;
const AreaEnvParamHour = mysql.area_env_param_hours;

/**
 * Cron run
 */

module.exports = cron.schedule('5 * * * *', async () => {
  console.log("CRON: Get area data in every hour.");
  console.log("FROM: node_env_param_hours");
  console.log("TO: area_env_param_hours");
  
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

  if (!data.length) {
    return
  }

  const hour_data_by_area = getAllAreaData(data).filter((e) => e.area_id != 0);

  if (hour_data_by_area.length) {
    await AreaEnvParamHour.bulkCreate(hour_data_by_area);
  }
})


/**
 * Get all area hour data
 */

function getAllAreaData(data) {
  let cur_area_id = 1;
  let cur_data = [];
  const hour_data = [];

  data.forEach((hour, index) => {
    if (hour.area_id === cur_area_id) {
      cur_data.push(hour);
    }

    if (hour.area_id !== cur_area_id) {
      hour_data.push(getDayData(cur_data));
      cur_area_id = hour.area_id;
      cur_data = [];
      cur_data.push(hour);
    }

    if (index === data.length - 1) {
      hour_data.push(getAreaData(cur_data));
    }
  })

  return hour_data;
}


/**
 * Get area hour data
 */

function getAreaData(cur_data) {
  const hour_data = { ...getDefault() }

  const inf_keys = ['area_id', 'area', 'lat', 'long']
  const env_keys = ['tem', 'hum', 'pm_25', 'no', 'co', 'co2', 'aqi']

  cur_data.forEach(e => {
    if (hour_data.area_id === 0 && e.area_id !== 0) {
      inf_keys.forEach(key => hour_data[key] = e[key])
    }

    env_keys.forEach(key => hour_data[key] += e[key])
  });

  const length = cur_data.length

  if (length) {
    env_keys.forEach(key => hour_data[key] = Math.round(hour_data[key] / length))
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
    lat: "",
    long: "",
  };
}