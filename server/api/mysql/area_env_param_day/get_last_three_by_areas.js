const moment = require("moment");
const base64 = require("js-base64").Base64;
const mysql = require("../../../models/mysql");
const Op = mysql.Sequelize.Op;

const AreaEnvParamDay = mysql.area_env_param_hours;

module.exports = async function findByAreas(req, res) {
  try {
    const filter = req.query.filter
      ? JSON.parse(base64.decode(req.query.filter))
      : {};

    if (!filter.area_ids) {
      return res.status(400).send({
        error: {
          message: "Parameters not found",
        },
      });
    }

    let start_date = moment()
      .subtract(3, "day")
      .set({ hour: 0, minute: 0, second: 0 })
      .toDate();
    let end_date = moment()
      .subtract(1, "day")
      .set({ hour: 23, minute: 59, second: 59 })
      .toDate();

    const area_ids = filter.area_ids.split(",").map((v) => String(v));

    const data = await Promise.all(
      area_ids.map(async (v) => {
        return await AreaEnvParamDay.findAll({
          where: {
            area_id: v,
            datetime: { [Op.between]: [start_date, end_date] },
          },
          order: [["datetime", "DESC"]],
          limit: 3,
        }).then((result) => {
          return {
            area_id: v,
            data: result,
          };
        });
      })
    );

    return res.send({ data: data });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};
