const { TestTube } = require("lucide");
const { somar2numeros,add,subtract,multiply,divide,
        average,reverseString,isEven,cleanArray,max,
        descontoCliente,horaExtra
 } = require("./clienteDb");



/*
test("verifica se 1 + 1 é 2",testeSoma)
test(" vou somar 3 + 7 = 10",addSoma)
test("diminuir 9 - 9 = 0",subtrair)
test(" multiplica 6 * 7 = 42",multiplica)
test("vou dividir 15 por 30 = 2",divisao)

test(" vou somar 10,10,10 e fazer dividido por 3 = 10 ",testeMedia)
test(" inverter de murilo para olirum",inverter)
test(" ver se 2 é par ",numeroPar)
test("ver se 1 é impar",numeroImpar)
test("remover valores falsos",remover)
test("ver o numero maior da array que é 5 ",maoirArray)


test ("testar valor de 150 ira dar um desconto de 10%",calcularDesconto10)
test ("testar valor de 500 ira dar um desconto de 15%",calcularDesconto15)
test (" testar valor de 700 ira dar um desconto de 20%",calcularDesconto20)

function calcularDesconto10(){
    expect(descontoCliente(150)).toBe(135)
}
function calcularDesconto15(){
    expect(descontoCliente(500)).toBe(425)
}
function calcularDesconto20(){
    expect(descontoCliente(700)).toBe(560)
}

*/




test("testar salario 40h e 1000salariobase = 1000",calcularHoraExtra)
test("testar salario 45h e 1000 salariobase = 1150",calcularHoraExtra1)
test("testar salario 50h e 800 salariobase = 950",calcularHoraExtra2)

function calcularHoraExtra1(){
    expect(horaExtra(1000,45)).toBe(1150)
}

function calcularHoraExtra(){
expect(horaExtra(1000,40)).toBe(1000)

}
function calcularHoraExtra2(){
expect(horaExtra(800,50)).not.toBe(950)

}



/*
function testeMedia (){
  expect(average([10,10,10])).toBe(10)
}

function inverter(){
    expect(reverseString('murilo')).toBe('olirum')
}

function numeroPar(){
    expect(isEven(2)).toBe(true)
}
function numeroImpar(){
    expect(isEven(1)).toBe(false)
}
function remover(){
    expect(cleanArray([undefined,null,'um',1,2,3,false])).toEqual(['um',1,2,3])
}
function maoirArray(){
    expect(max([1,2,3,4,5])).toBe(5)
}




function testeSoma() {
    expect(somar2numeros(1,1)).toBe(2);

}

function addSoma(){
    expect(add(3,7)).toBe(10)
}
    

function subtrair(){
    expect(subtract(9,9)).toBe(0)

}

function multiplica(){
    expect(multiply(6,7)).toBe(42)
}

function divisao(){
    expect(divide(15,30)).toBe(2)

}




*/