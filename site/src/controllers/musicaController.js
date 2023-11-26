var musicaModel = require("../models/musicaModel");
// var aquarioModel = require("../models/aquarioModel");

function criarContadorMusica(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idFkUsuario = req.body.idServer;
    var idFkAlex = req.body.fkAlexServer;
    var idFkTitan = req.body.fkTitanServer;
    var idFkGaruda = req.body.fkGarudaServer;
    var idFkUltima = req.body.fkUltimaServer;
    var idFkShiva = req.body.fkShivaServer;
    var idFkNidhogg = req.body.fkNidhoggServer;
    // var empresaId = req.body.empresaServer;

    // Faça as validações dos valores
    if (idFkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    // } else if (cpf == undefined) {
    //     res.status(400).send("Seu cpf está undefined!");
    // } else if (empresaId == undefined) {
    //     res.status(400).send("Sua empresa está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        musicaModel.criarContadorMusica(idFkUsuario, idFkAlex, idFkTitan, idFkGaruda, idFkUltima, idFkShiva, idFkNidhogg)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a criação do contador! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

 
function contarMusica(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUserCount = req.body.id2Server;
    // var cpf = req.body.cpfServer;
    var fkMusicEscutada = req.body.fkMusicEscutadaServer;
    // var empresaId = req.body.empresaServer;

    // Faça as validações dos valores
    if (fkUserCount == undefined) {
        res.status(400).send("Seu fkUserCount está undefined!");
    // } else if (cpf == undefined) {
    //     res.status(400).send("Seu cpf está undefined!");
    } else if (fkMusicEscutada == undefined) {
        res.status(400).send("Seu fkMusicEscutada está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        musicaModel.contarMusica(fkUserCount, fkMusicEscutada)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a contagem da música! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function verificarParty(req, res) {
    var idFkPartyUsuario = req.params.idServer;
  
    musicaModel.verificarParty(idFkPartyUsuario).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

function verificarWoL(req, res) {
    var idFkClasse = req.params.idServer;
  
    musicaModel.verificarWoL(idFkClasse).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

module.exports = {
    criarContadorMusica,
    contarMusica,
    verificarParty,
    verificarWoL
}