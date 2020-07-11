const moment = require("moment");
const base64 = require("js-base64").Base64;
const mysql = require("../../../models/mysql");
const Op = mysql.Sequelize.Op;

const NodeEnvParamDay = mysql.node_env_param_days;

module.exports = async function findByNodes(req, res) {
  try {

    console.log(req.query.filter);
    
    const filter = req.query.filter
      ? JSON.parse(base64.decode(req.query.filter))
      : {};

    console.log(filter);
    

    if (!filter.node_ids) {
      return res.status(400).send({
        error: {
          message: "Parameters not found",
        },
      });
    }

    const start_date = moment()
      .subtract(3, "day")
      .set({ hour: 0, minute: 0, second: 0 })
      .toDate();
    const end_date = moment()
      .subtract(1, "day")
      .set({ hour: 23, minute: 59, second: 59 })
      .toDate();

    const node_ids = filter.node_ids.split(",");

    const data = await Promise.all(
      node_ids.map(async (v) => {
        return await NodeEnvParamDay.findAll({
          where: {
            node_id: v,
            datetime: { [Op.between]: [start_date, end_date] },
          },
          order: [["datetime", "DESC"]],
          limit: 3,
        }).then((result) => {
          return {
            node_id: v,
            data: result,
          };
        });
      })
    );

    return res.send({ data: data });
  } catch (err) {
    console.log(err);

    return res.status(500).send({ error: err });
  }
};
