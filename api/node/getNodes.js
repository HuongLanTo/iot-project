const fs = require("fs");
const User = require("../../models/user");
const Node = require("../../models/node");
const Location = require("../../models/location");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const base64 = require("js-base64").Base64;

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createUser");

const getUsers = async function getUsers(req, res) {
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

  // let totalDocuments = 0;

  // try {
  //   totalDocuments = await User.countDocuments(filter);
  // } catch (err) {
  //   logger.error(err.message);
  //   return res.status(500).send({
  //     responseCode: 12,
  //     responseMessage: err.message,
  //   });
  // }

  // User.find(filter, {}, limit)
  //   // .populate("role")
  //   .exec((err, data) => {
  //     if (err) {
  //       return res.status(500).send({
  //         responseCode: 0,
  //         responseMessage: err.message,
  //       });
  //     }
  //     return res.status(200).send({
  //       responseCode: 1,
  //       responseMessage: "Thành công",
  //       data: data,
  //       totalDocuments: totalDocuments,
  //     });
  //   });

  var name = "";
  if (filter.name != null){
    name = filter.name
  }
  
  Node.createIndex({ name: "text" });

  Node.aggregate(
    [
      { $match: { $text: { $search: name } } },
      {
        $project: {
          _id: 1,
          created_by: 1,
          status: 1,
          approve: 1,
          reason: 1,
          temperature_status: 1,
          humidity_status: 1,
          dust_status: 1,
          co_status: 1,
          pressure_status: 1,
          nh3_status: 1,
          co2_status: 1,
          smoke_status: 1,
          location: 1,
          ip: 1,
          score: { $meta: "textScore" },
        },
      },
      { $match: { score: { $gt: 0.5 } } },
      {
        $lookup: {
          from: Location.collection.name,
          localField: "location",
          foreignField: "_id",
          as: "location",
        },
      },
      { $match: { "location.district": body.district } },
    ],
    function (err, result) {
      if(err) {
        return res.status(500).send({
          responseCode: 0,
          responseMessage: "Tìm kiếm không thành công, Hệ thống đang bận",
        })
      }
      return res.status(200).send({
        responseCode: 1,
        responseMessage: "TRẢ VỀ KẾT QUẢ TÌM KIẾM THÀNH CÔNG",
        responseData: result,
      })
    }
  );
};

module.exports = getUsers;
