var router = require("express").Router();

const CreateDistrict = require("./createDistrict");

router.post("/", CreateDistrict);

module.exports = router;