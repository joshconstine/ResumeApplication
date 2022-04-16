const router = require("express").Router();
const dispatch = require("dispatch");
const { Application } = require("../db");
const { User, Event } = require("../db");
const sendMessage = require("./sms");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const user = await User.findByToken(token);
    const app = req.params.id;

    let applications = user.Applications;
    res.json(applications);
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const user = await User.findByToken(token);
    const app = req.params.id;
    console.log(app);
    const id = user.Applications[app].id;

    const application = await Application.findOne({
      where: { id },
      include: [{ model: Event }],
    });
    res.send(application);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const user = await User.findByToken(token);
    const app = req.params.id;
    const id = user.Applications[app].id;

    let application = await Application.findOne({
      where: { id },
    });

    // const user = await User.findByToken(token);

    // await user.removeApplication(application);

    application.destroy();
    res.send(application);
  } catch (err) {
    next(err);
  }
});
router.patch("/:id", async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const user = await User.findByToken(token);
    const app = req.params.id;
    const id = user.Applications[app].id;

    let application = await Application.findOne({ where: { id } });
    const newapplication = req.body.changes;
    console.log(newapplication);

    application.update(newapplication);
    console.log(application);

    res.send(application);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.post("/", async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const createdApplication = await Application.create(req.body);

    console.log("created application", createdApplication);

    const user = await User.findByToken(token);

    await user.addApplication(createdApplication);

    await res.status(201).send(createdApplication);
  } catch (error) {
    next(error);
  }
});
