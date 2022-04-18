const router = require("express").Router();
const { User } = require("../db");
module.exports = router;

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization
      ? req.headers.authorization
      : req.body.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.patch("/goal", requireToken, async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const goal = req.headers.goal;

    user.update({ goal });
    console.log(user);
    res.send(user);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});

router.patch("/me", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    user.update(req.body);
    res.send(user);
  } catch (ex) {
    next(ex);
  }
});
