/**
 * Calculadora Fahrenheit para Celsius
 * @author Alisson Guedes Rios
 */

const input = require('readline-sync')

//variáveis
let f, conversao, c

console.clear()
console.log("Calculadora")

//entrada
f = Number(input.question("Digite a temperatura em Fahrenheit: "))

//processamento
conversao = 5/9 * (f-32)

//saída
console.log(`${f.toFixed(4)} Fahrenheit equivale a ${conversao.toFixed(4)} Celsius`)