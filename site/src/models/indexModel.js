var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function criarParty(idFkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idFkUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO party (fkUsuario) VALUES ('${idFkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function gravarParty(Fav1, Fav2, Fav3, idFK) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", Fav1, Fav2, Fav3, idFK);
    var instrucao = `
        UPDATE party SET firstMember='${Fav1}', secondMember='${Fav2}', thirdMember='${Fav3}' WHERE fkUsuario='${idFK}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function registrarClasseFav(FavJob, SpecificUserId) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", FavJob, SpecificUserId);
    var instrucao = `
        UPDATE usuario SET fkClasse='${FavJob}' WHERE idUsuario='${SpecificUserId}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    criarParty,
    gravarParty,
    registrarClasseFav
}; 