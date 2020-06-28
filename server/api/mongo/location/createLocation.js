const fs = require("fs");
const Location = require("../../../models/mongo/location");
const Province = require("../../../models/mongo/province");
const District = require("../../../models/mongo/district");
const Sub_district = require("../../../models/mongo/sub-district");

const log4js = require("log4js");
const { formatPhoneNumber } = require("../../../utils/common");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createPrivince");

const createLocation = async function createLocation(req, res) {
  const body = req.body;

  if (
    body.province == null ||
    body.district == null ||
    body.detail_location == null ||
    body.latitude == null ||
    body.longitude == null
  ) {
    logger.info("Param invalid");
    return res.status(400).send({
      responseCode: 11,
      responseMessage: "PARAM.INVALID",
    });
  }

  var _value = {
    detail_location: body.detail_location,
    latitude: body.latitude,
    longitude: body.longitude,
  };
  var _province;
  var _district;
  var _sub_district;

  await getProvince(body.province).then(p => _province = p);
  if (!_province || !_province._id) {
    return res.status(400).send({
      responseCode: 2,
      responseMessage: "Không xác thực được tỉnh/thành phố",
    });
  }
  _value.province = body.province;

  await getDistrict(body.district).then(d => _district = d);
  if (!_district || !_district._id) {
    return res.status(400).send({
      responseCode: 2,
      responseMessage: "Không xác thực được quận/huyện",
    });
  }
  _value.district = body.district;

  if(body.sub_district){
    await getSub_district(body.location).then(s => _sub_district = s);
    if (!_sub_district || !_sub_district._id) {
      return res.status(400).send({
        responseCode: 2,
        responseMessage: "Không xác thực được xã/phường",
      });
    }
    _value.sub_district = body.sub_district;
  }

  var value = new Location(_value);

  try {
    const saveLocation = await value.save();
    return res.status(200).send({
      responseCode: 1,
      responseMessage: "SUCCEED",
      responseData: value,
    });
  } catch (err) {
    logger.error(err.message);
    return res.status(500).send({
      responseCode: 0,
      responseMessage: "Tạo mới không thành công, Hệ thống đang bận",
      responseDecription: err.message,
    });
  }
};

async function getProvince(provinceId) { 
  return new Promise((resolve) => {
    Province.findById(provinceId)
      .exec((err, data) => {
        if (err) {
          return res.status(500).send({
            responseCode: 0,
            responseMessage: "Lỗi trong quá trình kiểm tra tỉnh/thành phố",
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
