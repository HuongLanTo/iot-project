var router = require("express").Router();

const CreateProvice = require("./createProvince");


router.post("/", CreateProvice);



module.exports = router;