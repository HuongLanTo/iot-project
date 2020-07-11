const moment = require("moment");
const base64 = require("js-base64").Base64;
const mysql = require("../../../models/mysql");
const Op = mysql.Sequelize.Op;

const NodeEnvParamHour = mysql.node_env_param_hours;

module.exports = async function findLastByNodes(req, res) {
  try {
    const filter = req.query.filter
      ? JSON.parse(base64.decode(req.query.filter))
      : {};

    const node_ids = filter.node_ids ? filter.node_ids : "all";

    const start_hour = moment()
      .subtract(1, "hour")
      .set({ minute: 0, second: 0 })
      .toDate();
    const end_hour = moment()
      .subtract(1, "hour")
      .set({ minute: 59, second: 59 })
      .toDate();

    let data;

    if (node_ids === "all") {
      const where = {
        datetime: { [Op.between]: [start_hour, end_hour] },
      };

      data = await NodeEnvParamHour.findAll({
        where,
        order: [["node_id", "ASC"]],
      });
    } else {
      const list_node_id = node_ids.split(",");

      data = await Promise.all(
        list_node_id.map(async (v) => {
          const result = await NodeEnvParamHour.findAll({
            where: {
              node_id: v,
              datetime: { [Op.between]: [start_hour, end_hour] },
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
