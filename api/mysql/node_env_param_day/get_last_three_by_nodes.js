const mysql = require("../../../models/mysql");
const Op = mysql.Sequelize.Op;

const NodeEnvParamDay = mysql.node_env_param_hours;

module.exports = async function findByNodes(req, res) {
  try {
    const query = req.query

    if (!query.node_ids) {
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
    
    const node_ids = query.node_ids.split(',').map(v => Number(v))

    const data = await Promise.all(node_ids.map(async v => {
      return await NodeEnvParamDay.findAll({
        where: {
          node_id: v,
          datetime: { [Op.between]: [start_date, end_date] }
        },
        order: [['datetime', 'DESC']],
        limit: 3
      }).then(result => {
        return {
          node_id: v,
          data: result
        }
      })
    }))

    return res.send({ data: data });
  } catch (err) {
    console.log(err);
    
    return res.status(500).send({ error: err });
  }
};