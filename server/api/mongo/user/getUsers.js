const fs = require("fs");
const User = require("../../../models/mongo/user");
const Role = require("../../../models/mongo/role");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const path = require('path');
const { stringify } = require("flatted");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const base64 = require("js-base64").Base64;+

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const getUsers = async function getUsers(req, res) {
  let filter ={};
  if(req.query.filter) {
    filter = JSON.parse(base64.decode(req.query.filter));
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
  let response;

  if (page < 0 || page === 0) {
    response = {
      responseCode: 11,
      responseMessage: "invalid page number, should start with 1",
    };
    logger.info("response: " + stringify(response));
    return res.status(400).send(response);
  }

  limit.skip = size * (page - 1);
  limit.limit = size;


  let roleQuery = {};
  if(filter.role) {
    roleQuery = {
      "role._id": ObjectId(filter.role)
    }
  };

  let statusQuery = {};
  if(filter.status) {
    statusQuery = {
      "status": parseInt(filter.status)
    }
  };

  let approveQuery = {};
  if(filter.approve) {
    approveQuery = {
      "approve": parseInt(filter.approve)
    }
  };

  const finalQuery = {
    "$match":{
        "$and":[
            { "name": { "$regex": filter.name?filter.name:'', "$options": 'i' }},
            { "username": { "$regex": filter.username?filter.username:'', "$options": 'i' }},
            roleQuery,
            statusQuery,
            approveQuery
        ]
    }
  }

  let total = 0;

  await User.aggregate(
    [
      { "$lookup": {
              "from": 'roles',
              "localField": "role",
              "foreignField": "_id",
              "as": "role"
          }
      },
      { "$unwind": { path: "$role", preserveNullAndEmptyArrays: true } },

      { "$lookup": {
              "from": 'actions',
              "localField": "role.action_permission",
              "foreignField": "_id",
              "as": "role.action_permission"
          }
      },
      // { "$unwind": { path: "$action_permission", preserveNullAndEmptyArrays: true } },

      { "$lookup": {
              "from": 'districts',
              "localField": "role.area_permission",
              "foreignField": "_id",
              "as": "role.area_permission"
          }
      },
      // { "$unwind": { path: "$area_permission", preserveNullAndEmptyArrays: true } },
      finalQuery
    ],
    function (err, result) {
      if (err) {
        return res.status(500).send({
          responseCode: 0,
          responseMessage: "Tìm kiếm không thành công, Hệ thống đang bận",
          responseErr: err.message
        });
      }
      total = result.length
    }
  );

  await User.aggregate(
    [
      { "$lookup": {
              "from": 'roles',
              "localField": "role",
              "foreignField": "_id",
              "as": "role"
          }
      },
      { "$unwind": { path: "$role", preserveNullAndEmptyArrays: true } },

      { "$lookup": {
              "from": 'actions',
              "localField": "role.action_permission",
              "foreignField": "_id",
              "as": "role.action_permission"
          }
      },
      // { "$unwind": { path: "$action_permission", preserveNullAndEmptyArrays: true } },

      { "$lookup": {
              "from": 'districts',
              "localField": "role.area_permission",
              "foreignField": "_id",
              "as": "role.area_permission"
          }
      },
      // { "$unwind": { path: "$area_permission", preserveNullAndEmptyArrays: true } },
      finalQuery,
      { "$skip": limit.skip },
      { "$limit": limit.limit>0 ? limit.limit : 1000 },
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
        responseData: {
          data: result,
          total: total
        },
      });
    }
  );


};

module.exports = getUsers;
