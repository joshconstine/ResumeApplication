const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Application = db.define("Application", {
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  positionName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  positionDescription: {
    type: DataTypes.STRING,
  },
  positionDate: {
    type: DataTypes.STRING,
  },
});

module.exports = Application;
