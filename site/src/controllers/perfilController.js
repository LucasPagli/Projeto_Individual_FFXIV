var perfilModel = require("../models/perfilModel");
// var aquarioModel = require("../models/aquarioModel");

function obterDadosGraficoMusica(req, res) {
    var fkMusicaUsuario = req.params.idUser;
  
    perfilModel.obterDadosGraficoMusica(fkMusicaUsuario).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

function obterDadosGraficoClasse(req, res) {
    var fkClasseWoL = req.params.ClasseWoL;

    perfilModel.obterDadosGraficoClasse(fkClasseWoL).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

function  obterDadosClassesTotal(req, res) {

    perfilModel. obterDadosClassesTotal().then((resultado) => {
      res.status(200).json(resultado);
    });
  }

module.exports = {
    obterDadosGraficoMusica,
    obterDadosGraficoClasse,
    obterDadosClassesTotal
}