var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.get("/obterDadosGraficoMusica:idUser", function (req, res) {
    perfilController.obterDadosGraficoMusica(req, res);
});

router.get("/obterDadosGraficoClasse:ClasseWoL", function (req, res) {
    perfilController.obterDadosGraficoClasse(req, res);
});

router.get("/obterDadosClassesTotal", function (req, res) {
    perfilController.obterDadosClassesTotal(req, res);
});

module.exports = router;