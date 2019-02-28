var connection = require("./connection.js");

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

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

    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });    
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