const jwt = require("jsonwebtoken");

const verifyToken = async function verifyToken(token) {
  return new Promise((resolve) => {
    if (!token) {
      return resolve(null);
    }

    jwt.verify(token, config.jwt_token_secret, (err, user) => {
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
      config.jwt_token_secret,
      { expiresIn: config.session_duration + "h" },
      (err, token) => {
        if (err) {
          return reject(err);
        }
        resolve({
          token,
          durations: Number(config.session_duration) * 3600,
        });
      }
    );
  });
};

const destroyToken = async function destroyToken(token) {
  jwt.destroy(token);
};

module.exports = { verifyToken, generateToken, destroyToken };
