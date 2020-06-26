const db = require("../../models/mysql");
const Op = db.Sequelize.Op;

const AreaEnvParamDay = db.area_env_param_days;

module.exports = async function findAll(req, res) {
  const query = req.query

  const page = query.page || 0
  const size = query.size || 20

  var where = {}

  if (Object.keys(query).length) {
    if (query.start_date && query.end_date) {
      where.datetime = { [Op.between]: [query.start_date, query.end_date] }
    }

    if (query.start_date && !query.end_date) {
      where.datetime = { [Op.gte]: query.start_date }
    }

    if (query.area_id) {
      where.area_id = query.area_id
    }

    if (query.location) {
      where.location = { [Op.substring]: `%${query.location}%`}
    }
  }

  await AreaEnvParamDay.findAndCountAll({ where, ...paginate(page, size) })
    .then(data => {
      res.send({ data: data });
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
};

function paginate (page, pageSize) {
  const offset = page * pageSize
  const limit = pageSize

  return {
    offset,
    limit
  }
}