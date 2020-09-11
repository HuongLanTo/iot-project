const fs = require("fs");
const Action = require("../../../models/mongo/action");
const log4js = require("log4js");
const {parse, stringify} = require('flatted');
const {slugify} =  require("../../../utils/common");
const path = require('path');

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const createAction = async function createAction(req, res) {
  const body = req.body;
  logger.info("request.body: " + stringify(req.body))

  let response;
  if (!body.name) {
    response = {
      responseCode: 11,
      responseMessage: "PARAM.INVALID",
    };
    logger.info("response: " + stringify(response))
    return res.status(400).send(response);
  }

  let existedAction = false;
  try {
    existedAction = await Action.findOne({ slug: await slugify(body.name) })
  } catch (error) {
    response = {
      responseCode: 0,
      responseMessage: "Lỗi trong quá trình tạo mới Action\n" + error.message,
    };
    logger.error("Error when check new action is exist\n" +  stringify(error))
    return res.status(500).send(response);
  }
  // await Action.findOne({ slug: slugify(body.name) })
  //   .exec((err, data) => {
  //     if (err) {
  //       return res.status(500).send({
  //         responseCode: 0,
  //         responseMessage: "Lỗi trong quá trình tạo mới user",
  //       });
  //     }
  //     existedAction = data;
  //   });

  if(existedAction) {
    response = {
      responseCode: 2,
      responseMessage: "Action existed",
    };
    logger.info("response: " + stringify(response));
    return res.status(400).send(response);
  }

  var value = new Action({
    name: body.name,
    slug: slugify(body.name)
  });

  try {
    const saved = await value.save();
    response = {
      responseCode: 1,
      responseMessage: "Tạo mới thành công",
      responseData: saved,
    };
    logger.info("response: " + stringify(response))
    return res.status(200).send(response);
  } catch (err) {
    logger.error("Error save action\n" + stringify(err));
    return res.status(500).send({
      responseCode: 0,
      responseMessage: "Tạo mới không thành công, Hệ thống đang bận\n" + err.message
    });
  }
};

module.exports = createAction;
