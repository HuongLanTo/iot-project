const fs = require("fs");
const path = require('path');
const ActionLog = require("../../../models/mongo/actionLog");

const log4js = require("log4js");
const { slugify } = require("../../../utils/common");
const { stringify } = require("flatted");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const saveActionLog = function saveActionLog(
  action_user, action_time, action_type, collection_store, request,
  response, previous_data, current_data, execution_time
) {
  const value = new ActionLog({
    action_user: action_user,
    action_time: action_time,
    action_type: action_type,
    collection_store: collection_store,
    request: request,
    response: response,
    previous_data: previous_data,
    current_data: current_data,
    execution_time: execution_time
  });
  try {
    await value.save();
    return res.status(200).send({
      responseCode: 1,
      responseMessage: "SUCCEED",
      responseData: value,
    });
  } catch (err) {
    logger.error("Error save action log\n" + stringify(err));
    return res.status(500).send({
      responseCode: 0,
      responseMessage: "Tạo mới không thành công, Hệ thống đang bận",
      responseDecription: err.message,
    });
  }
};

module.exports = saveActionLog;
