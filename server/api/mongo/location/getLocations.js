const fs = require("fs");
const User = require("../../../models/mongo/user");
const Node = require("../../../models/mongo/node");
const Location = require("../../../models/mongo/location");
const bcrypt = require("bcrypt");
const path = require('path');
const log4js = require("log4js");
const base64 = require("js-base64").Base64;
const { stringify } = require("flatted");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const getLocations = async function getLocations(req, res) {
  let filter ={};
  let response;
  if(req.query.filter) {
    filter = JSON.parse(base64.decode(req.query.filter));
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

  // Location.aggregate(
  //   [
  //       { "$lookup": {
  //               "from": 'provinces',
  //               "localField": "province",
  //               "foreignField": "_id",
  //               "as": "province"
  //           }
  //       },
  //       { "$lookup": {
  //               "from": 'districts',
  //               "localField": "district",
  //               "foreignField": "_id",
  //               "as": "district"
  //           }
  //       },
  //       { "$lookup": {
  //               "from": 'sub_districts',
  //               "localField": "sub_district",
  //               "foreignField": "_id",
  //               "as": "sub_district"
  //           }
  //       },
  //     { "$unwind": { path: "$province", preserveNullAndEmptyArrays: true } },
  //     { "$unwind": { path: "$district", preserveNullAndEmptyArrays: true } },
  //     { "$unwind": { path: "$sub_district", preserveNullAndEmptyArrays: true } },
  //     { 
  //         "$match":{
  //               "detail_location": { "$regex": filter.detail_location?filter.detail_location:'', "$options": 'i' },
  //          }
  //     },
  //     { "$skip": limit.skip },
  //     { "$limit": limit.limit>0 ? limit.limit : 1000 }
  // ],
  //   function (err, result) {
  //     if (err) {
  //       return res.status(500).send({
  //         responseCode: 0,
  //         responseMessage: "Tìm kiếm không thành công, Hệ thống đang bận",
  //         responseErr: err.message
  //       });
  //     }
  //     return res.status(200).send({
  //       responseCode: 1,
  //       responseMessage: "TRẢ VỀ KẾT QUẢ TÌM KIẾM THÀNH CÔNG",
  //       responseData: result,
  //     });
  //   }
  // );

  let provinceQuery = {};
  if(filter.province) {
    provinceQuery = {
      "province": ObjectId(filter.province)
    }
  };

  let districtQuery = {};
  if(filter.district) {
    districtQuery = {
      "district": ObjectId(filter.district)
    }
  };

  let subDistrictQuery = {};
  if(filter.sub_district) {
    subDistrictQuery = {
      "sub_district": ObjectId(filter.sub_district)
    }
  };

  let finalQuery = { 
    "$match":{
      "$and":[
        provinceQuery,
        districtQuery,
        subDistrictQuery,
        { "detail_location": { "$regex": filter.detail_location?filter.detail_location:'', "$options": 'i' }},
      ]
  }
  };

  Location.aggregate(
    [
      { "$facet": {
        "data": [
          { "$lookup": {
                  "from": 'provinces',
                  "localField": "province",
                  "foreignField": "_id",
                  "as": "province"
              }
          },
          { "$unwind": { path: "$province", preserveNullAndEmptyArrays: true } },

          { "$lookup": {
                  "from": 'districts',
                  "localField": "district",
                  "foreignField": "_id",
                  "as": "district"
              }
          },
          { "$unwind": { path: "$district", preserveNullAndEmptyArrays: true } },

          { "$lookup": {
                  "from": 'subdistricts',
                  "localField": "sub_district",
                  "foreignField": "_id",
                  "as": "sub_district"
              }
          },
          { "$unwind": { path: "$sub_district", preserveNullAndEmptyArrays: true } },

          finalQuery,
          { "$skip": limit.skip },
          { "$limit": limit.limit>0 ? limit.limit : 1000 },
        ],
        "total": [
          finalQuery,
          { "$count": "total" }
        ]
      }},
      {
        "$addFields": {
          "total": {
            "$ifNull": [{ "$arrayElemAt": [ "$total.total", 0 ] }, 0]
          }
        }
      },
    ],
    function (err, result) {
      if (err) {
        logger.error("Error get list locations\n" + stringify(err));
        return res.status(500).send({
          responseCode: 0,
          responseMessage: "Tìm kiếm không thành công, Hệ thống đang bận",
          responseErr: err.message
        });
        
      }
      response = {
        responseCode: 1,
        responseMessage: "get list locations success",
        responseData: result[0],
      }
      logger.error("response: " + stringify(response));
      return res.status(200).send(response);
    }
  );


};

module.exports = getLocations;
