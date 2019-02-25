var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var query = "SELECT * FROM " + table + ";";
        connection.query(query, function(err, result) {
            if (err) throw err

            cb(result);
        });
    },

    insertOne: function(table, col, val, cb) {
        var query = "INSERT INTO " + table;
        query += "(" + col + ") ";
        query += "VALUES (" + val +")";
        
        connection.query(query, function(err, result) {
            if (err) throw err;

            cb(result);
        })
    },

    deleteOne: function(table, condition, cb) {
        var query = "DELETE FROM " + table;
        query += " WHERE ";
        query += condition;

        connection.query(query, function(err, result) {
            if (err) throw err;

            cb(result);
        })
    }
};

module.exports = orm;