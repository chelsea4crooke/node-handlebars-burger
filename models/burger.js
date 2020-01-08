var orm = require("../config/orm.js");
var burger = {
    selectAll: function(cb){
        orm.selectAll("/api/burgers", function(res){
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb){
        orm.insertOne("/api/burger", cols, vals, function(res){
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb){
        orm.updateOne("/api/burgers", objColVals, condition, function(res){
            cb(res);
        });
    },

    deleteOne: function(condition, cb){
        orm.deleteOne("/api/burgers", condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;
  
