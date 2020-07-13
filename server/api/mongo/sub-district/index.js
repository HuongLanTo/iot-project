var router = require("express").Router();

const CreateSubDistrict = require("./createSubDistrict");
const GetSubDistricts = require("./getSubDistricts");
const GetSubDistrict = require("./getSubDistrict");

router.post("/", CreateSubDistrict);
router.get("/", GetSubDistricts);
router.get("/:id", GetSubDistrict);

module.exports = router;