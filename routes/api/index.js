const router = require("express").Router();
const modelRoutes = require("./models");

router.use("/models", modelRoutes);

module.exports = router;