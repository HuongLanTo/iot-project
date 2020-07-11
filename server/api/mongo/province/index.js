var router = require("express").Router();

const CreateProvice = require("./createProvince");
const GetProvinces = require("./getProvinces");
const GetProvince = require("./getProvince");

router.post("/", CreateProvice);
router.get("/", GetProvinces);
router.get("/:id", GetProvince);

module.exports = router;
