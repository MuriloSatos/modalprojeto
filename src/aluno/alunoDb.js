const db = require('../db');


async function buscarAlunos() {

    const resultado = await db.query('SELECT * FROM alunos order by id')

    return resultado.rows;

}

async function deletarAluno(event,pId){    
    console.log('deletar ',pId)
    console.log(event);
    const resultado = await db.query('DELETE FROM alunos WHERE ID = $1',[pId]);
    return resultado.rows;

}
async function atualizarAluno(event, pId, pNome, pMatricula){
    console.log('atualizar ',pId)
    console.log(event);
    const resultado = await db.query('UPDATE alunos SET nome = $1, matricula = $2 WHERE ID = $3',[pNome,pMatricula,pId]);
    return resultado.rows; 
}


async function adicionarAluno(event, pNome, pMatricula){
    console.log('adicionar ',pNome,pMatricula)
    console.log(event);
    const retorno = await db.query('insert into alunos (  nome, matricula) values ($1,$2) ',[pNome,pMatricula]);
    return retorno.rows;


}




module.exports = {
    buscarAlunos,
    deletarAluno,
    atualizarAluno,
    adicionarAluno
}