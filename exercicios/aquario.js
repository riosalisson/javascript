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
comprimento = Number(imput.question("Digite o comprimento em cm do aquario: "))
largura = Number(imput.question("Digite a largura em cm do aquario: "))
altura = Number(imput.question("Digite a altura em cm do aquario: "))

//processamento
litros = (comprimento * largura * altura) / 1000

//saída
console.log(`No aquário cabem ${litros.toFixed(1)} litros`)