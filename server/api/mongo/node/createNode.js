const fs = require("fs");
const Node = require("../../../models/mongo/node");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const { formatPhoneNumber } = require("../../../utils/common");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createNode");

const createNode = async function createNode(req, res) {
  const body = req.body;

  if (
    body.created_by == null ||
    body.location == null ||
    body.ip == null ||
    body.name == null
  ) {
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
  });

  if (body.temperature_status != null) {
    if (body.temperature_status == 1 || body.temperature_status == 0) {
      value.temperature_status = body.temperature_status;
    } else {
      logger.info("Param invalid");
      return res.status(400).send({
        responseCode: 11,
        responseMessage: "Trạng thái NHIỆT ĐỘ không hợp lệ",
      });
    }
  }
  if (body.humidity_status != null) {
    if (body.humidity_status == 1 || body.humidity_status == 0) {
      value.humidity_status = body.humidity_status;
    } else {
      logger.info("Param invalid");
      return res.status(400).send({
        responseCode: 11,
        responseMessage: "Trạng thái ĐỘ ẨM không hợp lệ",
      });
    }
  }
  if (body.dust_status != null) {
    if (body.dust_status == 1 || body.dust_status == 0) {
      value.dust_status = body.dust_status;
    } else {
      logger.info("Param invalid");
      return res.status(400).send({
        responseCode: 11,
        responseMessage: "Trạng thái BỤI không hợp lệ",
      });
    }
  }
  if (body.co_status != null) {
    if (body.co_status == 1 || body.co_status == 0) {
      value.co_status = body.co_status;
    } else {
      logger.info("Param invalid");
      return res.status(400).send({
        responseCode: 11,
        responseMessage: "Trạng thái CO không hợp lệ",
      });
    }
  }
  if (body.pressure_status != null) {
    if (body.pressure_status == 1 || body.pressure_status == 0) {
      value.pressure_status = body.pressure_status;
    } else {
      logger.info("Param invalid");
      return res.status(400).send({
        responseCode: 11,
        responseMessage: "Trạng thái ÁP SUẤT không hợp lệ",
      });
    }
  }
  if (body.nh3_status != null) {
    if (body.nh3_status == 1 || body.nh3_status == 0) {
      value.nh3_status = body.nh3_status;
    } else {
      logger.info("Param invalid");
      return res.status(400).send({
        responseCode: 11,
        responseMessage: "Trạng thái NH3 không hợp lệ",
      });
    }
  }
  if (body.co2_status != null) {
    if (body.co2_status == 1 || body.co2_status == 0) {
      value.co2_status = body.co2_status;
    } else {
      logger.info("Param invalid");
      return res.status(400).send({
        responseCode: 11,
        responseMessage: "Trạng thái CO2 không hợp lệ",
      });
    }
  }
  if (body.smoke_status != null) {
    if (body.smoke_status == 1 || body.smoke_status == 0) {
      value.smoke_status = body.smoke_status;
    } else {
      logger.info("Param invalid");
      return res.status(400).send({
        responseCode: 11,
        responseMessage: "Trạng thái KHÓI không hợp lệ",
      });
    }
  }

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