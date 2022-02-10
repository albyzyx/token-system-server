const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.set("port", PORT);

app.use(require("../router"));

app.use((req, res, next) => {
  logger.log(
    "the url you are trying to reach is not hosted on our server",
    "error"
  );
  const err = new Error("Not Found");
  err.status = 404;
  res.status(err.status).json({
    type: "error",
    message: "the url you are trying to reach is not hosted on our server",
  });
  next(err);
});

module.exports = app;
