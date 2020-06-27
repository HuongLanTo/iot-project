var router = require("express").Router();

const userRouter = require("./user");
const provinceRouter = require("./province");
const authRouter = require("./auth");
const nodeRouter = require("./node");
const roleRouter = require("./role");

router.use("/api/user", userRouter);nodeRouter

router.use("/api/province", provinceRouter);authRouter

router.use("/api/node", nodeRouter);

router.use("/api/auth", authRouter);

router.use("/api/role", roleRouter);

module.exports = router