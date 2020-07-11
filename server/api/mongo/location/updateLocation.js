// const fs = require("fs");
// const Location = require("../../../models/mongo/location");
// const bcrypt = require("bcrypt");
// const log4js = require("log4js");
// const { slugify } = require("../../../utils/common");

// log4js.configure("./config/log4js.json");
// const logger = log4js.getLogger("updateNodeStatus");

// const updateLocation = async function updateLocation(req, res) {
//   const body = req.body;

//   if (!body.name) {
//     logger.info("Param invalid");
//     return res.status(400).send({
//       responseCode: 11,
//       responseMessage: "Tên Action không hợp lệ",
//     });
//   }

//   let existedAction = false;
//   try {
//     existedAction = await Action.findOne({ slug: slugify(body.name) });
//   } catch (error) {
//     return res.status(500).send({
//       responseCode: 0,
//       responseMessage: "Lỗi trong quá trình tạo mới Action\n" + error.message,
//     });
//   }
//   if (existedAction) {
//     return res.status(400).send({
//       responseCode: 2,
//       responseMessage: "Tên Action đã tồn tại",
//     });
//   }

//   try {
//     await Action.updateOne(
//       {
//         _id: req.params.id,
//       },
//       {
//         name: body.name,
//         slug: slugify(body.name)
//       }
//     );
//     return res.status(200).send({
//       responseCode: 1,
//       responseMessage: "UPDATE STATUS SUCCEED",
//     });
//   } catch (err) {
//     logger.error(err.message);
//     return res.status(500).send({
//       responseCode: 0,
//       responseMessage: "Cập nhật không thành công, Hệ thống đang bận\n" + err.message,
//     });
//   }
// };

// async function getProvince(provinceId) { 
//     return new Promise((resolve) => {
//       Province.findById(provinceId)
//         .exec((err, data) => {
//           if (err) {
//             return res.status(500).send({
//               responseCode: 0,
//               responseMessage: "Lỗi trong quá trình kiểm tra tỉnh/thành phố",
//             });
//           }
//           resolve(data)
//         });
//     });
//   };
  
//   async function getDistrict(districtId) { 
//     return new Promise((resolve) => {
//       District.findById(districtId)
//         .exec((err, data) => {
//           if (err) {
//             return res.status(500).send({
//               responseCode: 0,
//               responseMessage: "Lỗi trong quá trình kiểm tra quận/huyện",
//             });
//           }
//           resolve(data)
//         });
//     });
//   };
  
//   async function getSub_district(sub_districtId) { 
//     return new Promise((resolve) => {
//       Sub_district.findById(sub_districtId)
//         .exec((err, data) => {
//           if (err) {
//             return res.status(500).send({
//               responseCode: 0,
//               responseMessage: "Lỗi trong quá trình kiểm tra xã/phường",
//             });
//           }
//           resolve(data)
//         });
//     });
//   };

// module.exports = updateLocation;
