const fs = require("fs");
const User = require("../../models/user");
const Role = require("../../models/role");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const { formatPhoneNumber } = require("../../utils/common");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createUser");

const updateUserInfo = async function updateUserInfo(req, res) {
  const status = req.body.status;

  try {
    const updatedUser = await User.update(
      {
        _id: req.params.id,
      },
      {
        status: status,
      }
    );
    return res.status(200).send({
      responseCode: 1,
      responseMessage: "UPDATE STATUS SUCCEED",
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
