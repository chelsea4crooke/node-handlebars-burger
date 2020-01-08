var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Peachie44!!",
    database: "burgers_db"
})
connection.connect(function(err){
    if(err) throw err;
        console.error("coonected as id: " + connection.threadId);
    });
    
module.exports = connection;