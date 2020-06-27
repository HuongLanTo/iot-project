const mysql = require("../../../models/mysql");
const Op = mysql.Sequelize.Op;

const AreaEnvParamDay = mysql.area_env_param_hours;

module.exports = async function findByAreas(req, res) {
  try {
    const query = req.query

    if (!query.area_ids) {
      return res.status(400).send({
        error: {
          message: "Parameters not found"
        }
      })
    }

    let start_date = new Date()
    let end_date = new Date()

    start_date.setDate(start_date.getDate() - 3)
    end_date.setDate(end_date.getDate() - 1)

    start_date.setHours(0, 0, 0)
    end_date.setHours(23, 59, 59)

    const area_ids = query.area_ids.split(',').map(v => Number(v))

    const data = await Promise.all(area_ids.map(async v => {
      return await AreaEnvParamDay.findAll({
        where: {
          area_id: v,
          datetime: { [Op.between]: [start_date, end_date] }
        },
        order: [['datetime', 'DESC']],
        limit: 3
      }).then(result => {
        return {
          area_id: v,
          data: result
        }
      })
    }))

    return res.send({ data: data });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};