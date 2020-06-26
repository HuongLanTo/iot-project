const db = require("../../models/mysql");
const Op = db.Sequelize.Op;

const NodeEnvParamHour = db.node_env_param_hours;

module.exports = async function findByNode(req, res) {
  try {
    const params = req.params
    const query = req.query

    let start_date
    let end_date

    if (query.date) {
      start_date = new Date(query.date)
      end_date = new Date(query.date)
    } else {
      start_date = new Date()
      end_date = new Date()

      start_date.setDate(start_date.getDate() - 1)
      end_date.setDate(end_date.getDate() - 1)
    }

    start_date.setHours(0, 0, 0)
    end_date.setHours(23, 59, 59)

    let where = {
      node_id: params.node_id,
      datetime: { [Op.between]: [start_date, end_date] }
    }

    let data = await NodeEnvParamHour.findAll({where})

    if (query.slot && Number(query.slot) === 8) {
      const hours = [1,4,7,10,13,16,19,22]

      data = data.filter(v => {
        const date = new Date(v.datetime)
        const hour = date.getHours()

        if (hours.includes(hour)) {
          return v
        }
      })
    }

    return res.send({ data: data });
  } catch (err) {
    console.log(err);
    
    return res.status(500).send({ error: err });
  }
};