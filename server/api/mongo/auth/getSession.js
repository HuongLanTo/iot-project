const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Authorization = require("./authorization");
const User = require("../../../models/mongo/user");
const log4js = require("log4js");
const {parse, stringify} = require('flatted');
const cookie = require("cookie");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("haveSession");

const haveSession = async function haveSession(req, res) {
  try {
    logger.info("request.headers.cookies: " + stringify(req.headers.cookie));
    // const result = await getSession(req.cookies);
    const result = await getSession(cookie.parse(req.headers.cookie));

    return res.status(200).send({
      responseCode: 0,
      data: result,
    });
  } catch (err) {
    return res.status(500).send({
      responseCode: 0,
      responseMessage: err.message,
    });
  }
};

const getSession = async function getSession(cookies) {
  const token = cookies ? cookies.user_token : null;
  const user = await Authorization.verifyToken(token);
  if (user) {
    return { exprired: false };
  }
  return { exprired: true };
};

module.exports = haveSession;
