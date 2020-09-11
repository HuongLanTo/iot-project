const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookie = require("cookie");
const log4js = require("log4js");
const {parse, stringify} = require('flatted');
const User =  require("../models/mongo/user")


const Authorization = require("./mongo/auth/authorization");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("getMe");

const authorize =  async function authorize(req, res, next) {
  // const token = req.headers.cookie ? cookie.parse(req.headers.cookie).user_token : null

  var token;
  if(req.headers.cookie) {
    token = req.headers.cookie ? cookie.parse(req.headers.cookie).user_token : null
  }else if (req.headers.cookies) {
    token = req.headers.cookies ? cookie.parse(req.headers.cookies).user_token : null
  }

  const excepts = ['/auth/login', '/auth/logout', '/auth/register']
  const login_url = '/login'

  console.log(req.path)

  if (excepts.includes(req.path)) return next()

  // if (!token) {
  //   // return res.redirect(login_url)
  //   return res.status(400).send({
  //     responseCode: -1,
  //     responseMessage: "Chưa có thông tin người dùng"
  //   });
  // }

  const user = await Authorization.verifyToken(token)

  // if (!user) {
  //   return res.status(400).send({
  //     responseCode: 0,
  //     responseMessage: "Thông tin người dùng không hợp lệ"
  //   });
  // }

  // req.user_id = user.id

  if(user) {
    req.user_id = user.id
  }

  next()
}

const hasPermission =  async function hasPermission(req, res, next, permission) {
  var token;
  if(req.headers.cookie) {
    token = req.headers.cookie ? cookie.parse(req.headers.cookie).user_token : null;
    logger.info("request.headers: " + stringify(req.headers));
    logger.info("request.headers.cookie: " + stringify(req.headers.cookie));
  }else if(req.headers.cookies) {
    token = req.headers.cookies ? cookie.parse(req.headers.cookies).user_token : null;
    logger.info("request.headers: " + stringify(req.headers));
    logger.info("request.headers.cookies: " + stringify(req.headers.cookies));
  }

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

  // console.log(data.role.area_permission)
  // console.log(data.role.action_permission)

  next();
  
}

async function getUser(userId) {
  return new Promise((resolve) => {
    User.findById(userId)
      .select({ _id: 1, role: 1})
      .populate({
        path : 'role',
        populate : {
          path : 'area_permission action_permission'
        }
      })
      
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

module.exports = {authorize, hasPermission};
