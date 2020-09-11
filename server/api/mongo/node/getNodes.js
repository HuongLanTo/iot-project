const fs = require("fs");
const path = require('path');
const User = require("../../../models/mongo/user");
const Node = require("../../../models/mongo/node");
const Location = require("../../../models/mongo/location");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const base64 = require("js-base64").Base64;
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const {parse, stringify} = require('flatted');

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));


const getUsers = async function getUsers(req, res) {
  var filter ={};
  let response;
  if(req.query.filter) {
    var filter = JSON.parse(base64.decode(req.query.filter));
    logger.info("request filter: " + stringify(filter));
  }
  var page = 1;
  var size = 0;

  if(req.query.page) {
    page = parseInt(req.query.page);
  }
  if(req.query.size) {
    size = parseInt(req.query.size);
  }

  var limit = {};

  if (page < 0 || page === 0) {
    response = {
      responseCode: 11,
      responseMessage: "invalid page number, should start with 1",
    }
    logger.info("response: " + stringify(response));
    return res.status(400).send(response);
  }

  limit.skip = size * (page - 1);
  limit.limit = size;

  var districtQuery = {};
  if(filter.district) {
    let listDistricts = [];
    if(!Array.isArray(filter.district)) {
      response = {
        responseCode: 11,
        responseMessage: "Tham số District không hợp lệ",
      }
      logger.info("response: " + stringify(response));
      return res.status(400).send(response);
    }
    for (const d of filter.district) {
      listDistricts.push(ObjectId(d))
      console.log(listDistricts)
    }
    districtQuery = {
      "location_info.district": { "$in": listDistricts }
    }
  }

  var locationQuery = {};
  if(filter.location) {
    locationQuery = {
      "location_info._id": ObjectId(filter.location)
    }
  }

  var statusQuery = {};
  if(filter.status) {
    statusQuery = {
      "status": parseInt(filter.status)
    }
  }

  var approveQuery = {};
  if(filter.approve) {
    approveQuery = {
      "approve": parseInt(filter.approve)
    }
  }

  const finalQuery = {
    "$match":{
        "$and":[
            districtQuery,
            { "name": { "$regex": filter.name?filter.name:'', "$options": 'i' }},
            locationQuery,
            statusQuery,
            approveQuery,
            { "ip": { "$regex": filter.ip?filter.ip:'', "$options": 'i' }},
            { "location_info.detail_location": { "$regex": filter.detail_location?filter.detail_location:'', "$options": 'i' }},
        ]
    }
  }

  let total = 0;
  await Node.aggregate(
    [
      { "$lookup": {
          "from": 'locations',
          "localField": "location",
          "foreignField": "_id",
          "as": "location_info"
      }},
      { "$unwind": { path: "$location_info", preserveNullAndEmptyArrays: true } },
  
      { "$lookup": {
        "from": 'districts',
        "localField": "location_info.district",
        "foreignField": "_id",
        "as": "district"
      }},
      { "$unwind": { path: "$district", preserveNullAndEmptyArrays: true } },
  
      { "$lookup": {
        "from": 'provinces',
        "localField": "location_info.province",
        "foreignField": "_id",
        "as": "province"
      }},
      { "$unwind": { path: "$province", preserveNullAndEmptyArrays: true } },
  
      finalQuery
    ],
    function (err, result) {
      if (err) {
        logger.error("Error get list nodes\n" + stringify(err));
        return res.status(500).send({
          responseCode: 0,
          responseMessage: "Tìm kiếm không thành công, Hệ thống đang bận\n" + stringify(err.message),
          responseError: err
        });
      }
      total = result.length;
    }
  );


  await Node.aggregate(
  [
    { "$lookup": {
        "from": 'locations',
        "localField": "location",
        "foreignField": "_id",
        "as": "location_info"
    }},
    { "$unwind": { path: "$location_info", preserveNullAndEmptyArrays: true } },

    { "$lookup": {
      "from": 'districts',
      "localField": "location_info.district",
      "foreignField": "_id",
      "as": "district"
    }},
    { "$unwind": { path: "$district", preserveNullAndEmptyArrays: true } },

    { "$lookup": {
      "from": 'provinces',
      "localField": "location_info.province",
      "foreignField": "_id",
      "as": "province"
    }},
    { "$unwind": { path: "$province", preserveNullAndEmptyArrays: true } },

    finalQuery,
    { "$skip": limit.skip },
    { "$limit": limit.limit>0 ? limit.limit : 1000 }
  ],
  function (err, result) {
    if (err) {
      logger.error("Error get list nodes\n" + stringify(err));
      return res.status(500).send({
        responseCode: 0,
        responseMessage: "Tìm kiếm không thành công, Hệ thống đang bận" + stringify(err.message),
      });
    }
    response = {
      responseCode: 1,
      responseMessage: "TRẢ VỀ KẾT QUẢ TÌM KIẾM THÀNH CÔNG",
      responseData: {
        data: result,
        total: total
      },
    }
    logger.error("response: " + stringify(response));
    return res.status(200).send(response);
  }
);

};




module.exports = getUsers;
