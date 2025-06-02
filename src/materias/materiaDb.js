const db = require('../db');

async function buscarMateria() {
    console.log('');
    const resultado = await db.query('SELECT id, nome, descricao, idcurso FROM public.materia');
    return resultado.rows;
}

async function deletarMateria(event, pId) {
    console.log('deletar ', pId);
    console.log(event);
    const resultado = await db.query('DELETE FROM public.materia WHERE id = $1', [pId]);
    return resultado.rows;
}

async function atualizarMateria(event, pId, pNome, descricao,idcurso) {
    console.log('atualizar ', pId);
    const resultado = await db.query(
        'UPDATE public.materia SET nome = $1, descricao = $2,idcurso = $3   WHERE id = $4',
        [pNome, descricao,idcurso, pId]
    );
    return resultado.rows;
}

async function adicionarMateria(event, pNome, descricao,idcurso) {
    console.log('adicionar ', pNome, descricao,idcurso);
    console.log(event);
    const retorno = await db.query(
        'INSERT INTO materia (nome, descricao,idcurso) VALUES ($1, $2,$3) ',
        [pNome, descricao,idcurso]
    );
    return retorno.rows;
}

module.exports = {
    deletarMateria,
    buscarMateria,
    atualizarMateria,
    adicionarMateria
}
