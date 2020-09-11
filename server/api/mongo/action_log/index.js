var router = require("express").Router();

const GetActionLogs = require("./getActionLogs");
const {hasPermission} = require("../../middleware")

router.get("/", GetActionLogs);

module.exports = router;
