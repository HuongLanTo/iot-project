const fs = require("fs");
const User = require("../../models/user");
const Role = require("../../models/role");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const { formatPhoneNumber } = require("../../utils/common");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createUser");

const updateUserInfo = async function updateUserInfo(req, res) {
  const role = req.body.role;
  var roleExist = false;

  Role.findOne(role)
    // .populate("role")
    .exec((err, data) => {
      if (err) {
        return res.status(500).send({
          responseCode: 0,
          responseMessage: err.message,
        });
      }
      if (data == null || data._id == null) {
        return res.status(500).send({
          responseCode: -1,
          responseMessage: "Không tìm thấy Role",
        });
      }
      roleExist = true;
    });

  if (roleExist == true) {
    try {
      const updatedUser = await User.update(
        {
          _id: req.params.id,
        },
        {
          role: role,
        }
      );
      return res.status(200).send({
        responseCode: 1,
        responseMessage: "UPDATE ROLE SUCCEED",
      });
    } catch (err) {
      logger.error(err.message);
      return res.status(500).send({
        responseCode: 0,
        responseMessage: "Cập nhật không thành công, Hệ thống đang bận",
        responseDecription: err.message,
      });
    }
  }
};

module.exports = updateUserInfo;
