const fs = require("fs");
const User = require("../../../models/mongo/user");
const ActionLog = require("../../../models/mongo/actionLog");
const log4js = require("log4js");
const moment = require('moment');
const path = require('path');
const { stringify } = require("flatted");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const updateUserInfo = async function updateUserInfo(req, res) {
  logger.info("request.body: " + stringify(req.body));
  const status = req.body.status;
  let response;
  const action_time = moment();

  let actionLog = new ActionLog({
    action_user : req.user_id,
    action_time : action_time.format(),
    action_type : req.method,
    collection_store : "users",
    request : stringify(req.body)
  })

  // try {
  //   const updatedUser = await User.update(
  //     {
  //       _id: req.params.id,
  //     },
  //     {
  //       status: status,
  //     }
  //   );
  //   response = {
  //     responseCode: 1,
  //     responseMessage: "UPDATE STATUS SUCCEED",
  //   };
  //   logger.info("response: " + stringify(response))
  //   return res.status(200).send(response);
  // } catch (err) {
  //   logger.error("Error update user status\n" + stringify(err));
  //   return res.status(500).send({
  //     responseCode: 0,
  //     responseMessage: "Cập nhật không thành công, Hệ thống đang bận",
  //     responseDecription: err.message,
  //   });
  // }

  await User.findByIdAndUpdate({_id: req.params.id} , {status: status})
  .then(async (data) => {
    response = {
      responseCode: 1,
      responseMessage: "UPDATE STATUS SUCCEED",
      responseData: {status: status}
    };
    logger.info("response: " + stringify(response))
    actionLog.previous_data = data
    actionLog.response = stringify(response);
    actionLog.current_data = await User.findById(req.params.id);
    return res.status(200).send(response);
  })
  .catch(err => {
    response = {
      responseCode: 0,
      responseMessage: "Cập nhật Status User không thành công, Hệ thống đang bận\n" + err.message,
    }
    actionLog.response = stringify(response);
    logger.error("Error update status user\n" + stringify(err))
    return res.status(500).send(response);
  })
  .finally(() => {
    actionLog.execution_time = moment().valueOf() - action_time.valueOf();
    actionLog.save();
  });
};

module.exports = updateUserInfo;
