const router = require("express").Router();
const {
  models: { Application },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const applications = await Application.findAll({});
    res.json(applications);
  } catch (err) {
    next(err);
  }
});
