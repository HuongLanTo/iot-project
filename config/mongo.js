const env = require("dotenv")
env.config()

const mongo = {
  mongoPath: process.env.MONGO_PATH,
  sessionSecret: process.env.SESSION_SECRET,
  secureCookie: false
}

module.exports = mongo
  