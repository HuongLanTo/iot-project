var router = require("express").Router();

const CreateUser = require("./createUser");
const GetUsers = require('./getUsers');
const GetUser = require('./getUser');
const UpdateUserInfo = require('./updateUserInfo');
const UpdateUserRole = require('./updateUserRole');
const UpdateUserStatus = require('./updateUserStatus');
const ApproveUser = require('./approveUser');


router.post("/", CreateUser);

router.get("/", GetUsers);

router.get("/:id", GetUser);

router.put("/basic/:id", UpdateUserInfo);

router.put("/role/:id", UpdateUserRole);

router.put("/status/:id", UpdateUserStatus);

router.put("/approve/:id", ApproveUser);

module.exports = router;