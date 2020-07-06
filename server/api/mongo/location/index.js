var router = require("express").Router();

const CreateLocation = require("./createLocation");

router.post("/", CreateLocation);


module.exports = router;
