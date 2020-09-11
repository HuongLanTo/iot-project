const fs = require("fs");
const User = require("../../../models/mongo/user");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const base64 = require("js-base64").Base64;
const path = require('path');
const { stringify } = require("flatted");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const getUser = async function getUser(req, res) {
  logger.info("Get user with id: " + req.params.id)
  let response;
  await User.findById(req.params.id)
    .populate({
      path : 'role',
      populate : {
        path : 'area_permission action_permission'
      }
    })
    .exec((err, data) => {
      if (err) {
        response = {
          responseCode: 0,
          responseMessage: err.message,
        };
        logger.error("Error get user by id\n" + stringify(err))
        return res.status(500).send(response);
      }

      if(!data) {
        response = {
          responseCode: 2,
          responseMessage: "Id User không tồn tài"
        };
        logger.info("response: " + stringify(response))
        return res.status(400).send(response);
      }
      response = {
        responseCode: 1,
        responseMessage: "Thành công",
        data: data,
      };
      logger.info("response: " + stringify(response))
      return res.status(200).send(response);
    });
};

module.exports = getUser;
