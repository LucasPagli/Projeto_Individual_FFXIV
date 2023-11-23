var cadastroModel = require("../models/cadastroModel");
// var aquarioModel = require("../models/aquarioModel");

 function autenticar(req, res) {
     var email = req.body.emailServer;
     var senha = req.body.senhaServer;

     if (email == undefined) {
         res.status(400).send("Seu email está undefined!");
     } else if (senha == undefined) {
         res.status(400).send("Sua senha está indefinida!");
     } else {

         cadastroModel.autenticar(email, senha)
             .then(
                 function (resultadoAutenticar) {
                     console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                     console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                     if (resultadoAutenticar.length == 1) {
                         console.log(resultadoAutenticar);

                         cadastroModel.autenticar(resultadoAutenticar[0].email, resultadoAutenticar[0].senha)
                             .then((resultadoAutenticar) => {
                                 if (resultadoAutenticar.length > 0) {
                                     res.json({
                                         idUsuario: resultadoAutenticar[0].idUsuario,
                                         email: resultadoAutenticar[0].email,
                                         username: resultadoAutenticar[0].username,
                                         senha: resultadoAutenticar[0].senha,
                                     });
                                 }
                             })
                     } else if (resultadoAutenticar.length == 0) {
                         res.status(403).send("Email e/ou senha inválido(s)");
                     } else {
                         res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                     }
                 }
             ).catch(
                 function (erro) {
                     console.log(erro);
                     console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                     res.status(500).json(erro.sqlMessage);
                 }
             );
     }

 }

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    // var cpf = req.body.cpfServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    // var empresaId = req.body.empresaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    // } else if (cpf == undefined) {
    //     res.status(400).send("Seu cpf está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    // } else if (empresaId == undefined) {
    //     res.status(400).send("Sua empresa está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        cadastroModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}