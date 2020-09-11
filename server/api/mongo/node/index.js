var router = require("express").Router();

const ApproveNode = require("./approveNode");
const CreateNode = require("./createNode");
const GetNodes = require("./getNodes");
const UpdateNodeParameterStatus = require("./updateNodeParameterStatus");
const UpdateNodeStatus = require("./updateNodeStatus");
const {hasPermission} = require("../../middleware")

router.put("/approve/:id", ApproveNode);

router.post("/", CreateNode);

// router.get("/",(req, res, next) => {
//     hasPermission(req, res, next, "admin")
// }, GetNodes);

router.get("/", GetNodes);

router.put("/parameter/:id", UpdateNodeParameterStatus);

router.put("/status/:id", UpdateNodeStatus);

module.exports = router;
