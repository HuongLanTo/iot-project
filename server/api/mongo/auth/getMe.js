const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Authorization = require("./authorization");
const User = require("../../../models/mongo/user");

const logined = async function logined(req, res) {
  const token = req.cookies ? this.req.cookies.user_token : null;

  const user = await Authorization.verifyToken(token);

  if (!user) {
    this.res.clearCookie("user_token");
    this.res.clearCookie("durations");

    return res.status(400).send({
      responseCode: 0,
      responseMessage: "User không tồn tại",
    });
  }

  const data = await getUser(user._id);

  if (!data) {
    this.res.clearCookie("user_token");
    this.res.clearCookie("durations");

    return res.status(400).send({
      responseCode: 0,
      responseMessage: "User không tồn tại",
    });
  }

  return res.status(200).send({
    responseCode: 0,
    responseMessage: "User không tồn tại",
    data: data,
  });
};

const getUser = async function getUser(userId) {
  await User.findById(userId)
    .select({ _id, name, email, phone })
    .exec((err, data) => {
      if (err) {
        return res.status(500).send({
          responseCode: 0,
          responseMessage: "Lỗi trong quá trình kiểm tra user",
        });
      }
      return data;
    });
};

module.exports = logined;
