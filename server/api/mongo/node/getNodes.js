const fs = require("fs");
const User = require("../../../models/mongo/user");
const Node = require("../../../models/mongo/node");
const Location = require("../../../models/mongo/location");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const base64 = require("js-base64").Base64;
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createUser");

const getUsers = async function getUsers(req, res) {
  console.log(req.query.filter)
  const filter = JSON.parse(base64.decode(req.query.filter));
  var page = parseInt(req.query.page);
  var size = parseInt(req.query.size);
  var limit = {};

  if (page < 0 || page === 0) {
    return res.status(400).send({
      responseCode: 11,
      responseMessage: "invalid page number, should start with 1",
    });
  }

  limit.skip = size * (page - 1);
  limit.limit = size;

  var districtQuery = {};
  if(filter.district) {
    districtQuery = {
      "location_info.district": ObjectId(filter.district)
    }
  }

  Node.aggregate(
    [
      { "$lookup": {
          "from": 'locations',
          "localField": "location",
          "foreignField": "_id",
          "as": "location_info"
      }},
      { "$unwind": "$location_info" },
      { 
          "$match":{
              "$and":[
                  // { "location_info.district": { "$regex": filter.district?filter.district:'', "$options": 'i' }},
                  districtQuery,
                  { "name": { "$regex": filter.name?filter.name:'', "$options": 'i' }},
              ]
           }
      },
  ],
    function (err, result) {
      if (err) {
        return res.status(500).send({
          responseCode: 0,
          responseMessage: "Tìm kiếm không thành công, Hệ thống đang bận",
        });
      }
      return res.status(200).send({
        responseCode: 1,
        responseMessage: "TRẢ VỀ KẾT QUẢ TÌM KIẾM THÀNH CÔNG",
        responseData: result,
      });
    }
  );

};

module.exports = getUsers;
