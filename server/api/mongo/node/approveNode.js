const fs = require("fs");
const log4js = require("log4js");
const ActionLog = require("../../../models/mongo/actionLog");
const Node = require("../../../models/mongo/node");
const moment = require('moment');
const path = require('path');
const { stringify } = require("flatted");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const approveNode = async function approveNode(req, res) {
  const body = req.body;
  logger.info("request.body: " + stringify(body))
  var approve = 0;
  var value = {};
  const action_time = moment();

  let response;
  let actionLog = new ActionLog({
    action_user : req.user_id,
    action_time : action_time.format(),
    action_type : req.method,
    collection_store : "nodes",
    request : stringify(req.body)
  })

  if (body.approve != null) {
    if (body.approve == 1 || body.approve == 0) {
      value.approve = body.approve;
    } else if(body.approve == -1) {
      value.approve = body.approve;
      value.reason = body.reason;
    } else {
      response = {
        responseCode: 11,
        responseMessage: "Giá trị Approve không hợp lệ",
      };
      logger.info("response: " + stringify(response));
      return res.status(400).send(response);
    }
  } else {
    response = {
      responseCode: 11,
      responseMessage: "Giá trị Approve không hợp lệ",
    };
    logger.info("response: " + stringify(response));
    return res.status(400).send(response);
  }

  try {
    await Node.update(
      {
        _id: req.params.id,
      },
      value
    );

    response = {
      responseCode: 1,
      responseMessage: "APPROVE SUCCEED",
    };
    logger.info("response: " + stringify(response));
    res.status(200).send(response);
  } catch (err) {
    logger.error("Error approve node\n" + stringify(err));
    res.status(500).send({
      responseCode: 0,
      responseMessage: "Phê duyệt không thành công, Hệ thống đang bận",
      responseDecription: err.message,
    });
  }

  await Node.findByIdAndUpdate({_id: req.params.id} , value)
  .then(async (data) => {
    response = {
      responseCode: 1,
      responseMessage: "APPROVE SUCCEED",
      responseData: value,
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
      responseMessage: "Phê duyệt không thành công, Hệ thống đang bận\n" + err.message,
    }
    actionLog.response = stringify(response);
    logger.error("Error aprrove node\n" + stringify(err))
    return res.status(500).send(response);
  })
  .finally(() => {
    actionLog.execution_time = moment().valueOf() - action_time.valueOf();
    actionLog.save();
  });
};

module.exports = approveNode;
