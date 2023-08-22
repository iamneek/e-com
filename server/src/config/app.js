const express = require("express");
const router = require("../routes");
const cookieParser = require("cookie-parser");
const mongoInit = require("./mongo.config");

const app = express();

mongoInit();

app.use(cookieParser());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/api/v1", router);

app.use((req, res, next) => {
  next({ status: 404, msg: "Not found" });
});

app.use((error, req, res, next) => {
  console.log(error);
  let status = error.status || 500;
  let msg = error.msg || "Internal server error";

  res.status(status).json({
    data: null,
    msg: msg,
    meta: null,
  });
});

module.exports = app;
