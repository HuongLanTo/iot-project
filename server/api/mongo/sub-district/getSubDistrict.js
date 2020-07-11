const fs = require("fs");
const SubDistrict = require("../../../models/mongo/sub-district");
const log4js = require("log4js");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("getSubDistrict");

const getSubDistrict = async function getSubDistrict(req, res) {
  await SubDistrict.findById(req.params.id)
    .exec((err, data) => {
      if (err) {
        return res.status(500).send({
          responseCode: 0,
          responseMessage: "Lỗi trong quá trình get Sub District\n" + err.message,
        });
      }

      if(!data) {
        return res.status(400).send({
          responseCode: 2,
          responseMessage: "Id Sub District không tồn tài"
        });
      }
      return res.status(200).send({
        responseCode: 1,
        responseMessage: "Thành công",
        data: data,
      });
    });
};

module.exports = getSubDistrict;
