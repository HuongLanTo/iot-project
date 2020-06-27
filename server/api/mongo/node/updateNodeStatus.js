const fs = require("fs");
const Node = require("../../../models/mongo/node");
const Role = require("../../../models/mongo/role");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const { formatPhoneNumber } = require("../../../utils/common");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("updateNodeStatus");

const updateNodeStatus = async function updateNodeStatus(req, res) {
  const body = req.body;

  if (body.status != null) {
    if (body.status == 1 || body.status == 0 || body.status == -1) {
        status = body.status;
    } else {
      logger.info("Param invalid");
      return res.status(400).send({
        responseCode: 11,
        responseMessage: "Giá trị Status không hợp lệ",
      });
    }
  } else {
    return res.status(400).send({
      responseCode: 11,
      responseMessage: "Giá trị Status không hợp lệ",
    });
  }

  try {
    const updatedStatus = await Node.update(
      {
        _id: req.params.id,
      },
      {
        status: status,
      }
    );
    return res.status(200).send({
      responseCode: 1,
      responseMessage: "UPDATE STATUS SUCCEED",
    });
  } catch (err) {
    logger.error(err.message);
    return res.status(500).send({
      responseCode: 0,
      responseMessage: "Cập nhật không thành công, Hệ thống đang bận",
      responseDecription: err.message,
    });
  }
};

module.exports = updateNodeStatus;
