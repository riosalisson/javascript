/**
 * Cálculo da quantidade de tijolos baianos 8 furos por metro quadrado, abendo que 1m2 = 28 tijolos
 * @author Alisson Guedes Rios
 */

const input = require('readline-sync')

//variáveis
let m2, tijolos

console.clear()
console.log("Cálculo da quantidade de tijolos por metro quadrado (tijolo baiano 8 furos)")

//entrada
m2 = Number(input.question("Quantos metros quadrados voce precisa? "))

//processamento
tijolos = m2 * 28

//saída
console.log(`Você precisará de ${tijolos} tijolos`)