// const { registerUser } = require('./auth.controller')
const { authCtrl } = require("./");
const router = require("express").Router();

const uploader = require("../../middlewares/uploader.middleware");

const uploadPath = (req, res, next) => {
  let path = "./public/user";
  req.uploadDir = path;
  next();
};
// name, email or phone,
router.post(
  "/register",
  uploadPath,
  uploader.single("image"),
  authCtrl.registerUser
);

router.get("/verify-token/:token", authCtrl.verifyToken);
router.post("/password-reset/:token", (req, res, next) => {});

router.post("/login", (req, res, next) => {
  res.json({
    data: {
      userDetail: {},
      accessToken: "",
      tokenType: "bearer",
      refreshToken: "",
    },
    msg: "Login Success",
    meta: null,
  });
});

router.post("/me", (req, res, next) => {});
router.put("/:id", (req, res, next) => {});
router.post("/logout", (req, res, next) => {});

router.post("/forget-password", (req, res, next) => {});

module.exports = router;
