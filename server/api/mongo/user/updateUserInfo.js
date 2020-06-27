const fs = require("fs");
const User = require("../../../models/mongo/user");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const { formatPhoneNumber } = require("../../../utils/common");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createUser");

const updateUserInfo = async function updateUserInfo(req, res) {
  const body = req.body;
  const salt = await bcrypt.genSalt(10);

  var value = {};

  if (body.password != null) {
    value.password = await bcrypt.hash(body.password, salt);
  }
  if (body.phone != null) {
    value.phone = body.phone;
  }
  if (req.avatarFile != null) {
    value.avatar = fs.readFileSync(req.avatarFile.path);
    value.contentType = req.avatarFile.mimetyp;
  }

  try {
    const updatedUser = await User.update({
        _id: req.params.id
    }, {
        $set: value
    })
    return res.status(200).send({
      responseCode: 1,
      responseMessage: "UPDATE SUCCEED",
      responseData: value,
    });
  } catch (err) {
    logger.error(err.message);
    return res.status(500).send({
      responseCode: 0,
      responseMessage: "Cập nhật không thành công, Hệ thống đang bận",
      responseDecription: err.message,
    });
  }
};

module.exports = updateUserInfo;
