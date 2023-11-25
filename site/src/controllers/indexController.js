var indexModel = require("../models/indexModel");
// var aquarioModel = require("../models/aquarioModel");

function criarParty(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idFkUsuario = req.body.idServer;
    // var cpf = req.body.cpfServer;
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
        indexModel.criarParty(idFkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a criação da party! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

 
function gravarParty(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var Fav1 = req.body.Fav1Server;
    // var cpf = req.body.cpfServer;
    var Fav2 = req.body.Fav2Server;
    var Fav3 = req.body.Fav3Server;
    var idFK = req.body.id2Server;
    // var empresaId = req.body.empresaServer;

    // Faça as validações dos valores
    if (Fav1 == undefined) {
        res.status(400).send("Seu favorito 1 está undefined!");
    // } else if (cpf == undefined) {
    //     res.status(400).send("Seu cpf está undefined!");
    } else if (Fav2 == undefined) {
        res.status(400).send("Seu favorito 2 está undefined!");
    } else if (Fav3 == undefined) {
        res.status(400).send("Sua favorito 3 está undefined!");
    } else if (idFK == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        indexModel.gravarParty(Fav1, Fav2, Fav3, idFK)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o registro da party! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    criarParty,
    gravarParty
}