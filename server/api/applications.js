const router = require("express").Router();
const { Application } = require("../db");
const { User } = require("../db");
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
router.post("/", async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const createdApplication = await Application.create(req.body);

    const user = await User.findByToken(token);

    await user.addApplication(createdApplication);

    await res.status(201).send(createdApplication);
  } catch (error) {
    next(error);
  }
});
