const fs = require("fs");
const User = require("../../../models/mongo/user");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const base64 = require("js-base64").Base64;

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createUser");

const getUsers = async function getUsers(req, res) {
  const filter = JSON.parse(base64.decode(req.query.filter));
  var page = parseInt(req.query.page);
  var size = parseInt(req.query.size);
  var limit = {};

  if (page < 0 || page === 0) {
    return res.status(400).send({
      responseCode: 11,
      responseMessage: "invalid page number, should start with 1",
    });
  }

  limit.skip = size * (page - 1);
  limit.limit = size;

  let totalDocuments = 0;

  try {
    totalDocuments = await User.countDocuments(filter);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).send({
      responseCode: 12,
      responseMessage: err.message,
    });
  }

  User.find(filter, {}, limit)
    // .populate("role")
    .exec((err, data) => {
      if (err) {
        return res.status(500).send({
          responseCode: 0,
          responseMessage: err.message,
        });
      }
      return res.status(200).send({
        responseCode: 1,
        responseMessage: "Thành công",
        data: data,
        totalDocuments: totalDocuments,
      });
    });
};

module.exports = getUsers;
