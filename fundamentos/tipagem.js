/**
 * Estudo das variáveis - tipagem dinâmica
 * @author Alisson Guedes Rios
 */

console.clear()
console.log("strings____________________")
let nome = "Alisson Guedes Rios"
console.log(typeof(nome))
console.log(nome)
//concatenação (unir um texto com o conteúdo de uma variável)
console.log("professor: " + nome) //evitar concatenar dessa forma
console.log(`professor: ${nome}`)
console.log("números____________________")
let peso = 62
let altura = 1.63
console.log(typeof(peso))
console.log(typeof(altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`) //toFixed(2) arredondar 2 casas decimais
// ATENÇÃO !!!
console.log(10/0)
console.log("3" + 2)
console.log("3" - 1)
console.log("3" * 2)
console.log("3" / 2)
console.log("3x" - 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log("booleanos__________________")
let chave = true
console.log(typeof(chave))
let lampada = false
console.log(typeof(lampada))
console.log(`Chave: ${chave} Lâmpada: ${lampada}`)