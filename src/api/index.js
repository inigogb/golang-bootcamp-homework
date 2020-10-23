const router = require("express").Router();
const weather = require("./weather");
const hello = require("./hello");

router.use("/", hello);
router.use("/check-weather", weather);

module.exports = router;