const moment = require("moment");
const mysql = require("../../../models/mysql");
const Op = mysql.Sequelize.Op;

const NodeEnvParamHour = mysql.node_env_param_hours;

module.exports = async function findByNode(req, res) {
  try {
    const params = req.params;
    const query = req.query;

    let start_date;
    let end_date;

    if (query.date) {
      start_date = moment(query.date)
        .set({ hour: 0, minute: 0, second: 0 })
        .toDate();
      end_date = moment(query.date)
        .set({ hour: 23, minute: 59, second: 59 })
        .toDate();
    } else {
      start_date = moment()
        .subtract(1, "day")
        .set({ hour: 0, minute: 0, second: 0 })
        .toDate();
      end_date = moment()
        .subtract(1, "day")
        .set({ hour: 23, minute: 59, second: 59 })
        .toDate();
    }

    let where = {
      node_id: params.node_id,
      datetime: { [Op.between]: [start_date, end_date] },
    };

    let data = await NodeEnvParamHour.findAll({ where });

    if (query.slot && Number(query.slot) === 8) {
      const hours = [1, 4, 7, 10, 13, 16, 19, 22];

      data = data.filter((v) => {
        const date = new Date(v.datetime);
        const hour = date.getHours();

        if (hours.includes(hour)) {
          return v;
        }
      });
    }

    return res.send({ data: data });
  } catch (err) {
    console.log(err);

    return res.status(500).send({ error: err });
  }
};
