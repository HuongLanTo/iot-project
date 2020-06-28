const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Authorization = require("./authorization");
const User = require("../../../models/mongo/user");

const getMe = async function getMe(req, res) {
  const token = req.cookies ? req.cookies.user_token : null;
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
