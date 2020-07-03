const express = require("express");
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");

const mongo = require("./config/mongo");
const mysql = require("./models/mysql");

const api_mysql = require("./api/mysql");
const api_mongo = require("./api/mongo");

const app = express();
app.use(cookieParser())
const server = require("http").Server(app);

const port = process.env.PORT;

app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "ALLOWALL");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, DELETE, OPTIONS"
  );

  if (req.headers.origin) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  }

  res.setHeader("Access-Control-Allow-Credentials", true);

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept, cookies"
  );

  next();
});

app.use(
  session({
    secret: "la_casa_de_papel",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(
  bodyParser.json({
    extended: false,
  })
);

/**
 * API
 */
app.use(api_mysql);
app.use(api_mongo);

/**
 * MySQL connect
 */
mysql.sequelize.sync();

/**
 * Mongo connect
 */
mongoose.connect(mongo.mongoPath, (err) => {
  if (err) console.log(err);
  else console.log("Connect MongoDB success.");
});

server.listen(port, (err) => {
  if (err) console.log(err);
  else console.log("Server started at port " + port);
});

// const a = {}

// if (a == null) {
//     console.log('==')
// }else {
//     console.log("fsjdf")
// }

// console.log(Object.keys(roleConfig))
