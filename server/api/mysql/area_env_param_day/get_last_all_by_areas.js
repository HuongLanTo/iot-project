const moment = require("moment");
const base64 = require("js-base64").Base64;
const mysql = require("../../../models/mysql");
const Op = mysql.Sequelize.Op;

const AreaEnvParamDay = mysql.area_env_param_days;

module.exports = async function findLastByAreas(req, res) {
  try {
    const filter = req.query.filter
      ? JSON.parse(base64.decode(req.query.filter))
      : {};

    const env_keys = ["tem", "hum", "pm_25", "no", "co", "co2", "aqi"];

    const date = filter.date
      ? filter.date
      : moment().subtract(1, "day").toDate().toISOString();
    const order = ["ASC", "DESC"].includes(filter.order)
      ? filter.order
      : "DESC";
    const field_order = env_keys.includes(filter.field_order)
      ? filter.field_order
      : "aqi";

    const start_date = moment(date)
      .set({ date: 0, minute: 0, second: 0 })
      .toDate();
    const end_date = moment(date)
      .set({ date: 23, minute: 59, second: 59 })
      .toDate();

    const where = {
      datetime: { [Op.between]: [start_date, end_date] },
    };

    const result = await AreaEnvParamDay.findAll({
      where,
      order: [[field_order, order]],
    });

    const data = result.map((v, index) => {
      const keys = [
        "id",
        "area_id",
        field_order,
        "datetime",
        "area",
        "lat",
        "long",
      ];
      const value = {};

      keys.forEach((key) => (value[key] = v[key]));

      return { ...value, num: index + 1 };
    });

    return res.send({ data: data });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};
