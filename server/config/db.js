const mysql = require("mysql");

const db = mysql.createPool({
  host: "database-1.cybw4rlcte8o.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "12451245",
  port: "3306",
  database: "Allegro",
});

module.exports = db;
