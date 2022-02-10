const router = require("express").Router();

router.get("/test", (req, res) => {
  res.status(200).send({ testMessage: "Auth Service is running successfully" });
});

module.exports = router;
