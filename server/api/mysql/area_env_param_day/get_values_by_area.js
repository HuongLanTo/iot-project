const moment = require("moment");
const base64 = require("js-base64").Base64;
const mysql = require("../../../models/mysql");
const Op = mysql.Sequelize.Op;

const AreaEnvParamDay = mysql.area_env_param_days;

module.exports = async function findByArea(req, res) {
  try {
    const params = req.params;
    const filter = req.query.filter
      ? JSON.parse(base64.decode(req.query.filter))
      : {};
    const slot = filter.slot ? filter.slot : 31;

    let start_date = moment()
      .subtract(slot, "day")
      .set({ hour: 0, minute: 0, second: 0 })
      .toDate();
    let end_date = moment()
      .subtract(1, "day")
      .set({ hour: 23, minute: 59, second: 59 })
      .toDate();

    let where = {
      area_id: params.area_id,
      datetime: { [Op.between]: [start_date, end_date] },
    };

    const data = await AreaEnvParamDay.findAll({ where });

    return res.send({ data: data });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};
