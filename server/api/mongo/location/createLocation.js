const fs = require("fs");
const path = require('path');
const Location = require("../../../models/mongo/location");
const Province = require("../../../models/mongo/province");
const District = require("../../../models/mongo/district");
const ActionLog = require("../../../models/mongo/actionLog");
const Sub_district = require("../../../models/mongo/sub-district");
const {parse, stringify} = require('flatted');
const moment = require('moment');

const log4js = require("log4js");
const { slugify } = require("../../../utils/common");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const createLocation = async function createLocation(req, res) {
  const body = req.body;
  logger.info("request.body: " + stringify(body))
  const action_time = moment();
  let response;
  if (
    !body.province ||
    !body.district ||
    !body.detail_location ||
    !body.latitude ||
    !body.longitude
  ) {
    response = {
      responseCode: 11,
      responseMessage: "PARAM.INVALID",
    }
    logger.info("response: " + stringify(response));
    return res.status(400).send(response);
  }

  var actionLog = new ActionLog({
    action_user : req.user_id,
    action_time : action_time.format(),
    action_type : req.method,
    collection_store : "locations",
    request : stringify(req.body)
  })

  var _value = {
    detail_location: body.detail_location,
    slug_detail_location: slugify(body.detail_location),
    latitude: body.latitude,
    longitude: body.longitude,
  };
  var _province;
  var _district;
  var _sub_district;

  await getProvince(body.province).then(p => _province = p);
  if (!_province || !_province._id) {
    response = {
      responseCode: 2,
      responseMessage: "Không xác thực được tỉnh/thành phố",
    }
    logger.info("response: " + stringify(response));
    return res.status(400).send(response);
  }
  _value.province = body.province;

  await getDistrict(body.district).then(d => _district = d);
  if (!_district || !_district._id) {
    response = {
      responseCode: 2,
      responseMessage: "Không xác thực được quận/huyện",
    }
    logger.info("response: " + stringify(response));
    return res.status(400).send(response);
  }
  _value.district = body.district;

  if(body.sub_district){
    await getSub_district(body.sub_district).then(s => _sub_district = s);
    if (!_sub_district || !_sub_district._id) {
      response = {
        responseCode: 2,
        responseMessage: "Không xác thực được xã/phường",
      }
      logger.info("response: " + stringify(response));
      return res.status(400).send(response);
    }
    _value.sub_district = body.sub_district;
  }

  var value = new Location(_value);

    await value.save()
    .then(data => {
      response = {
        responseCode: 1,
        responseMessage: "SUCCEED",
        responseData: value,
      }
      actionLog.current_data = data
      actionLog.response = stringify(response);
      logger.info("response: " + stringify(response));
      return res.status(200).send(response);
    })
    .catch(err => {
      response = {
        responseCode: 0,
        responseMessage: "Tạo mới user không thành công, Hệ thống đang bận " + err.message,
      }
      actionLog.response = stringify(response);
      logger.error("Error create location\n" + stringify(err))
      return res.status(500).send(response);
    })
    .finally(() => {
      actionLog.execution_time = moment().valueOf() - action_time.valueOf();
      actionLog.save();
    });
};

async function getProvince(provinceId) { 
  return new Promise((resolve) => {
    Province.findById(provinceId)
      .exec((err, data) => {
        if (err) {
          logger.error("Error verify province\n" + stringify(err));
          return res.status(500).send({
            responseCode: 0,
            responseMessage: "Lỗi trong quá trình kiểm tra tỉnh/thành phố" + err.message
          });
        }
        resolve(data)
      });
  });
};

async function getDistrict(districtId) { 
  return new Promise((resolve) => {
    District.findById(districtId)
      .exec((err, data) => {
        if (err) {
          logger.error("Error verify district\n" + stringify(err));
          return res.status(500).send({
            responseCode: 0,
            responseMessage: "Lỗi trong quá trình kiểm tra quận/huyện",
          });
        }
        resolve(data)
      });
  });
};

async function getSub_district(sub_districtId) { 
  return new Promise((resolve) => {
    Sub_district.findById(sub_districtId)
      .exec((err, data) => {
        if (err) {
          logger.error("Error verify sub district\n" + stringify(err));
          return res.status(500).send({
            responseCode: 0,
            responseMessage: "Lỗi trong quá trình kiểm tra xã/phường",
          });
        }
        resolve(data)
      });
  });
};

module.exports = createLocation;
