const fs = require("fs");
const Role = require("../../../models/mongo/role");
const District = require("../../../models/mongo/district");
const Action = require("../../../models/mongo/action");

const log4js = require("log4js");
const { slugify } = require("../../../utils/common");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createRole");

const createRole = async function createRole(req, res) {
  const body = req.body;

  if (
    !body.name ||
    !body.area_permission ||
    !body.action_permission ||
    !Array.isArray(body.area_permission) ||
    !Array.isArray(body.action_permission)
  ) {
    logger.info("Param invalid");
    return res.status(400).send({
      responseCode: 11,
      responseMessage: "PARAM.INVALID",
    });
  }

  let existedRole;
  try {
    existedRole = await Role.findOne({ slug: await slugify(body.name) });
  } catch (error) {
    return res.status(500).send({
      responseCode: 0,
      responseMessage: "Lỗi trong quá trình tạo mới Role\n" + error.message,
    });
  }

  if (existedRole) {
    return res.status(400).send({
      responseCode: 2,
      responseMessage: "Role đã tồn tại",
    });
  }

  const area_permission = body.area_permission;
  const action_permission = body.action_permission;
  var value = new Role({
    name: body.name,
    slug: slugify(body.name),
  });

  if (area_permission.length > 0) {
    for (let i = 0; i < area_permission.length; i++) {
      let  area = null;
      await getAreaById(area_permission[i]).then(_area => area = _area);
      if (!area || !area._id) {
        return res.status(400).send({
          responseCode: 0,
          responseMessage:
            "Khu vực " + area_permission[i]+ " không có trong danh sách quản lý"
        });
      }
    }
    value.area_permission = area_permission;
  }

  if (action_permission.length > 0) {
    for (let i = 0; i < action_permission.length; i++) {
      let  action = null;
      await getActionById(action_permission[i]).then(_action => action = _action);
      if (!action || !action._id) {
        return res.status(400).send({
          responseCode: 0,
          responseMessage:
            "Hành động " + action_permission[i]+ " không có trong danh sách quản lý"
        });
      }
    }
    value.action_permission = action_permission;
  }

  console.log(3);

  try {
    await value.save();
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

async function getActionById(action_id) {
  return new Promise((resolve) => {
    Action.findById(action_id)
      .exec((err, data) => {
        if (err) {
          return res.status(500).send({
            responseCode: 0,
            responseMessage: "Lỗi trong quá trình tạo mới role",
          });
        }   
        resolve(data)
      });
  });
};

async function getAreaById(district_id) {
  return new Promise((resolve) => {
    District.findById(district_id)
      .exec((err, data) => {
        if (err) {
          return res.status(500).send({
            responseCode: 0,
            responseMessage: "Lỗi trong quá trình tạo mới role",
          });
        }   
        resolve(data)
      });
  });
};

module.exports = createRole;
