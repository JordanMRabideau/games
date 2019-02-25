var orm = require("../config/orm")

var game = {
    selectAll: function(cb) {
        orm.selectAll("games", function(res) {
            cb(res);
        });
    },

    insertOne: function(col, val, cb) {
        orm.insertOne("games", col, val, function(res) {
            cb(res);
        });
    },

    deleteOne: function(condition, cb) {
        orm.deleteOne("games", condition, function(res) {
            cb(res);
        })
    }
}

module.exports = game;