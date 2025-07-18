const db = require('../db')


async function buscarProduto() {
    const resultado = await db.query('select * from sistema.produto')

    return resultado.rows;
}

async function buscarProdutoNome(event , nomeproduto) {
     const termoBusca = `%${nomeproduto}%`;
const resultado = await db.query('select * from sistema.produto Where nomeproduto  like  $1 ' ,[termoBusca])


    return resultado.rows;
}

async function deletarProduto(event, id) {
    const resultado = await db.query('delete from sistema.produto where id = $1', [id])
    return resultado.rows;
}

async function atualizarProduto(event, id, nomeproduto, tipoproduto, preco, tamanhoproduto, marcaproduto, codigoproduto) {
    const resultado = await db.query('update sistema.produto set nomeproduto = $2, tipoproduto = $3, preco = $4, tamanhoproduto = $5, marcaproduto = $6, codigoproduto = $7 where id = $1', [id, nomeproduto, tipoproduto, preco, tamanhoproduto, marcaproduto, codigoproduto])
    return resultado.rows;
}

async function adicionarProduto(event, nomeproduto, tipoproduto, preco, tamanhoproduto, marcaproduto, codigoproduto) {
    const resultado = await db.query('insert into sistema.produto (nomeproduto, tipoproduto, preco, tamanhoproduto, marcaproduto, codigoproduto) values ($1,$2,$3,$4,$5,$6)', [nomeproduto, tipoproduto, preco, tamanhoproduto, marcaproduto, codigoproduto])
    return resultado.rows
}

module.exports = {
    buscarProduto,
    deletarProduto,
    atualizarProduto,
    adicionarProduto,
    buscarProdutoNome
}