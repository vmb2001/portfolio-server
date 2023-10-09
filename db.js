const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password123?",
  database: "tododb",
});

module.exports = db;
