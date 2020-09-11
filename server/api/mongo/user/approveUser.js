const fs = require("fs");
const ActionLog = require("../../../models/mongo/actionLog");
const User = require("../../../models/mongo/user");
const moment = require('moment');
const log4js = require("log4js");
const path = require('path');
const { stringify } = require("flatted");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const approveUser = async function approveUser(req, res) {
  logger.info("request.body: " + stringify(req.body))
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
  //   await User.update(
  //     {
  //       _id: req.params.id,
  //     },
  //     {
  //       approve: req.body.approve,
  //     }
  //   );
  //   response = {
  //     responseCode: 1,
  //     responseMessage: "Phê duyệt thành  công",
  //   };
  //   logger.info("response: " + stringify(response));
  //   res.status(200).send(response);
  // } catch (err) {
  //   logger.error("Error aprrove user\n" + stringify(err));
  //   res.status(500).send({
  //     responseCode: 0,
  //     responseMessage: "Phê duyệt không thành công, Hệ thống đang bận",
  //     responseDecription: err.message,
  //   });
  // }

  await User.findByIdAndUpdate({_id: req.params.id} , {approve: req.body.approve})
  .then(async (data) => {
    response = {
      responseCode: 1,
      responseMessage: "APPROVE SUCCEED",
      responseData: {approve: req.body.approve}
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
      responseMessage: "Phê duyệt User không thành công, Hệ thống đang bận\n" + err.message,
    }
    actionLog.response = stringify(response);
    logger.error("Error aprrove user\n" + stringify(err))
    return res.status(500).send(response);
  })
  .finally(() => {
    actionLog.execution_time = moment().valueOf() - action_time.valueOf();
    actionLog.save();
  });
};

module.exports = approveUser;
