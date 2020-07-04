var router = require("express").Router();

const GetMe = require("./getMe");
const GetSession = require("./getSession");
const PostLogin = require("./postLogin");

router.get("/get-me", GetMe);

router.get("/session", GetSession);

router.post("/login", PostLogin);

module.exports = router;
