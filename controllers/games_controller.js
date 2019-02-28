var express = require("express");
var game = require("../models/game.js")
var router = express.Router();

router.get("/", function(req, res) {
    game.selectAll(function(data) {
        var dataObj = {
            games: data
        };
        console.log(dataObj)
        res.render("index", dataObj)
    });
});

router.put("/api/games/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    game.updateOne({
        played: req.body.played
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

router.post("/api/games", function(req, res) {
    game.insertOne("game_name", req.body.name, function(result) {
        res.json({ id: result.insertId })
    })
})

router.delete("api/games/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    game.deleteOne(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
})

module.exports = router