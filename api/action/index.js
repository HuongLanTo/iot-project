var router = require("express").Router();

const CreateAction = require("./createAction");

router.post("/", CreateAction);

module.exports = router;