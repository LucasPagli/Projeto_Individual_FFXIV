var express = require("express");
var router = express.Router();

var musicaController = require("../controllers/musicaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/criarContadorMusica", function (req, res) {
    musicaController.criarContadorMusica(req, res);
})

router.put("/contarMusica", function (req, res) {
    musicaController.contarMusica(req, res);
})

router.get("/verificarParty:idServer", function (req, res) {
    musicaController.verificarParty(req, res);
});

router.get("/verificarWoL:idServer", function (req, res) {
    musicaController.verificarWoL(req, res);
});


module.exports = router;