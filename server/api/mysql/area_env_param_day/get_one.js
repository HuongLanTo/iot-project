const mysql = require("../../../models/mysql");

const AreaEnvParamDay = mysql.area_env_param_days;

module.exports = async function findOne(req, res) {
  const param = req.params;

  await AreaEnvParamDay.findByPk(param.id)
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
};
