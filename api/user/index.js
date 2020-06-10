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

router.put("/:id/basic", UpdateUserInfo);

router.put("/:id/role", UpdateUserRole);

router.put("/:id/status", UpdateUserStatus);

router.put("/:id/approve", ApproveUser);



module.exports = router;