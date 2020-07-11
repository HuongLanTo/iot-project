var router = require("express").Router();

const CreateDistrict = require("./createDistrict");
const GetDistricts = require("./getDistricts");
const GetDistrict = require("./getDistrict");

router.post("/", CreateDistrict);
router.get("/", GetDistricts);
router.get("/:id", GetDistrict);

module.exports = router;