const fs = require("fs");
const Node = require("../../../models/mongo/node");
const User = require("../../../models/mongo/user");
const path = require('path');
const ActionLog = require("../../../models/mongo/actionLog");
const moment = require('moment');
const Location = require("../../../models/mongo/location");

const bcrypt = require("bcrypt");
const log4js = require("log4js");
const { slugify } = require("../../../utils/common");
const { stringify } = require("flatted");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const createNode = async function createNode(req, res) {
  const body = req.body;
  logger.info("request.body: " + stringify(body));
  const action_time = moment();
  let response;

  var actionLog = new ActionLog({
    action_user : req.user_id,
    action_time : action_time.format(),
    action_type : req.method,
    collection_store : "nodes",
    request : stringify(req.body)
  })

  if (!req.user_id || !body.location || !body.ip || !body.name) {
    response = {
      responseCode: 11,
      responseMessage: "PARAM.INVALID",
    };
    logger.info("response: " + stringify(response));
    return res.status(400).send(response);
  }

  var _value = {
    ip: body.ip,
    name: body.name,
    slug: slugify(body.name)
  };
  await getUser(req.user_id).then(u => _value.created_by = req.user_id);
  await getLocation(body.location).then(l => _value.location = body.location);

  var value = new Node(_value);

  if (body.temperature_status != null) {
    if (body.temperature_status == 1 || body.temperature_status == 0) {
      value.temperature_status = body.temperature_status;
    } else {
      response = {
        responseCode: 11,
        responseMessage: "Trạng thái NHIỆT ĐỘ không hợp lệ",
      };
      logger.info("response: " + stringify(response));
      return res.status(400).send(response);
    }
  }
  if (body.humidity_status != null) {
    if (body.humidity_status == 1 || body.humidity_status == 0) {
      value.humidity_status = body.humidity_status;
    } else {
      response = {
        responseCode: 11,
        responseMessage: "Trạng thái ĐỘ ẨM không hợp lệ",
      };
      logger.info("response: " + stringify(response));
      return res.status(400).send(response);
    }
  }
  if (body.dust_status != null) {
    if (body.dust_status == 1 || body.dust_status == 0) {
      value.dust_status = body.dust_status;
    } else {
      response = {
        responseCode: 11,
        responseMessage: "Trạng thái BỤI không hợp lệ",
      };
      logger.info("response: " + stringify(response));
      return res.status(400).send(response);
    }
  }
  if (body.co_status != null) {
    if (body.co_status == 1 || body.co_status == 0) {
      value.co_status = body.co_status;
    } else {
      response = {
        responseCode: 11,
        responseMessage: "Trạng thái CO không hợp lệ",
      };
      logger.info("response: " + stringify(response));
      return res.status(400).send(response);
    }
  }
  if (body.pressure_status != null) {
    if (body.pressure_status == 1 || body.pressure_status == 0) {
      value.pressure_status = body.pressure_status;
    } else {
      response = {
        responseCode: 11,
        responseMessage: "Trạng thái ÁP SUẤT không hợp lệ",
      };
      logger.info("response: " + stringify(response));
      return res.status(400).send(response);
    }
  }
  if (body.nh3_status != null) {
    if (body.nh3_status == 1 || body.nh3_status == 0) {
      value.nh3_status = body.nh3_status;
    } else {
      response = {
        responseCode: 11,
        responseMessage: "Trạng thái NH3 không hợp lệ",
      };
      logger.info("response: " + stringify(response));
      return res.status(400).send(response);
    }
  }
  if (body.co2_status != null) {
    if (body.co2_status == 1 || body.co2_status == 0) {
      value.co2_status = body.co2_status;
    } else {
      response = {
        responseCode: 11,
        responseMessage: "Trạng thái CO2 không hợp lệ",
      };
      logger.info("response: " + stringify(response));
      return res.status(400).send(response);
    }
  }
  if (body.smoke_status != null) {
    if (body.smoke_status == 1 || body.smoke_status == 0) {
      value.smoke_status = body.smoke_status;
    } else {
      response = {
        responseCode: 11,
        responseMessage: "Trạng thái KHÓI không hợp lệ",
      };
      logger.info("response: " + stringify(response));
      return res.status(400).send(response);
    }
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
      logger.error("Error create new node\n" + stringify(err));
      return res.status(500).send(response);
    })
    .finally(() => {
      actionLog.execution_time = moment().valueOf() - action_time.valueOf();
      actionLog.save();
    });

};


async function getUser(userId) { 
  return new Promise((resolve) => {
    User.findById(userId)
      .select({ _id: 1, name: 1, email: 1, phone: 1 })
      .exec((err, data) => {
        let response;
        if (err) {
          response = {
            responseCode: 0,
            responseMessage: "Lỗi trong quá trình kiểm tra user",
          };
          logger.info("response: " + stringify(response))
          return res.status(500).send();
        }
        if(!data) {
          response =  {
            responseCode: 2,
            responseMessage: "Không xác thực được người thêm mới",
          };
          return res.status(400).send(response);
        }
        resolve(data)
      });
  });
};

async function getLocation(userId) { 
  return new Promise((resolve) => {
    Location.findById(userId)
      .exec((err, data) => {
        let response;
        if (err) {
          response = {
            responseCode: 0,
            responseMessage: "Lỗi trong quá trình kiểm tra địa chỉ",
          };
          logger.info("response: " + stringify(response))
          return res.status(500).send();
        }
        if(!data || !data._id) {
          response = {
            responseCode: 2,
            responseMessage: "Không xác thực được địa chỉ node",
          };
          logger.info("response: " + stringify(response))
          return res.status(400).send(response);
        }
        resolve(data)
      });
  });
};

module.exports = createNode;
