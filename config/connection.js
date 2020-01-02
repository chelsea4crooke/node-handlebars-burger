var mysql = require("mysql");

var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: "localhost",
        user: "wf6o65bow2l2b1ub",
        password: "g0euw4tueap42pae",
        database: "qua8r8v0v2ap0um8"
    });
};
connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);
});

module.exports = connection;