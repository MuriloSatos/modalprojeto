
const db = require('../db');



async function buscarCurso() {
    console.log('')
    const resultado = await db.query('SELECT id, nome, descricao FROM public.cursos')

    return resultado.rows;

}

async function deletarCurso(event,pId){    
    console.log('deletar ',pId)
    console.log(event);
    const resultado = await db.query('DELETE FROM public.cursos  WHERE ID = $1',[pId]);
    return resultado.rows;

}
async function atualizarCurso(event, pId, pNome, descricao){
    console.log('atualizar ',pId)
    console.log(event);
    const resultado = await db.query('UPDATE public.cursos SET id=$1, nome= $2, descricao=$3',[pNome,descricao,pId]);
    return resultado.rows; 
}
async function adicionarCurso(event, pNome, descricao){
    console.log('adicionar ',pNome,descricao)
    console.log(event);
    const retorno = await db.query('insert into cursos (  nome, descricao) values ($1,$2) ',[pNome,descricao]);
    return retorno.rows;

}



module.exports = {
    deletarCurso,
    buscarCurso,
    atualizarCurso,
    adicionarCurso
} 