const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "kevin",
  waitForConnections: true,
  connectionLimit: 5,
  queulLimit: 0,
});
module.exports = pool.promise();