const fs = require("fs");
const Node = require("../../../models/mongo/node");
const ActionLog = require("../../../models/mongo/actionLog");
const log4js = require("log4js");
const moment = require('moment');
const path = require('path');
const { formatPhoneNumber } = require("../../../utils/common");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));


const updateNodeStatus = async function updateNodeStatus(req, res) {
  const body = req.body;
  logger.info("request.body: " + stringify(body));
  const action_time = moment();
  let actionLog = new ActionLog({
    action_user : req.user_id,
    action_time : action_time.format(),
    action_type : req.method,
    collection_store : "nodes",
    request : stringify(req.body)
  })
  let response;

  if (body.status != null) {
    if (body.status == 1 || body.status == 0 || body.status == -1) {
      status = body.status;
    } else {
      response = {
        responseCode: 11,
        responseMessage: "Giá trị Status không hợp lệ",
      };
      logger.info("response: " + stringify(response));
      return res.status(400).send(response);
    }
  } else {
    response = {
      responseCode: 11,
      responseMessage: "Giá trị Status không hợp lệ",
    };
    logger.info("response: " + stringify(response));
    return res.status(400).send(response);
  }

  // try {
  //   const updatedStatus = await Node.update(
  //     {
  //       _id: req.params.id,
  //     },
  //     {
  //       status: status,
  //     }
  //   );
  //   return res.status(200).send({
  //     responseCode: 1,
  //     responseMessage: "UPDATE STATUS SUCCEED",
  //   });
  // } catch (err) {
  //   logger.error(err.message);
  //   return res.status(500).send({
  //     responseCode: 0,
  //     responseMessage: "Cập nhật không thành công, Hệ thống đang bận",
  //     responseDecription: err.message,
  //   });
  // }


  await Node.findByIdAndUpdate({_id: req.params.id} , {status: status})
  .then(async (data) => {
    response = {
      responseCode: 1,
      responseMessage: "UPDATE STATUS SUCCEED",
      responseData: {status: status},
    }
    logger.info("response: " + stringify(response))
    actionLog.previous_data = data
    actionLog.response = stringify(response);
    actionLog.current_data = await Node.findById(req.params.id);
    return res.status(200).send(response);
  })
  .catch(err => {
    response = {
      responseCode: 0,
      responseMessage: "Cập nhật không thành công, Hệ thống đang bận\n" + err.message,
    }
    actionLog.response = stringify(response);
    logger.error("Error update node status\n" + stringify(err))
    return res.status(500).send(response);
  })
  .finally(() => {
    actionLog.execution_time = moment().valueOf() - action_time.valueOf();
    actionLog.save();
  });
};

module.exports = updateNodeStatus;
