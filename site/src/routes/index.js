var express = require("express");
var router = express.Router();

var indexController = require("../controllers/indexController");

router.post("/criarParty", function (req, res) {
    indexController.criarParty(req, res);
});

router.put("/gravarParty", function (req, res) {
    indexController.gravarParty(req, res);
});

router.put("/registrarClasseFav", function (req, res) {
    indexController.registrarClasseFav(req, res);
});

router.get("/", function (req, res) {
    res.render("index");
});

module.exports = router;