// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console

// and set the environment variables. See http://twil.io/secure
require("dotenv").config();
const router = require("express").Router();
module.exports = router;
const accountid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountid, authToken);

router.post("/", async (req, res, next) => {
  try {
    console.log("req body", req.body);
    client.messages
      .create({
        body: `this message is to remind you about your applicaiton with ${req.body.companyName} for the position of ${req.body.positionName}`,
        from: "+16203144588",
        to: "+19202657335",
      })
      .then((message) => console.log("sid", message.sid));
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});
