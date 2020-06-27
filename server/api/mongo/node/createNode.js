const fs = require("fs");
const Node = require("../../../models/mongo/node");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const { formatPhoneNumber } = require("../../../utils/common");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createNode");

const createNode = async function createNode(req, res) {
  const body = req.body;

  if (!body.created_by || !body.location || !body.ip || !body.name) {
    logger.info("Param invalid");
    return res.status(400).send({
      responseCode: 11,
      responseMessage: "PARAM.INVALID",
    });
  }

  var value = new Node({
    created_by: body.created_by,
    location: body.location,
    ip: body.ip,
    name: body.name,
    temperature_status: body.temperature_status === 1 ? 1 : 0,
    humidity_status: body.humidity_status === 1 ? 1 : 0,
    dust_status: body.dust_status === 1 ? 1 : 0,
    co_status: body.co_status === 1 ? 1 : 0,
    nh3_status: body.nh3_status === 1 ? 1 : 0,
    co2_status: body.co2_status === 1 ? 1 : 0,
    smoke_status: body.smoke_status === 1 ? 1 : 0,
  });

  try {
    const saveNode = await value.save();
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

module.exports = createNode;
