var router = require("express").Router();

const CreateLocation = require("./createLocation");
const GetLocations = require("./getLocations");

router.post("/", CreateLocation);
router.get("/", GetLocations);


module.exports = router;
