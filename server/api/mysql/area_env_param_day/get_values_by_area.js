const mysql = require("../../../models/mysql");
const Op = mysql.Sequelize.Op;

const AreaEnvParamDay = mysql.area_env_param_days;

module.exports = async function findByArea(req, res) {
  try {
    const params = req.params;
    const query = req.query;
    const slot = query.slot ? query.slot : 31;

    let start_date = new Date();
    let end_date = new Date();

    start_date.setDate(start_date.getDate() - slot);
    end_date.setDate(end_date.getDate() - 1);

    start_date.setHours(0, 0, 0);
    end_date.setHours(23, 59, 59);

    let where = {
      area_id: params.area_id,
      datetime: { [Op.between]: [start_date, end_date] },
    };

    const data = await AreaEnvParamDay.findAll({ where });

    return res.send({ data: data });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};
