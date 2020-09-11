const express = require("express");
const bodyParser = require("body-parser");
const {parse, stringify} = require('flatted');
const io = require('socket.io-client');
const moment = require("moment");

const app = express();
const server = require("http").Server(app);

const port = 6001;

// const io = require("socket.io")(server);
// var socket = io.connect("http://localhost:1234/", {
//     reconnection: true
// });

var socket = io.connect("http://52.221.233.65:1234/", {
    reconnection: true
});

server.listen(port, (err) => {
  if (err) console.log("Error when start server at " + port + "\n" + stringify(err));
  else console.log("Server started at port " + port);
});

let data = {}

function emitData() {
  data.co = Number((Math.random() * (0.30 - 0.40) + 0.40).toFixed(2));
  data.temperature = Math.floor(Math.random() * (35 - 25) + 25);
  data.humidity = Math.floor(Math.random() * (75 - 50) + 50);
  data.pm25 = Number((Math.random() * (30.00 - 60.00) + 60.00).toFixed(2));
  data.co2 = Number((Math.random() * (7.00 - 15.00) + 15.00).toFixed(2));
  data.sentByPiAt = moment().format();
  
  socket.emit('data_sensor', data);
}


setInterval(emitData, 60000);

// console.log(moment().format())
