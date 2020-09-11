const fs = require("fs");
const Role = require("../../../models/mongo/role");
const ActionLog = require("../../../models/mongo/actionLog");
const District = require("../../../models/mongo/district");
const path = require('path');
const Action = require("../../../models/mongo/action");
const moment = require('moment');
const log4js = require("log4js");
const { slugify } = require("../../../utils/common");
const { stringify } = require("flatted");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const createRole = async function createRole(req, res) {
  const body = req.body;
  logger.info("request.body: " + stringify(body));
  const action_time = moment();
  logger.info("request.body: " + stringify(body));
  let response;
  if (
    !body.name ||
    !body.area_permission ||
    !body.action_permission ||
    !Array.isArray(body.area_permission) ||
    !Array.isArray(body.action_permission)
  ) {
    response = {
      responseCode: 11,
      responseMessage: "PARAM.INVALID",
    };
    logger.info("response: " + stringify(response));
    return res.status(400).send(response);
  }

  var actionLog = new ActionLog({
    action_user : req.user_id,
    action_time : action_time.format(),
    action_type : req.method,
    collection_store : "users",
    request : stringify(req.body)
  })

  let existedRole;
  try {
    existedRole = await Role.findOne({ slug: await slugify(body.name) });
  } catch (error) {
    logger.error("Error check exist role\n" + stringify(error))
    return res.status(500).send({
      responseCode: 0,
      responseMessage: "Lỗi trong quá trình tạo mới Role\n" + error.message,
    });
  }

  if (existedRole) {
    response = {
      responseCode: 2,
      responseMessage: "Role đã tồn tại",
    };
    logger.info("response: " + stringify(response))
    return res.status(400).send(response);
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
        response = {
          responseCode: 0,
          responseMessage:
            "Khu vực " + area_permission[i]+ " không có trong danh sách quản lý"
        };
        logger.info("response: " + stringify(response))
        return res.status(400).send(response);
      }
    }
    value.area_permission = area_permission;
  }

  if (action_permission.length > 0) {
    for (let i = 0; i < action_permission.length; i++) {
      let  action = null;
      await getActionById(action_permission[i]).then(_action => action = _action);
      if (!action || !action._id) {
        response = {
          responseCode: 0,
          responseMessage:
            "Hành động " + action_permission[i]+ " không có trong danh sách quản lý"
        };
        logger.info("response: " + stringify(response))
        return res.status(400).send(response);
      }
    }
    value.action_permission = action_permission;
  }

  await value.save()
  .then(data => {
    response = {
      responseCode: 1,
      responseMessage: "SUCCEED",
      responseData: data,
    }
    actionLog.current_data = data
    actionLog.response = stringify(response);
    logger.info("response: " + stringify(response))
    return res.status(200).send(response);
  })
  .catch(err => {
    response = {
      responseCode: 0,
      responseMessage: "Tạo mới không thành công, Hệ thống đang bận",
      responseDecription: err.message,
    }
    actionLog.response = stringify(response);
    logger.error("error create new role\n" + stringify(err));
    return res.status(500).send(response);
  })
  .finally(() => {
    actionLog.execution_time = moment().valueOf() - action_time.valueOf();
    actionLog.save();
  });
};

async function getActionById(action_id) {
  return new Promise((resolve) => {
    Action.findById(action_id)
      .exec((err, data) => {
        if (err) {
          logger.error("error check action\n" + stringify(err));
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
          logger.error("error check area\n" + stringify(err));
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
