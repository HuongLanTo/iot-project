var router = require("express").Router();

const GetAll = require("./get_all");
const GetOne = require("./get_one");
const GetLastThree = require("./get_last_three_by_areas");
const GetByArea = require("./get_values_by_area");

router.get("/", GetAll);

router.get("/last/three", GetLastThree);

router.get("/:id", GetOne);

router.get("/:area_id/values", GetByArea);

module.exports = router;