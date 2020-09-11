const fs = require("fs");
const SubDistrict = require("../../../models/mongo/sub-district");
const log4js = require("log4js");
const { slugify } = require("../../../utils/common");
const bodyParser = require("body-parser");
const District = require("../../../models/mongo/district");

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
    slug: bodyParser.slug,
    type: body.type,
    name_with_type: body.name_with_type,
    path: body.path,
    path_with_type: body.path_with_type,
    code: body.code,
    parent_code: body.parent_code,
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
  if (type == "xa") {
    return "Xã " + name;
  }
  return "Phường " + name;
}

function gen_path(name, parent) {
  return name + ", " + parent;
}

function gen_path_with_type(name, type, parent_name_with_type) {
  if (type == "xa") {
    return "Xã " + name + ", " + parent_name_with_type;
  }
  return (path_with_type = "Phường " + name + " , " + parent_name_with_type);
}


async function getParent(parent_code) {
  return new Promise((resolve) => {
    District.findOne({ code: parent_code }).exec((err, data) => {
      if (err) {
        return res.status(500).send({
          responseCode: 0,
          responseMessage: "Lỗi trong quá trình tạo mới Quận/Huyện",
        });
      }
      resolve(data);
    });
  });
}

module.exports = createSubDistrict;
