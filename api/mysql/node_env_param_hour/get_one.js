const mysql = require("../../../models/mysql");

const NodeEnvParamHour = mysql.node_env_param_hours;

module.exports = async function findOne(req, res) {
  const param = req.params

  await NodeEnvParamHour.findByPk(param.id)
    .then(data => {
      res.send({ data: data });
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
};