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
const logger = log4js.getLogger("getLocations");

const getLocations = async function getLocations(req, res) {
  var filter ={};
  if(req.query.filter) {
    var filter = JSON.parse(base64.decode(req.query.filter));
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
    return res.status(400).send({
      responseCode: 11,
      responseMessage: "invalid page number, should start with 1",
    });
  }

  limit.skip = size * (page - 1);
  limit.limit = size;

  Location.aggregate(
    [
        { "$lookup": {
                "from": 'provinces',
                "localField": "province",
                "foreignField": "_id",
                "as": "province"
            }
        },
        { "$lookup": {
                "from": 'districts',
                "localField": "district",
                "foreignField": "_id",
                "as": "district"
            }
        },
        { "$lookup": {
                "from": 'sub_districts',
                "localField": "sub_district",
                "foreignField": "_id",
                "as": "sub_district"
            }
        },
      { "$unwind": { path: "$province", preserveNullAndEmptyArrays: true } },
      { "$unwind": { path: "$district", preserveNullAndEmptyArrays: true } },
      { "$unwind": { path: "$sub_district", preserveNullAndEmptyArrays: true } },
      { 
          "$match":{
                "detail_location": { "$regex": filter.detail_location?filter.detail_location:'', "$options": 'i' },
           }
      },
  ],
    function (err, result) {
      if (err) {
        return res.status(500).send({
          responseCode: 0,
          responseMessage: "Tìm kiếm không thành công, Hệ thống đang bận",
          responseErr: err.message
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

module.exports = getLocations;
