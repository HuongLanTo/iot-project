const fs = require("fs");
const Action = require("../../../models/mongo/action");
const log4js = require("log4js");
const path = require('path');
const { stringify } = require("flatted");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const getAction = async function getAction(req, res) {
  let response;
  logger.info("request get by id: " + req.params.id);
  await Action.findById(req.params.id)
    .exec((err, data) => {
      if (err) {
        logger.error("Error get action\n" + stringify(err))
        return res.status(500).send({
          responseCode: 0,
          responseMessage: "Lỗi trong quá trình get Action\n" + err.message,
        });
      }

      if(!data) {
        response = {
          responseCode: 2,
          responseMessage: "action id not exist"
        };
        logger.info("response: " + stringify(response))
        return res.status(400).send(response);
      }
      response = {
        responseCode: 1,
        responseMessage: "get action success",
        data: data,
      };
      logger.info("response: " + stringify(res/ponse))
      return res.status(200).send(response);
    });
};

module.exports = getAction;
