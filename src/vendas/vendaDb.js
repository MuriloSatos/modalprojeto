const db = require('../db')

async function buscarVenda() {
    const resultado = await db.query('select * from sistema.venda order by codigovendas')
    return resultado.rows;
}
async function buscarVendaId(event, idcliente) {
    const termoBusca = `%${idcliente}%`;
    const resultado = await db.query(
    'SELECT * FROM sistema.venda WHERE idcliente::text LIKE $1',
    [termoBusca]
);


    return resultado.rows;
}


async function deletarVenda(event, idcliente) {
    const resultado = await db.query('delete from sistema.venda where idcliente = $1', [idcliente])
    return resultado.rows;
}
async function atualizarVenda(event, idcliente, codigoproduto, dataVenda, codigovendas, pecaquantidade, valorTotal, statusvenda) {
    const resultado = await db.query('update sistema.venda set codigoproduto = $2, dataVenda = $3, codigovendas = $4, pecaquantidade = $5, valorTotal = $6, statusvenda = $7 where idcliente = $1', [idcliente, codigoproduto, dataVenda, codigovendas, pecaquantidade, valorTotal, statusvenda])
    return resultado.rows;
}
async function adicionarVenda(event, codigoproduto, dataVenda, codigovendas, pecaquantidade, valorTotal, statusvenda) {
    const resultado = await db.query('insert into sistema.venda (codigoproduto, dataVenda, codigovendas, pecaquatidade, valorTotal, statusvenda) values ($1,$2,$3,$4,$5,$6)', [codigoproduto, dataVenda, codigovendas, pecaquantidade, valorTotal, statusvenda])
    return resultado.rows
}

module.exports = {
    buscarVenda,
    buscarVendaId,
    deletarVenda,
    atualizarVenda,
    adicionarVenda
}