const fs = require("fs");
const Action = require("../../../models/mongo/action");
const log4js = require("log4js");
const {slugify} =  require("../../../utils/common")

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createAction");

const createAction = async function createAction(req, res) {
  const body = req.body;

  if (!body.name) {
    return res.status(400).send({
      responseCode: 11,
      responseMessage: "PARAM.INVALID",
    });
  }

  let existedAction;
  try {
    existedAction = await Action.findOne({ slug: await slugify(body.name) })
  } catch (error) {
    return res.status(500).send({
      responseCode: 0,
      responseMessage: "Lỗi trong quá trình tạo mới Action\n" + error.message,
    });
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
    return res.status(400).send({
      responseCode: 2,
      responseMessage: "Action đã tồn tại",
    });
  }

  var value = new Action({
    name: body.name,
    slug: slugify(body.name)
  });

  try {
    await value.save();
    return res.status(200).send({
      responseCode: 1,
      responseMessage: "Tạo mới thành công",
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

module.exports = createAction;
