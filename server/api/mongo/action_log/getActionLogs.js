const fs = require("fs");
const {slugify} =  require("../../../utils/common");
const ActionLog = require("../../../models/mongo/actionLog");
const log4js = require("log4js");
const base64 = require("js-base64").Base64;
const path = require('path');
const moment = require("moment");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const { stringify } = require("flatted");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const getActionLogs = async function getActionLogs(req, res) {
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
      responseMessage: "Invalid page number, should start with 1",
    };
    logger.info("response: " + stringify(response));
    return res.status(400).send(response);
  }

  limit.skip = size * (page - 1);
  limit.limit = size;

  let actionTypeQuery = {};
  if(filter.action_type) {
    actionTypeQuery = { "action_type": filter.action_type}
  }

  // let actionUserQuery = {};
  // if(filter.action_user) {
  //   actionUserQuery = { "action_user._id": ObjectId(filter.action_user)}
  // }

  let collectionStoreQuery = {};
  if(filter.collection_store) {
    collectionStoreQuery = { "collection_store": filter.collection_store}
  }

  let fronDateQuery = {};
  if(filter.fromDate) {
    fronDateQuery = { "action_time": { $gte: moment(filter.fromDate).toDate() } }
  }

  let toDateQuery = {};
  if(filter.toDate) {
    toDateQuery = { "action_time": { $lte: moment(filter.toDate).toDate() } }
  }

  if(filter.toDate && filter.fromDate && filter.toDate==filter.fromDate) {
    toDateQuery = { "action_time": { $lte: moment(filter.toDate).set({ minute: 0, second: 0 }).toDate() } }
  }

  const finalQuery = {
    "$match":{
        "$and":[
            { "request": { "$regex": filter.request?filter.request:'', "$options": 'i' }},
            { "response": { "$regex": filter.response?filter.response:'', "$options": 'i' }},
            actionTypeQuery,
            // actionUserQuery,
            { "action_user.username": { "$regex": filter.action_user?filter.action_user:'', "$options": 'i' }},
            collectionStoreQuery,
            fronDateQuery,
            toDateQuery
        ]
        }
  }

  // await ActionLog.aggregate(
  //   [
  //     { "$facet": {
  //       "data": [
  //         { "$lookup": {
  //           "from": 'users',
  //           "localField": "action_user",
  //           "foreignField": "_id",
  //           "as": "action_user"
  //           }
  //         },
  //         { "$unwind": { path: "$action_user", preserveNullAndEmptyArrays: true } },
  //         finalQuery,
  //         { "$skip": limit.skip },
  //         { "$limit": limit.limit>0 ? limit.limit : 1000 }
  //       ],
  //       "total": [
  //         finalQuery,
  //         { "$count": "total" }
  //       ]
  //     }},
  //     {
  //       "$addFields": {
  //         "total": {
  //           "$ifNull": [{ "$arrayElemAt": [ "$total.total", 0 ] }, 0]
  //         }
  //       }
  //     },
  //   ],
  //   function (err, result) {
  //     if (err) {
  //       logger.error("Error when get list Action logs\n" + stringify(err))
  //       return res.status(500).send({
  //         responseCode: 0,
  //         responseMessage: "Tìm kiếm không thành công, Hệ thống đang bận\n" + err.message
  //       });
  //     }
  //     return res.status(200).send({
  //       responseCode: 1,
  //       responseMessage: "TRẢ VỀ KẾT QUẢ TÌM KIẾM THÀNH CÔNG",
  //       responseData: result[0],
  //     });
  //   }
  // );

  let total = 0;
  await ActionLog.aggregate(
    [
      { "$lookup": {
        "from": 'users',
        "localField": "action_user",
        "foreignField": "_id",
        "as": "action_user"
        }
      },
      { "$unwind": { path: "$action_user", preserveNullAndEmptyArrays: true } },
      finalQuery
    ],
    function (err, result) {
      if (err) {
        logger.error("Error when get list Action logs\n" + stringify(err))
        return res.status(500).send({
          responseCode: 0,
          responseMessage: "Tìm kiếm không thành công, Hệ thống đang bận\n" + err.message
        });
      }
      total = result.length;
    }
  );

  await ActionLog.aggregate(
    [
      { "$lookup": {
        "from": 'users',
        "localField": "action_user",
        "foreignField": "_id",
        "as": "action_user"
        }
      },
      { "$unwind": { path: "$action_user", preserveNullAndEmptyArrays: true } },
      finalQuery,
      { "$skip": limit.skip },
      { "$limit": limit.limit>0 ? limit.limit : 1000 }
    ],
    function (err, result) {
      if (err) {
        logger.error("Error when get list Action logs\n" + stringify(err))
        return res.status(500).send({
          responseCode: 0,
          responseMessage: "Tìm kiếm không thành công, Hệ thống đang bận\n" + err.message
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
      logger.info("response: " + stringify(response));
      return res.status(200).send(response);
    }
  );

};

module.exports = getActionLogs;
