const db = require('../db');



async function buscarProfessor() {
    console.log('')
    const resultado = await db.query('SELECT * FROM professor order by id')

    return resultado.rows;

}

async function deletarProfessor(event,pId){    
    console.log('deletar ',pId)
    console.log(event);
    const resultado = await db.query('DELETE FROM professor WHERE ID = $1',[pId]);
    return resultado.rows;

}
async function atualizarProfessor(event, pId, pNome, cpf){
    console.log('atualizar ',pId)
    console.log(event);
    const resultado = await db.query('UPDATE professor SET nome = $1, cpf = $2 WHERE ID = $3',[pNome,cpf,pId]);
    return resultado.rows; 
}
async function adicionarProfessor(event, pNome, cpf){
    console.log('adicionar ',pNome,cpf)
    console.log(event);
    const retorno = await db.query('insert into professor (  nome, cpf) values ($1,$2) ',[pNome,cpf]);
    return retorno.rows;

}



module.exports = {
    deletarProfessor,
    buscarProfessor,
    atualizarProfessor,
    adicionarProfessor
} 