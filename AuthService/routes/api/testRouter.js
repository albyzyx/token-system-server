const router = require("express").Router();

router.get("/server", (req, res) => {
  res.status(200).send({ testMessage: "Auth Service is running successfully" });
});

module.exports = router;
