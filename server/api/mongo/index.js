var router = require("express").Router();

const userRouter = require("./user");
const provinceRouter = require("./province");
const authRouter = require("./auth");
const nodeRouter = require("./node");
const roleRouter = require("./role");
const actionRouter = require("./action");
const districtRouter = require("./district");
const locationRouter = require("./location");




router.use("/api/user", userRouter);
router.use("/api/province", provinceRouter);
router.use("/api/node", nodeRouter);
router.use("/api/auth", authRouter);
router.use("/api/role", roleRouter);
router.use("/api/action", actionRouter);
router.use("/api/district", districtRouter);
router.use("/api/location", locationRouter);


module.exports = router;
