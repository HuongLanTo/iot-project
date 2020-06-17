const fs = require("fs");
const SubDistrict = require("../../models/sub-district");
const log4js = require("log4js");
const { formatPhoneNumber } = require("../../utils/common");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createPrivince");

const createSubDistrict = async function createSubDistrict(req, res) {
  const body = req.body;

  if (
    body.name == null ||
    body.type == null ||
    body.code == null ||
    body.parent_code == null
  ) {
    logger.info("Param invalid");
    return res.status(400).send({
      responseCode: 11,
      responseMessage: "PARAM.INVALID",
    });
  }

  var value = new SubDistrict({
    name: body.name,
    type: body.type,
    code: body.code,
    parent_code: body.parent_code
  });

  try {
    const saveDistrict = await value.save();
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

module.exports = createSubDistrict;
