var connection = require("./connection.js");
var orm = {
    all: function(tableInput , cb){
        connection.query("SELECT * FROM" + tableInput + ";" , function(err, result){
            if(err) throw err;
            cb(result)
        })
    },
    update: function(tableInput , condition , cb){
        connection.query("UPDATE" + tableInput + "SET devoured = true WHERE id=" + condition + ";" , function(err, result){
            if(err) throw err;
            cb(result);
        })
    },
    create: function(tableInput , val , cb){
        connection.query("INSERT INTO" + tableInput + "(burger_name) VALUES (' "+ val + " ');" , function(err, result){
            if(err) throw err;
            cb(result);
        })
      }
    }
module.exports = orm;
function printQuestionMark(num){
    var arr = [];
    for(var i=0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}
function objToSql(ob){
    var arr = [];
    for(var key in ob){
        arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
}
