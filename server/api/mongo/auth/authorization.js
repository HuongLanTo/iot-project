const jwt = require("jsonwebtoken");
const log4js = require("log4js");
const path = require('path');

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const verifyToken = async function verifyToken(token) {
  return new Promise((resolve) => {
    if (!token) {
      return resolve(null);
    }

    jwt.verify(token, "0L4f_3lsA_4nNa", (err, user) => {
      if (err || !user) {
        return resolve(null);
      }
      return resolve(user);
    });
  });
};

const generateToken = async function generateToken(user_id) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { id: user_id },
      "0L4f_3lsA_4nNa",
      { expiresIn: 24 + "h" },
      (err, token) => {
        if (err) {
          return reject(err);
        }
        resolve({
          token,
          durations: Number(20) * 3600,
        });
      }
    );
  });
};

const destroyToken = async function destroyToken(token) {
  jwt.destroy(token);
};

module.exports = { verifyToken, generateToken, destroyToken };
