var router = require("express").Router();

const GetAll = require("./get_all");
const GetOne = require("./get_one");
const GetLastAll = require("./get_last_all_by_nodes");
const GetLastThree = require("./get_last_three_by_nodes");
const GetByNode = require("./get_values_by_node");

router.get("/", GetAll);

router.get("/last/all", GetLastAll);

router.get("/last/three", GetLastThree);

router.get("/:id", GetOne);

router.get("/:node_id/values", GetByNode);

module.exports = router;
