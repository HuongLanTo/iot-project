const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Authorization = require("./authorization");
const User = require("../../models/user");

const haveSession = async function haveSession(req, res) {
  try {
    const result = await getSession(req.cookies);

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
