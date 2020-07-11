var router = require("express").Router();

const CreateAction = require("./createAction");
const GetActions = require("./getActions");
const GetAction = require("./getAction");
const UpdateAction = require("./updateAction");

router.post("/", CreateAction);
router.get("/", GetActions);
router.get("/:id", GetAction);
router.put("/:id", UpdateAction);

module.exports = router;