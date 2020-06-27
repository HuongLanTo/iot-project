const fs = require("fs");
const User = require("../../../models/mongo/user");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const { formatPhoneNumber } = require("../../../utils/common");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createUser");

const approveUser = async function approveUser(req, res) {
  try {
    const updatedUser = await User.update({
        _id: req.params.id
    }, {
        approve: 1
    })
    res.status(200).send({
      responseCode: 1,
      responseMessage: "APPROVE SUCCEED",
    });
  } catch (err) {
    logger.error(err.message);
    res.status(500).send({
      responseCode: 0,
      responseMessage: "Cập nhật không thành công, Hệ thống đang bận",
      responseDecription: err.message,
    });
  }
};

module.exports = approveUser;
