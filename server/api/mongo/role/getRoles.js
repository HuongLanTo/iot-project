const fs = require("fs");
const Role = require("../../../models/mongo/role");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const base64 = require("js-base64").Base64;
const path = require('path');
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const {slugify} =  require("../../../utils/common");
const { stringify } = require("flatted");



log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const getRoles = async function getRoles(req, res) {
    var filter ={};
    if(req.query.filter) {
      var filter = JSON.parse(base64.decode(req.query.filter));
      logger.info("request filter: " + stringify(filter))
    }
    var page = 1;
    var size = 0;
    let response;
  
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
      };
      logger.info("response: " + stringify(response))
      return res.status(400).send(response);
    }
  
    limit.skip = size * (page - 1);
    limit.limit = size;
    
    const finalQuery = {
      "$match":{
          "$and":[
              { "slug": { "$regex": filter.name?slugify(filter.name):'', "$options": 'i' }},
          ]
      }
    };
    Role.aggregate(
    [
      { "$facet": {
        "data": [
          { "$lookup": {
            "from": 'districts',
            "localField": "area_permission",
            "foreignField": "_id",
            "as": "area_permission"
          }},
          // { "$unwind": { path: "$district", preserveNullAndEmptyArrays: true } },

          { "$lookup": {
            "from": 'actions',
            "localField": "action_permission",
            "foreignField": "_id",
            "as": "action_permission"
          }},
          // { "$unwind": { path: "$action_permission", preserveNullAndEmptyArrays: true } },
            
          finalQuery,
          { "$skip": limit.skip },
          { "$limit": limit.limit>0 ? limit.limit : 1000 }
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
        logger.error("error get list role\n" + stringify(err))
        return res.status(500).send({
          responseCode: 0,
          responseMessage: "Tìm kiếm không thành công, Hệ thống đang bận",
          responseError: err
        });
      }
      return res.status(200).send({
        responseCode: 1,
        responseMessage: "TRẢ VỀ KẾT QUẢ TÌM KIẾM THÀNH CÔNG",
        responseData: result[0],
      });
    }
  );
  
  };


module.exports = getRoles;
