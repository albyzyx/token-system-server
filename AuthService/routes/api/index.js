const router = require("express").Router();

router.use("/test", require("./testRouter"));

module.exports = router;
