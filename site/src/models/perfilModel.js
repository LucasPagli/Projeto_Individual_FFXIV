var database = require("../database/config")

function obterDadosGraficoMusica(fkMusicaUsuario) {
    var instrucao = `SELECT * FROM usuario_musica_contador WHERE fkMusica IN (1,2,3,4,5,6) AND fkUsuario = '${fkMusicaUsuario}'`;
  
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

function obterDadosGraficoClasse(fkClasseWoL) {
    var instrucao = `select count(fkClasse) as qtdClasse from usuario where fkClasse = ${fkClasseWoL};`;
  
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

function obterDadosClassesTotal() {
    var instrucao = `select count(fkClasse) as qtdTotal from usuario;`;
  
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

module.exports = {
    obterDadosGraficoMusica,
    obterDadosGraficoClasse,
    obterDadosClassesTotal
};