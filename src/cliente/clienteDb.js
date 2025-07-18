const db = require('../db')


async function buscarcliente() {
    const resultado = await db.query('select * from sistema.cliente')

    return resultado.rows;

}

async function buscarClienteDevs(event, email) {
    const termoBusca = `%${email}%`;
    const resultado = await db.query('select * from sistema.cliente  Where email  like  $1 ', [termoBusca])


    return resultado.rows;
}

async function deletarCliente(event, id) {
    const resultado = await db.query('delete from sistema.cliente where id = $1', [id])
    //  console.log(event)
    return resultado.rows;
}

async function atualizarCliente(event, id, nome, senha, email) {
    const resultado = await db.query('update sistema.cliente set nome = $2, senha = $3, email = $4 where id = $1', [id, nome, senha, email])
    //console.log(event)
    return resultado.rows;
}

async function adicionarCliente(event, nome, senha, cpf, email) {
    const resultado = await db.query('insert into sistema.cliente (nome,senha,cpf,email) values ($1,$2,$3,$4)', [nome, senha, cpf, email])
    //    console.log(event)
    return resultado.rows

}

function somar2numeros(num1, num2) {
    return num1 + num2;
}


// Deve somar dois números
function add(a, b) {
    return a + b;
}
// Deve subtrair o segundo número do primeiro
function subtract(a, b) {
    return a - b;
}
// Deve multiplicar dois números
function multiply(a, b) {
    return a * b;
}
// Deve dividir o primeiro número pelo segundo
function divide(a, b) {
    return b / a;
}


// Deve retornar a média de uma lista de números
function average(numbers) {
    const total = numbers.reduce((acc, n) => acc + n, 0);
    return total / numbers.length;
}
// Deve inverter uma string
function reverseString(str) {
    return str.split('').reverse().join('');
}
// Deve verificar se um número é par
function isEven(n) {
    return n % 2 === 0 && n >= 0;
}
// Deve remover todos os valores falsy de um array
function cleanArray(arr) {
    return arr.filter(item => item !== null && item !== undefined && item !== false);
}
// Deve retornar o maior número de um array
function max(numbers) {
    return Math.max(...numbers);
}


function descontoCliente(preco) {

    if (preco >= 100 && preco < 200) {
        let desconto = 10;
        let valor = preco / 100
        let final = valor * desconto
        let valorFinal = preco - final
        return valorFinal

    }

    else if (preco >= 200 && preco <= 500) {
        let desconto1 = 15;
        let valor1 = preco / 100
        let final1 = valor1 * desconto1
        let valorFinal1 = preco - final1
        return valorFinal1
    }
    else if (preco > 500) {
        let desconto2 = 20;
        let valor2 = preco / 100
        let final2 = valor2 * desconto2
        let valorFinal2 = preco - final2

        return valorFinal2
    }
}
function horaExtra(salarioBase, horasTrabalhadas) {

    const horasExtras = horasTrabalhadas > 40 ? horasTrabalhadas - 40 : 0;
    const adicional = horasExtras * 30;

    return salarioBase + adicional;

}




        module.exports = {
            buscarcliente,
            deletarCliente,
            atualizarCliente,
            adicionarCliente,
            buscarClienteDevs,


            somar2numeros,
            add,
            subtract,
            multiply,
            divide,

            average,
            reverseString,
            isEven,
            cleanArray,
            max,

            descontoCliente,
            horaExtra

        };

