/**
 * Cálculo do volume do aquário
 * @author Alisson Guedes Rios
 */

const imput = require('readline-sync')

//variáveis
let comprimento, largura, altura, litros

console.clear()
console.log("Cálculo do volume de um aquário")

//entrada
comprimento = Number(imput.question("Digite o comprimento em cm do aquário: "))
largura = Number(imput.question("Digite a largura em cm do aquário: "))
altura = Number(imput.question("Digite a altura em cm do aquário: "))

//processamento
litros = (comprimento * largura * altura) / 1000

//saída
console.log(`No aquário cabem ${litros.toFixed(1)} litros`)