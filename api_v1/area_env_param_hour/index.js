var router = require("express").Router();

const GetAll = require("./get_all");
const GetOne = require("./get_one");
const GetLastOne = require("./get_last_one_by_area");
const GetLastOnes = require("./get_last_one_by_areas");
const GetByArea = require("./get_values_by_area");

router.get("/", GetAll);

router.get("/last", GetLastOnes);

router.get("/:id", GetOne);

router.get("/:area_id/last", GetLastOne);

router.get("/:area_id/values", GetByArea);

module.exports = router;