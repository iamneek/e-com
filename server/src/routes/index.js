const router = require('express').Router();

const authRoutes = require("../modules/auth/auth.routes")
const brandRoutes = require("../modules/brand/brand.routes")
const categoryRoutes = require("../modules/category/category.routes")

router.use("/auth", authRoutes)         // /api/v1/auth
router.use("/brand", brandRoutes)       // /api/v1/brand
router.use("/category", categoryRoutes) // /api/v1/category


module.exports = router;