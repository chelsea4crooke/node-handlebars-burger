const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "ixqxr3ajmyapuwmi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "wf6o65bow2l2b1ub	",
    password: "g0euw4tueap42pae",
    database: "heroku_qua8r8v0v2ap0um8"
  });
}

connection.connect();
module.exports = connection;