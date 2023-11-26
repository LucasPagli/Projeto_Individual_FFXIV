var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function criarContadorMusica(idFkUsuario, idFkAlex, idFkTitan, idFkGaruda, idFkUltima, idFkShiva, idFkNidhogg) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idFkUsuario, idFkAlex, idFkTitan, idFkGaruda, idFkUltima, idFkShiva, idFkNidhogg);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario_musica_contador (fkUsuario, fkMusica, vezesEscutada) VALUES 
            ('${idFkUsuario}', '${idFkAlex}', 0),
            ('${idFkUsuario}', '${idFkTitan}', 0),
            ('${idFkUsuario}', '${idFkGaruda}', 0),
            ('${idFkUsuario}', '${idFkUltima}', 0),
            ('${idFkUsuario}', '${idFkShiva}', 0),
            ('${idFkUsuario}', '${idFkNidhogg}', 0);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function contarMusica(fkUserCount, fkMusicEscutada) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", fkUserCount, fkMusicEscutada);
    var instrucao = `
        UPDATE usuario_musica_contador SET vezesEscutada = vezesEscutada + 1 WHERE fkUsuario='${fkUserCount}' AND fkMusica='${fkMusicEscutada}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificarParty(idFkPartyUsuario) {
    var instrucao = `SELECT firstMember, secondMember, thirdMember FROM party WHERE fkUsuario = '${idFkPartyUsuario}'`;
  
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

function verificarWoL(idFkClasse) {
    var instrucao = `SELECT fkClasse FROM usuario WHERE idUsuario = '${idFkClasse}'`;
  
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

module.exports = {
    criarContadorMusica,
    contarMusica,
    verificarParty,
    verificarWoL
}; 