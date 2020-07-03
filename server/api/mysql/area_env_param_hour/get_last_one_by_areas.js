const base64 = require("js-base64").Base64;
const mysql = require("../../../models/mysql");

const AreaEnvParamHour = mysql.area_env_param_hours;

module.exports = async function findLastByAreas(req, res) {
  try {
    const filter = req.query.filter
      ? JSON.parse(base64.decode(req.query.filter))
      : {};

    if (!filter.area_ids) {
      return res.status(400).send({
        error: {
          message: "Parameters not found",
        },
      });
    }

    const area_ids = filter.area_ids.split(",").map((v) => Number(v));

    const data = await Promise.all(
      area_ids.map(async (v) => {
        const result = await AreaEnvParamHour.findAll({
          where: {
            area_id: v,
          },
          order: [["datetime", "DESC"]],
          limit: 1,
        });

        return result[0];
      })
    );

    return res.send({ data: data });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};
