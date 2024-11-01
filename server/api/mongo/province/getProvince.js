const fs = require("fs");
const Province = require("../../../models/mongo/province");
const log4js = require("log4js");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("getProvince");

const getProvince = async function getProvince(req, res) {
  await Province.findById(req.params.id)
    .exec((err, data) => {
      if (err) {
        return res.status(500).send({
          responseCode: 0,
          responseMessage: "Lỗi trong quá trình get Action\n" + err.message,
        });
      }

      if(!data) {
        return res.status(400).send({
          responseCode: 2,
          responseMessage: "Id Action không tồn tài"
        });
      }
      return res.status(200).send({
        responseCode: 1,
        responseMessage: "Thành công",
        data: data,
      });
    });
};

module.exports = getProvince;
