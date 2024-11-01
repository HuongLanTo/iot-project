const fs = require("fs");
const Province = require("../../../models/mongo/province");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const { slugify } = require("../../../utils/common");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createNode");

const createPrivince = async function createPrivince(req, res) {
  const body = req.body;

  if (body.name == null || body.type == null || body.code == null) {
    logger.info("Param invalid");
    return res.status(400).send({
      responseCode: 11,
      responseMessage: "PARAM.INVALID",
    });
  }

  var value = new Province({
    name: body.name,
    slug: slugify(body.name),
    type: body.type,
    name_with_type: gen_name_with_type(body.name, body.type),
    code: body.code,
  });

  try {
    await value.save();
    return res.status(200).send({
      responseCode: 1,
      responseMessage: "SUCCEED",
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

function gen_name_with_type(name, type) {
  if(type == 'thanh-pho') {
    return "Thành phố " + name;
  }
  return "Tỉnh " + name;
}

module.exports = createPrivince;
