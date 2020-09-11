const express = require("express");
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const moment = require('moment');
const mongoose = require("mongoose");
const session = require("express-session");
const redis = require("redis");
const client = redis.createClient({
  port: 6379,
  host: '127.0.0.1',
  password: "redis"
})

const mongo = require("./config/mongo");
const mysql = require("./models/mysql");
const {parse, stringify} = require('flatted');

const api_mysql = require("./api/mysql");
const api_mongo = require("./api/mongo");
const {authorize} = require("./api/middleware")

const Sensor = require("./models/mongo/sensor")
const Node = require("./models/mongo/node")
const saveDataSensor = require("./api/mongo/sensor/saveDataSensor")

const log4js = require("log4js");
const { post } = require("./api/mongo");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("index.js");

const app = express();
// app.use(cookieParser())
const server = require("http").Server(app);

const port = process.env.PORT;

const io = require("socket.io")(server);


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

app.use(authorize);

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

// app.get('/', (req, res) => {
//   // res.sendFile('./public/index.html');
//   res.sendFile(__dirname + '/public/index.html');
// })

/**
 * Mongo connect
 */
mongoose.connect(mongo.mongoPath, (err) => {
  if (err) logger.error("Error when connect to MongoDB\n" + stringify(err));
  else logger.info("Connect MongoDB success.");
});

server.listen(port, (err) => {
  if (err) logger.error("Error when start server at " + port + "\n" + stringify(err));
  else logger.info("Server started at port " + port);
});

io.sockets.on('connection', function (socket) {
  // once a client has connected, we expect to get a ping from them saying what room they want to join
  const address = socket.handshake.address;
  const ip = address.split(":")[3];
  logger.info("Connect from node with ip: " + ip)
  console.log("device connect")
  socket.on("data_sensor", async (data) => {
    // client.sadd("list_connect_socket", ip);
    await client.select(1, function(err,res){
      client.sadd("list_connect_socket", ip);
      client.hmset("device_" + ip, "last_time_recieve", moment().format(), "data", JSON.stringify(data));
    });
    await saveDataSensor(data, ip)
  });

  socket.on("hello_from_client", async (data) => {
    console.log(data);
  });

  socket.on("check_status_sensor", async (st) => {
    console.log(ip);
    await getNode(ip).then(data => {
      console.log(data);
      socket.emit('sensor_status', data);
    });
  });

  // socket.emit('sensor_status', {hello: "hello"});

  socket.on('disconnect', function(){
    logger.info("Disconnect from node with ip: " + ip)
  });
}); 


async function getNode(ip) {
  return new Promise((resolve) => {
    Node.findOne({ip:ip})
      .select({ co2_status: 1, co_status: 1, dust_status: 1, temperature_status: 1, humidity_status: 1, _id: 0})
      .exec((err, data) => {
        resolve(data)
      });
  });
};