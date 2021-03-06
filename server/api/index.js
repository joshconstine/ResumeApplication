const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/applications", require("./applications"));
router.use("/events", require("./events"));
// router.use("/sms", require("./sms"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
