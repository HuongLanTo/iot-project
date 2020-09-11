const fs = require("fs");
const Role = require("../../../models/mongo/role");
const path = require('path');
const log4js = require("log4js");
const { stringify } = require("flatted");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const updateRole = async function updateRole(req, res) {
  const body = req.body;
  logger.info("request.body: " + stringify(body));
  let response;
  if (
    !body.name ||
    !body.area_permission ||
    !body.action_permission ||
    !Array.isArray(body.area_permission) ||
    !Array.isArray(body.action_permission) ||
    !body.area_permission.id ||
    !body.area_permission.name
  ) {
    response = {
      responseCode: 11,
      responseMessage: "PARAM.INVALID",
    };
    logger.info("response: " + stringify(response))
    return res.status(400).send(response);
  }

  const area_permission = body.area_permission;
  const action_permission = body.action_permission;
  var value = {};

  if (area_permission.length > 0) {
    for (let i = 0; i < area_permission.length; i++) {
      await District.findById(area_permission[i].id).exec((err, data) => {
        if (err) {
          logger.error("error checking area permission\n" + stringify(err))
          return res.status(500).send({
            responseCode: 0,
            responseMessage: err.message,
          });
        }
        if (data == null || data._id == null) {
          response = {
            responseCode: 0,
            responseMessage:
              "Khu vực " +
              area_permission[i].name +
              " không có trong danh sách quản lý",
          };
          logger.info("response: " + stringify(response))
          return res.status(400).send(response);
        }
      });
    }
    value.area_permission = area_permission;
  }

  if (action_permission.length > 0) {
    for (let i = 0; i < action_permission.length; i++) {
      await District.findById(action_permission[i].id).exec((err, data) => {
        if (err) {
          logger.error("error checking action permission\n" + stringify(err))
          return res.status(500).send({
            responseCode: 0,
            responseMessage: err.message,
          });
        }
        if (data == null || data._id == null) {
          response = {
            responseCode: 0,
            responseMessage:
              "Hành động " + action_permission[i].name + " không tồn tại",
          }
          logger.info("response: " + stringify(response))
          return res.status(400).send(response);
        }
      });
    }
    value.action_permission = action_permission;
  }

  try {
    const updatedRole = await Role.update(
      {
        _id: req.params.id,
      },
      {
        $set: value,
      }
    );
    response = {
      responseCode: 1,
      responseMessage: "UPDATE SUCCEED",
      responseData: value,
    };
    logger.info("response: " + stringify(response))
    return res.status(200).send(response);
  } catch (err) {
    logger.error("error update role\n" + stringify(err));
    return res.status(500).send({
      responseCode: 0,
      responseMessage: "Cập nhật không thành công, Hệ thống đang bận",
      responseDecription: err.message,
    });
  }
};

module.exports = updateRole;
