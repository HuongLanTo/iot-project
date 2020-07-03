const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const {parse, stringify} = require('flatted');

const Authorization = require("./authorization");
const User = require("../../../models/mongo/user");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("getMe");

const getMe = async function getMe(req, res) {
  const token = req.cookies ? req.cookies.user_token : null;
  logger.info("request: " + stringify(req));
  logger.info("request.cookies: " + stringify(req.cookies));
  console.log("request:\n" , req.header);

  // const token = req.headers.cookies ? req.headers.cookies.user_token : null;

  const user = await Authorization.verifyToken(token);

  if (!user) {
    res.clearCookie("user_token");
    res.clearCookie("durations");  

    return res.status(400).send({
      responseCode: 0,
      responseMessage: "User không tồn tại",
    });
  }

  let  data = null;
  await getUser(user.id).then(_user => data = _user);

  if (!data) {
    res.clearCookie("user_token");
    res.clearCookie("durations");

    return res.status(400).send({
      responseCode: 0,
      responseMessage: "User không tồn tạiiiiiiiiiiiiiii",
    });
  }

  return res.status(200).send({
    responseCode: 0,
    responseMessage: "Thành công",
    data: data,
  });
};

async function getUser(userId) {
  // await User.findById(userId)
  //   .select({ _id, name, email, phone })
  //   .exec((err, data) => {
  //     if (err) {
  //       return res.status(500).send({
  //         responseCode: 0,
  //         responseMessage: "Lỗi trong quá trình kiểm tra user",
  //       });
  //     }
  //     return data;
  //   });

  return new Promise((resolve) => {
    User.findById(userId)
      .select({ _id: 1, name: 1, email: 1, phone: 1 })
      .exec((err, data) => {
        if (err) {
          return res.status(500).send({
            responseCode: 0,
            responseMessage: "Lỗi trong quá trình kiểm tra user",
          });
        }
        resolve(data)
      });
  });
};

module.exports = getMe;
