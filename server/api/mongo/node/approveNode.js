const fs = require("fs");
const log4js = require("log4js");
const Node = require("../../../models/mongo/node");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("approveNode");

const approveNode = async function approveNode(req, res) {
  const body = req.body;

  var approve = 0;

  if (body.approve != null) {
    if (body.approve == 1 || body.approve == 0 || body.approve == -1) {
      approve = body.approve;
    } else {
      logger.info("Param invalid");
      return res.status(400).send({
        responseCode: 11,
        responseMessage: "Giá trị Approve không hợp lệ",
      });
    }
  } else {
    return res.status(400).send({
      responseCode: 11,
      responseMessage: "Giá trị Approve không hợp lệ",
    });
  }

  try {
    const up = await Node.update(
      {
        _id: req.params.id,
      },
      {
        approve: approve,
      }
    );
    res.status(200).send({
      responseCode: 1,
      responseMessage: "APPROVE SUCCEED",
    });
  } catch (err) {
    logger.error(err.message);
    res.status(500).send({
      responseCode: 0,
      responseMessage: "Phê duyệt không thành công, Hệ thống đang bận",
      responseDecription: err.message,
    });
  }
};

module.exports = approveNode;