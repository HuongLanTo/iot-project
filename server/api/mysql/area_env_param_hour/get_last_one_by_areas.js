const moment = require("moment");
const base64 = require("js-base64").Base64;
const mysql = require("../../../models/mysql");
const Op = mysql.Sequelize.Op;

const AreaEnvParamHour = mysql.area_env_param_hours;

module.exports = async function findLastByAreas(req, res) {
  try {
    const filter = req.query.filter
      ? JSON.parse(base64.decode(req.query.filter))
      : {};

    const area_ids = filter.area_ids ? filter.area_ids : "all";

    const start_hour = moment()
      .subtract(1, "hour")
      .set({ minute: 0, second: 0 })
      .toDate();
    const end_hour = moment()
      .subtract(1, "hour")
      .set({ minute: 59, second: 59 })
      .toDate();

    let data;

    if (area_ids === "all") {
      const where = {
        datetime: { [Op.between]: [start_hour, end_hour] },
      };

      data = await AreaEnvParamHour.findAll({
        where,
        order: [["area_id", "ASC"]],
      });
    } else {
      const list_area_id = area_ids.split(",").map((v) => String(v));

      data = await Promise.all(
        list_area_id.map(async (v) => {
          const result = await AreaEnvParamHour.findAll({
            where: {
              area_id: v,
              datetime: { [Op.between]: [start_hour, end_hour] },
            },
            order: [["datetime", "DESC"]],
            limit: 1,
          });

          return result[0];
        })
      );

      data = data.filter((v) => v && Object.keys(v).length > 0);
    }

    return res.send({ data: data });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};
