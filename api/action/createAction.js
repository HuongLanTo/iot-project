const fs = require("fs");
const Action = require("../../models/action");
const log4js = require("log4js");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createPrivince");

const createAction = async function createAction(req, res) {
  const body = req.body;

  if (
    body.name == null
  ) {
    logger.info("Param invalid");
    return res.status(400).send({
      responseCode: 11,
      responseMessage: "PARAM.INVALID",
    });
  }

  var value = new Action({
    name: body.name
  });

  try {
    const saveAction = await value.save();
    return res.status(200).send({
      responseCode: 1,
      responseMessage: "SUCCEED",
      responseData: value,
    });
  } catch (err) {
    logger.error(err.message);
    return res.status(500).send({
      responseCode: 0,
      responseMessage: "Tạo mới không thành công, Hệ thống đang bận",
      responseDecription: err.message,
    });
  }
};

module.exports = createAction;
