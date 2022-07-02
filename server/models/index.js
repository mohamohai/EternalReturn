"use strict";

const path = require("path");
const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, "..", "config", "db.json"))[env];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
  {
    define: {
      charset: "utf8",
      collate: "utf8_general_ci",
    },
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database: ", err);
  });

db.User = require("./user")(sequelize, Sequelize);
db.Schedule = require("./schedule")(sequelize, Sequelize);

db.secret = "(9*)5$&!3%^0%^@@2$1!#5@2!4";
module.exports = db;
