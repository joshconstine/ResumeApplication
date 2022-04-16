const router = require("express").Router();
const dispatch = require("dispatch");
const { Application } = require("../db");
const { Event } = require("../db");
const { User } = require("../db");
const sendMessage = require("./sms");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    let events = await Event.findAll();
    res.json(events);
  } catch (err) {
    next(err);
  }
});
// router.get("/:id", async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;

//     const user = await User.findByToken(token);
//     const app = req.params.id;
//     console.log(app);
//     const id = user.Applications[app].id;

//     const application = await Application.findOne({ where: { id } });
//     res.send(application);
//   } catch (err) {
//     next(err);
//   }
// });

router.delete("/:id", async (req, res, next) => {
  try {
    // const token = req.headers.authorization;
    const id = req.params.id;
    // const user = await User.findByToken(token);
    // const app = req.params.id;
    // const id = user.Applications[app].id;

    let event = await Event.findOne({ where: { id } });

    // const user = await User.findByToken(token);

    // await user.removeApplication(application);

    event.destroy();
    res.send(event);
  } catch (err) {
    next(err);
  }
});
// router.patch("/:id", async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;

//     const user = await User.findByToken(token);
//     const app = req.params.id;
//     const id = user.Applications[app].id;

//     let application = await Application.findOne({ where: { id } });
//     const newapplication = req.body.changes;
//     console.log(newapplication);

//     application.update(newapplication);
//     console.log(application);

//     res.send(application);
//   } catch (err) {
//     if (err.name === "SequelizeUniqueConstraintError") {
//       res.status(401).send("User already exists");
//     } else {
//       next(err);
//     }
//   }
// });

router.post("/", async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const createdEvent = await Event.create(req.body);

    console.log("created event", createdEvent);
    console.log("headders", req.headers);

    const user = await User.findByToken(token);
    const application = user.Applications[req.headers.id];
    await application.addEvent(createdEvent);
    await res.status(201).send(createdEvent);
  } catch (error) {
    next(error);
  }
});
