const base64 = require("js-base64").Base64;
const mysql = require("../../../models/mysql");
const Op = mysql.Sequelize.Op;

const NodeEnvParamDay = mysql.node_env_param_days;

module.exports = async function findAll(req, res) {
  const filter = req.query.filter
    ? JSON.parse(base64.decode(req.query.filter))
    : {};

  const page = Number(req.query.page) - 1 || 0;
  const size = Number(req.query.size) || 20;

  var where = {};

  if (Object.keys(filter).length) {
    if (filter.start_date && filter.end_date) {
      where.datetime = { [Op.between]: [filter.start_date, filter.end_date] };
    }

    if (filter.start_date && !filter.end_date) {
      where.datetime = { [Op.gte]: filter.start_date };
    }

    if (filter.node_id) {
      where.node_id = filter.node_id;
    }

    if (filter.location) {
      where.location = { [Op.substring]: `%${filter.location}%` };
    }
  }

  await NodeEnvParamDay.findAndCountAll({ where, ...paginate(page, size) })
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
};

function paginate(page, pageSize) {
  const offset = page * pageSize;
  const limit = pageSize;

  return {
    offset,
    limit,
  };
}
