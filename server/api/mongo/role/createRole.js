const fs = require("fs");
const Role = require("../../../models/mongo/role");
const District = require("../../../models/mongo/district");
const log4js = require("log4js");
const { formatPhoneNumber } = require("../../../utils/common");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createRole");

const createRole = async function createRole(req, res) {
  const body = req.body;

  if (
    body.name == null ||
    body.area_permission == null ||
    body.action_permission == null ||
    !Array.isArray(body.area_permission) ||
    !Array.isArray(body.action_permission) ||
    body.area_permission.id == null ||
    body.area_permission.name == null
  ) {
    logger.info("Param invalid");
    return res.status(400).send({
      responseCode: 11,
      responseMessage: "PARAM.INVALID",
    });
  }

  const area_permission = body.area_permission;
  const action_permission = body.action_permission;
  var value = new Role({
    name: body.name,
  });

  if (area_permission.length > 0) {
    for (let i = 0; i < area_permission.length; i++) {
      await District.findById(area_permission[i].id).exec((err, data) => {
        if (err) {
          return res.status(500).send({
            responseCode: 0,
            responseMessage: err.message,
          });
        }
        if (data == null || data._id == null) {
          return res.status(400).send({
            responseCode: 0,
            responseMessage:
              "Khu vực " +
              area_permission[i].name +
              " không có trong danh sách quản lý",
          });
        }
      });
    }
    value.area_permission = area_permission;
  }

  if (action_permission.length > 0) {
    for (let i = 0; i < action_permission.length; i++) {
      await District.findById(action_permission[i].id).exec((err, data) => {
        if (err) {
          return res.status(500).send({
            responseCode: 0,
            responseMessage: err.message,
          });
        }
        if (data == null || data._id == null) {
          return res.status(400).send({
            responseCode: 0,
            responseMessage:
              "Hành động " + action_permission[i].name + " không tồn tại",
          });
        }
      });
    }
    value.action_permission = action_permission;
  }

  try {
    const saveRole = await value.save();
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

module.exports = createRole;