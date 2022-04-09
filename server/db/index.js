//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Application = require("./models/Application");

//associations

//one to many relationship between users and applications
User.hasMany(Application);
Application.belongsTo(User);

module.exports = {
  db,
  User,
  Application,
};
