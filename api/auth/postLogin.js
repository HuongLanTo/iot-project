const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Authorization = require("./authorization");
const User = require("../../models/user");

const login = async function login(req, res) {
  const body = req.body;

  if (!body.username || !body.password) {
    return res.status(200).send({
      responseCode: 11,
      responseMessage: "PARAM.INVALID",
    });
  }

  const user = await getUser();

  if (!user) {
    return res.status(400).send({
      responseCode: 0,
      responseMessage: "Không tìm thấy user",
    });
  }

  const is_valid = await bcrypt.compare(password, user.password);

  if (!is_valid) {
    return res.status(400).send({
      responseCode: 0,
      responseMessage: "Mật khẩu không chính xác",
    });
  }

  const token = await Authorization.generateToken(user.id);

  res.cookie("user_token", token.token, { maxAge: 20 * 60 * 60 * 1000 });
  res.cookie("durations", token.durations, { maxAge: 20 * 60 * 60 * 1000 });

  return res.status(200).send({
    responseCode: 1,
    responseMessage: { data: { token: token } },
  });
};

const getUser = async function getUser(username) {
  await User.findOne({ username: username })
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

module.exports = login;
