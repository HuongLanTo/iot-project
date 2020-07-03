const moment = require("moment");
const base64 = require("js-base64").Base64;
const mysql = require("../../../models/mysql");
const Op = mysql.Sequelize.Op;

const AreaEnvParamHour = mysql.area_env_param_hours;

module.exports = async function findByArea(req, res) {
  try {
    const params = req.params;
    const filter = JSON.parse(base64.decode(req.query.filter));

    let start_date;
    let end_date;

    if (filter.date) {
      start_date = moment(filter.date)
        .set({ hour: 0, minute: 0, second: 0 })
        .toDate();
      end_date = moment(filter.date)
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
      area_id: params.area_id,
      datetime: { [Op.between]: [start_date, end_date] },
    };

    let data = await AreaEnvParamHour.findAll({ where });

    if (filter.slot && Number(filter.slot) === 8) {
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
    return res.status(500).send({ error: err });
  }
};
