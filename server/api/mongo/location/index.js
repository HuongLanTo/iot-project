var router = require("express").Router();

const CreateLocation = require("./createLocation");
const GetLocations = require("./getLocations");
const GetLocation = require("./getLocation");
// const UpdateLocation = require("./updateLocation");

router.post("/", CreateLocation);
router.get("/", GetLocations);
router.get("/:id", GetLocation);
// router.put("/:id", UpdateLocation);


module.exports = router;
