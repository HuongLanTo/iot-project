const fs = require("fs");
const Location = require("../../../models/mongo/location");
const log4js = require("log4js");
const { formatPhoneNumber } = require("../../../utils/common");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("createPrivince");

const createLocation = async function createLocation(req, res) {
  const body = req.body;

  if (
    body.province == null ||
    body.district == null ||
    body.sub_district == null ||
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

  var value = new Location({
    province: body.province,
    district: body.district,
    sub_district: body.sub_district,
    detail_location: body.detail_location,
    latitude: body.latitude,
    longitude: body.longitude,
  });

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

module.exports = createLocation;
