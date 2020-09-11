const fs = require("fs");
const {slugify} =  require("../../../utils/common");
const Action = require("../../../models/mongo/action");
const log4js = require("log4js");
const base64 = require("js-base64").Base64;
const mongoose = require("mongoose");
const path = require('path');
const { stringify } = require("flatted");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const getLocations = async function getLocations(req, res) {
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
    return res.status(400).send();
  }

  limit.skip = size * (page - 1);
  limit.limit = size;

  const finalQuery = { "$match":{
      "slug": { "$regex": filter.name?slugify(filter.name):'', "$options": 'i' },
    }
  }
  Action.aggregate(
    [
      { "$facet": {
        "data": [
          finalQuery,
          {
              "$project":{"name":1}
          },
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
        logger.error("Error get list action\n" + stringify(err))
        return res.status(500).send({
          responseCode: 0,
          responseMessage: "Tìm kiếm không thành công, Hệ thống đang bận\n" + err.message
        });
      }
      response = {
        responseCode: 1,
        responseMessage: "TRẢ VỀ KẾT QUẢ TÌM KIẾM THÀNH CÔNG",
        responseData: result[0],
      }
      logger.error("response: " + stringify(response));
      return res.status(200).send(response);
    }
  );

};

module.exports = getLocations;
