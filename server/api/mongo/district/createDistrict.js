const fs = require("fs");
const District = require("../../../models/mongo/district");
const Province = require("../../../models/mongo/province");
const path = require('path');
const log4js = require("log4js");
const { slugify } = require("../../../utils/common");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const createDistrict = async function createDistrict(req, res) {
  const body = req.body;

  if (!body.name || !body.type || !body.code || !body.parent_code) {
    return res.status(400).send({
      responseCode: 11,
      responseMessage: "PARAM.INVALID",
    });
  }

  let parent;
  await getParent(body.parent_code).then(data => parent = data);

  var value = new District({
    name: body.name,
    type: body.type,
    slug: slugify(body.name),
    name_with_type: gen_name_with_type(body.name, body.type),
    path: gen_path(body.name, parent.name),
    path_with_type: gen_path_with_type(
      body.name,
      body.type,
      parent.name_with_type
    ),
    code: body.code,
    parent_code: body.parent_code,
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

function gen_name_with_type(name, type) {
  if (type == "quan") {
    return "Quận " + name;
  }
  return "Huyện " + name;
}

async function getParent(parent_code) {
  // await Province.findOne({ code: parent_code })
  //   .exec((err, data) => {
  //     if (err) {
  //       return res.status(500).send({
  //         responseCode: 0,
  //         responseMessage: "Lỗi trong quá trình tạo mới Quận/Huyện",
  //       });
  //     }
  //     return data;
  //   });

  return new Promise((resolve) => {
    Province.findOne({ code: parent_code }).exec((err, data) => {
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

function gen_path(name, parent) {
  return name + ", " + parent;
}

function gen_path_with_type(name, type, parent_name_with_type) {
  if (type == "quan") {
    return "Quận " + name + ", " + parent_name_with_type;
  }
  return (path_with_type = "Huyện " + name + " , " + parent_name_with_type);
}

module.exports = createDistrict;
