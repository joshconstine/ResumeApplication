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

router.delete("/:id", async (req, res, next) => {
  try {
    console.log("in delete");
    const application = await Application.findOne({
      where: {
        id: req.params.id,
      },
    });
    application.destroy();
    res.send(application);
  } catch (err) {
    next(err);
  }
});
