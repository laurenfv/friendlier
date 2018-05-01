// Set up MySQL connection.
var mysql = require("mysql");
require('dotenv').config();

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: process.env.DB_User,
  password: process.env.DB_Password,
  database: "heroku_795fa8d6925eaa0"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
