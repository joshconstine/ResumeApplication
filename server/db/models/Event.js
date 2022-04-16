const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Event = db.define("Event", {
  eventName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  eventDate: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  notes: {
    type: DataTypes.STRING,
  },
});

module.exports = Event;
