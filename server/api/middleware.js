const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookie = require("cookie");
const log4js = require("log4js");
const {parse, stringify} = require('flatted');

const Authorization = require("./mongo/auth/authorization");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("getMe");

export async function authorize(req, res, next) {
  const token = req.cookies ? req.cookies.user_token : null
  const excepts = ['/login', '/logout', '/register']
  const login_url = '/login'

  if (excepts.includes(req.path)) return next()

  if (!token) {
    return res.redirect(login_url)
  }

  const user = await Authorization.verifyToken(token)

  if (!user) {
    return res.status(400).send({
      responseCode: 0,
      responseMessage: "Người dùng không tồn tài"
    });
  }

  req.user_id = user.id

  next()
}

