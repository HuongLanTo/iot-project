var router = require("express").Router();

const GetMe = require("./getMe");
const GetSession = require("./getSession");
const PostLogin = require("./postLogin");

router.get("/", GetMe);

router.get("/session", GetSession);

router.post("/:id", PostLogin);

module.exports = router;
