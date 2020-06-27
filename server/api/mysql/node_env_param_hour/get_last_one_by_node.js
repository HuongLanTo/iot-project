const mysql = require("../../../models/mysql");

const NodeEnvParamHour = mysql.node_env_param_hours;

module.exports = async function findLast(req, res) {
  try {
    const params = req.params

    const data = await NodeEnvParamHour.findAll({
      where: {
        node_id: params.node_id
      },
      order: [['datetime', 'DESC']],
      limit: 1
    })

    return res.send({ data: data[0] });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};