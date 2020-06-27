var router = require("express").Router();

const ApproveNode = require("./approveNode");
const CreateNode = require('./createNode');
const GetNodes = require('./getNodes');
const UpdateNodeParameterStatus = require('./updateNodeParameterStatus');
const UpdateNodeStatus = require('./updateNodeStatus');


router.put("/approve/:id", ApproveNode);

router.post("/", CreateNode);

router.get("/", GetNodes);

router.put("/parameter/:id", UpdateNodeParameterStatus);

router.put("/status/:id", UpdateNodeStatus);



module.exports = router;