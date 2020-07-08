const fs = require("fs");
const User = require("../../models/mongo/user");
const Node = require("../../models/mongo/node");
const Location = require("../../models/mongo/location");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const base64 = require("js-base64").Base64;
const moment = require('moment');
const { db } = require("../../models/mongo/user");

// log4js.configure("./config/log4js.json");
// const logger = log4js.getLogger("getDataSensorByHour");

const getDataSensorByHour = async function getDataSensorByHour(req, res) {
    // const filter = JSON.parse(base64.decode(req.query.filter));
    // const startTime = req.body.year + '-' + req.body.month + '-' + req.body.day + 'T' + req.body.hour + ':00:00';
    // const endHour = parseInt(req.body.hour) + 1;

    // const endTime = req.body.year + '-' + req.body.month + '-' + req.body.day + 'T' + endHour + ':00:00';

    const startTime = new Date(new Date(req.body.year + '-' + req.body.month + '-' + req.body.day).setHours(parseInt(req.body.hour) + 7,00,00))
    const endTime = new Date(new Date(req.body.year + '-' + req.body.month + '-' + req.body.day).setHours(parseInt(req.body.hour) + 8,00,00))

    console.log(moment(startTime).format())
    console.log(moment(endTime).format())

    Node.find({ 
        "created_at" : 
           {     
            //    $gte:   new Date(new Date('2020-06-30').setHours(15 + 7,00,00)) ,     
            //    $lt :  new Date(new Date('2020-06-30').setHours(16 + 7,00,00)) 
               $gte:   new Date(new Date(req.body.year + '-' + req.body.month + '-' + req.body.day).setHours(parseInt(req.body.hour) + 7,00,00)) ,     
               $lt :  new Date(new Date(req.body.year + '-' + req.body.month + '-' + req.body.day).setHours(parseInt(req.body.hour) + 8,00,00)) 
          } 
       })
     .then(data => {
        console.log('abc');
        console.log(data)
        res.send(data)

    })
};

module.exports = getDataSensorByHour;
