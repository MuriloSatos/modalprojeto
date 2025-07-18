const db = require('../db');

async function validarLogin(event, nome, senha) {
   const resultado = await db.query('select * from sistema.adm where nome = $1 and senha = $2', [nome,senha])
 
  if (resultado.rows.length > 0) {
    return resultado.rows[0]
  }
 
   return false

}

module.exports = {
    validarLogin
}
