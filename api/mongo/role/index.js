var router = require("express").Router();

const CreateRole = require("./createRole");
const UpdateRole = require('./updateRole');


router.post("/", CreateRole);

router.put("/", UpdateRole);

module.exports = router;