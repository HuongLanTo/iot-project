const fs = require("fs");
const Node = require("../../../models/mongo/node");
const Role = require("../../../models/mongo/role");
const Action = require("../../../models/mongo/action");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const path = require('path');
const { slugify } = require("../../../utils/common");
const { stringify } = require("flatted");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const updateAction = async function updateAction(req, res) {
  const body = req.body;
  logger.info("request.body: " + stringify(body))

  let response;
  if (!body.name) {
    response = {
      responseCode: 11,
      responseMessage: "Tên Action không hợp lệ",
    };
    logger.info("response: " + stringify(response));
    return res.status(400).send(response);
  }

  let existedAction = false;
  try {
    existedAction = await Action.findOne({ slug: slugify(body.name) });
  } catch (error) {
    logger.error("Error check action\n" + stringify(error))
    return res.status(500).send({
      responseCode: 0,
      responseMessage: "Lỗi trong quá trình tạo mới Action\n" + error.message,
    });
  }
  if (existedAction) {
    response = {
      responseCode: 2,
      responseMessage: "Tên Action đã tồn tại",
    };
    return res.status(400).send(response);
  }

  try {
    const updated = await Action.updateOne(
      {
        _id: req.params.id,
      },
      {
        name: body.name,
        slug: slugify(body.name)
      }
    );
    response = {
      responseCode: 1,
      responseMessage: "UPDATE STATUS SUCCEED",
    };
    logger.error("response: " + stringify(response));
    return res.status(200).send(response);
  } catch (err) {
    logger.error("Error update action\n" + stringify(err));
    return res.status(500).send({
      responseCode: 0,
      responseMessage: "Cập nhật không thành công, Hệ thống đang bận\n" + err.message,
    });
  }
};

module.exports = updateAction;
