var router = require("express").Router();

const GetCurrentConnection = require("./getCurrentConnection");

router.get("/", GetCurrentConnection);

module.exports = router;