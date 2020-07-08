const fs = require("fs");
const User = require("../../models/mongo/user");
const Node = require("../../models/mongo/node");
const Location = require("../../models/mongo/location");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const base64 = require("js-base64").Base64;
const moment = require('moment');

// log4js.configure("./config/log4js.json");
// const logger = log4js.getLogger("getDataSensorByHour");

const getDataSensorByHour = async function getDataSensorByHour(req, res) {
    // const filter = JSON.parse(base64.decode(req.query.filter));
    const startTime = req.body.year + '-' + req.body.month + '-' + req.body.day + 'T' + req.body.hour + ':00:00';
    const endHour = parseInt(req.body.hour) + 1;
    const endTime = req.body.year + '-' + req.body.month + '-' + req.body.day + 'T' + endHour + ':00:00';

    console.log(startTime)
    console.log(endTime)


    Node.find(
        {created_at: 
        // {$gte: moment('2020-06-30 15:00:00').format(), $lte: moment('2020-06-30 16:00:00').format()}
        {$gte: "2020-06-30 20:00:00"}
    })
    .then(data => {
        console.log('abc');
        console.log(data)
        res.send(data)
    })

    // Node.index({created_at: 'text'});
    // Node.find(
    //     {$text: 
    //     {$search: "2020-06-30 15"}
    // })
    // .then(data => {
    //     console.log('abc');
    //     console.log(data)
    //     res.send(data)
    // })
};

module.exports = getDataSensorByHour;
