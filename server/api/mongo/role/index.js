var router = require("express").Router();

const CreateRole = require("./createRole");
const UpdateRole = require("./updateRole");
const GetRoles = require("./getRoles");

router.post("/", CreateRole);
router.put("/:id", UpdateRole);
router.get("/", GetRoles);

module.exports = router;
