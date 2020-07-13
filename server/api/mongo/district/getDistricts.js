const fs = require("fs");
const District = require("../../../models/mongo/district");
const log4js = require("log4js");
const base64 = require("js-base64").Base64;
const {slugify} =  require("../../../utils/common");
const mongoose = require("mongoose");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("getDistricts");

const getDistricts = async function getDistricts(req, res) {
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

  var nameQuery = {};
  if(filter.name) {
    nameQuery = { "slug": { "$regex": filter.name?slugify(filter.name):'', "$options": 'i' }}
  }
  var parantCodeQuery = {};
  if(filter.parent_code) {
    parantCodeQuery = { "parent_code": filter.parent_code}
  }
  var codeQuery = {};
  if(filter.code) {
    codeQuery = { "code": filter.code}
  }

  District.aggregate(
    [
      {
          "$match":{
              "$and":[
                    // { "slug": { "$regex": filter.name?slugify(filter.name):'', "$options": 'i' }},
                //   { "parent_code": { "$regex": filter.parent_code?filter.parent_code:'', "$options": 'i' }},
                //   { "code": { "$regex": filter.code?filter.code:'', "$options": 'i' }},
                    nameQuery,
                    parantCodeQuery,
                    codeQuery
              ]
           }
      },
      { "$skip": limit.skip },
      { "$limit": limit.limit>0 ? limit.limit : 1000 }
  ],
    function (err, result) {
      if (err) {
        return res.status(500).send({
          responseCode: 0,
          responseMessage: "Tìm kiếm không thành công, Hệ thống đang bận",
          responseError: err
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

module.exports = getDistricts;
