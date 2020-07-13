const fs = require("fs");
const Location = require("../../../models/mongo/location");
const log4js = require("log4js");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("getLocation");

const getLocation = async function getLocation(req, res) {
  await Location.findById(req.params.id)
    .exec((err, data) => {
      if (err) {
        return res.status(500).send({
          responseCode: 0,
          responseMessage: "Lỗi trong quá trình get Location\n" + err.message,
        });
      }

      if(!data) {
        return res.status(400).send({
          responseCode: 2,
          responseMessage: "Id Location không tồn tài"
        });
      }
      return res.status(200).send({
        responseCode: 1,
        responseMessage: "Thành công",
        data: data,
      });
    });
};

module.exports = getLocation;
