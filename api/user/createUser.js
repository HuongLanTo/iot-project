const fs = require("fs");
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const log4js = require("log4js");
const {formatPhoneNumber} = require("../../utils/common")

log4js.configure('./config/log4js.json')
const logger = log4js.getLogger("createUser");

const createUser = async function create(req, res) {
  const body = req.body;
  const salt = await bcrypt.genSalt(10);

  if (
    body.username == null ||
    body.password == null ||
    body.name == null ||
    body.phone == null ||
    body.email == null
  ) {
    logger.info('Param invalid')
    return res.status(400).send({
      responseCode: 11,
      responseMessage: "PARAM.INVALID" 
    })
  }

  const hashedPassword = await bcrypt.hash(body.password, salt);
  // const vPhone = formatPhoneNumber(body.phone, "FORMAT_MSISDN_SHORT_XXX");

  const value = new User({
    username: body.username,
    password: hashedPassword,
    role: body.role,
    name: body.name,
    phone: body.phone,
    email: body.email,
    gender: body.gender,
    birthday: body.birthday,
    created_by: body.created_by,
  });

  try {
    const saveUser = await value.save();
    return res.status(200).send({
      responseCode: 1,
      responseMessage: "SUCCEED",
      responseData: value
    });
  } catch(err) {
    logger.error(err.message)
    return res.status(500).send({
      responseCode: 0,
      responseMessage: "Tạo mới không thành công, Hệ thống đang bận",
      responseDecription: err.message
    });
  }
};

module.exports = createUser;