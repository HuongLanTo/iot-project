const fs = require("fs");
const User = require("../../../models/mongo/user");
const ActionLog = require("../../../models/mongo/actionLog");
const path = require('path');
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const moment = require('moment');
const {parse, stringify} = require('flatted');

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const createUser = async function create(req, res) {
  const body = req.body;
  logger.info("request.body: " + stringify(body))
  const salt = await bcrypt.genSalt(10);
  const action_time = moment();
  let response;

  var actionLog = new ActionLog({
    action_user : req.user_id,
    action_time : action_time.format(),
    action_type : req.method,
    collection_store : "users",
    request : stringify(req.body)
  })

  if (
    !body.username || !body.password || !body.name ||
    !body.phone || !body.email || !body.role
  ) {
    response = {
      responseCode: 11,
      responseMessage: "PARAM.INVALID",
    }
    logger.info("response: " + stringify(response));
    return res.status(400).send(response);
  }

  const hashedPassword = await bcrypt.hash(body.password, salt);
  // const vPhone = formatPhoneNumber(body.phone, "FORMAT_MSISDN_SHORT_XXX");

  const value = new User({
    username: body.username,
    password: hashedPassword,
    role: body.role,
    name: body.name,
    phone: body.phone,
    email: body.email,
    gender: body.gender,
    birthday: body.birthday,
    created_by: req.user_id,
  });

  await value.save()
  .then(data => {
      response = {
        responseCode: 1,
        responseMessage: "SUCCEED",
        responseData: data,
      };
      actionLog.current_data = data
      actionLog.response = stringify(response);
      logger.info("response: " + stringify(response));
      return res.status(200).send(response);
  })
  .catch(err => {
      response = {
        responseCode: 0,
        responseMessage: "Tạo mới location không thành công, Hệ thống đang bận\n" + err.message,
      }
      actionLog.response = stringify(response);
      logger.error("Error create user\n" + stringify(err))
      return res.status(500).send(response);
  })
  .finally(() => {
    actionLog.execution_time = moment().valueOf() - action_time.valueOf();
    actionLog.save();
  });

};

module.exports = createUser;
