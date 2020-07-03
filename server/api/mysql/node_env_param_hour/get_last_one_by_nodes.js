const moment = require("moment");
const base64 = require("js-base64").Base64;
const mysql = require("../../../models/mysql");
const Op = mysql.Sequelize.Op;

const NodeEnvParamHour = mysql.node_env_param_hours;

module.exports = async function findLastByNodes(req, res) {
  try {
    const filter = JSON.parse(base64.decode(req.query.filter));

    if (!filter.node_ids) {
      return res.status(400).send({
        error: {
          message: "Parameters not found",
        },
      });
    }

    let data;

    if (filter.node_ids === "all") {
      const start_hour = moment()
        .subtract(1, "hour")
        .set({ minute: 0, second: 0 })
        .toDate();
      const end_hour = moment()
        .subtract(1, "hour")
        .set({ minute: 59, second: 59 })
        .toDate();

      const where = {
        datetime: { [Op.between]: [start_hour, end_hour] },
      };

      data = await NodeEnvParamHour.findAll({ where });
    } else {
      const node_ids = filter.node_ids.split(",").map((v) => Number(v));

      data = await Promise.all(
        node_ids.map(async (v) => {
          const result = await NodeEnvParamHour.findAll({
            where: {
              node_id: v,
            },
            order: [["datetime", "DESC"]],
            limit: 1,
          });

          return result[0];
        })
      );
    }

    return res.send({ data: data });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};
