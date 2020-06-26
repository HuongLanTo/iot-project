var router = require("express").Router();

const NodeHour = require("./node_env_param_hour")
const NodeDay = require("./node_env_param_day")
const AreaHour = require("./area_env_param_hour")
const AreaDay = require("./area_env_param_day")

router.use("/api/v1/nodes/hours", NodeHour);

router.use("/api/v1/nodes/days", NodeDay);

router.use("/api/v1/areas/hours", AreaHour);

router.use("/api/v1/areas/days", AreaDay);

module.exports = router;