const fs = require("fs");
const Location = require("../../../models/mongo/location");
const path = require('path');
const log4js = require("log4js");
const { stringify } = require("flatted");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const getLocation = async function getLocation(req, res) {
  logger.info("request get by id: " + req.params.id);
  let response;
  await Location.findById(req.params.id)
    .exec((err, data) => {
      if (err) {
        response = {
          responseCode: 0,
          responseMessage: "Lỗi trong quá trình get Location\n" + err.message,
        }
        logger.info("response: " + stringify(response))
        return res.status(500).send(response);
      }

      if(!data) {
        response = {
          responseCode: 2,
          responseMessage: "Id Location không tồn tài"
        }
        logger.info("response: " + stringify(response))
        return res.status(400).send(response);
      }
      response = {
        responseCode: 1,
        responseMessage: "get list locations success",
        data: data,
      }
      logger.info("response: " + stringify(response))
      return res.status(400).send(response);
    });
};

module.exports = getLocation;
