var router = require("express").Router();

const GetAll = require("./get_all");
const GetOne = require("./get_one");
const GetLastOne = require("./get_last_one_by_node");
const GetLastOnes = require("./get_last_one_by_nodes");
const GetByNode = require("./get_values_by_node");

router.get("/", GetAll);

router.get("/last", GetLastOnes);

router.get("/:id", GetOne);

router.get("/:node_id/last", GetLastOne);

router.get("/:node_id/values", GetByNode);

module.exports = router;
