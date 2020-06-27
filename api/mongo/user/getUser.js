const fs = require("fs");
const User = require("../../../models/mongo/user");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const base64 = require("js-base64").Base64;

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createUser");

const getUser = async function getUser(req, res) {
  await User.findById(req.params.id)
    // .populate("role")
    .exec((err, data) => {
      if (err) {    
        return res.status(500).send({
          responseCode: 0,
          responseMessage: err.message,
        });
      }
      return res.status(200).send({
        responseCode: 1,
        responseMessage: "Thành công",
        data: data,
      });
    });
};

module.exports = getUser;
