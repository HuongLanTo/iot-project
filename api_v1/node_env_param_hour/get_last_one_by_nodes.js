const db = require("../../models/mysql");

const NodeEnvParamHour = db.node_env_param_hours;

module.exports = async function findLastByNodes(req, res) {
  try {
    const query = req.query

    if (!query.node_ids) {
      return res.status(400).send({
        error: {
          message: "Parameters not found"
        }
      })
    }

    const node_ids = query.node_ids.split(',').map(v => Number(v))

    const data = await Promise.all(node_ids.map(async v => {
      const result = await NodeEnvParamHour.findAll({
        where: {
          node_id: v
        },
        order: [['datetime', 'DESC']],
        limit: 1
      })

      return result[0]
    }))

    return res.send({ data: data });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};