const router = require("express").Router();

router
  .route("/")
  .get((req, res, next) => {
    res.json({
      data: [],
      msg: "I am list all brands",
      meta: {},
    });
  })
  .post((req, res, next) => {});

router
  .route("/:id")
  .put((req, res, next) => {})
  .delete((req, res, next) => {})
  .get((req, res, next) => {});

module.exports = router;
