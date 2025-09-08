var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

let peca1 = lines[0]
let peca2 = lines[1]

let [codigo1, qtde1, preco1] = peca1.split(" ")
codigo1 = parseInt(codigo1)
qtde1 = parseInt(qtde1)
preco1 = parseFloat(preco1)

let [codigo2, qtde2, preco2] = peca2.split(" ")
codigo2 = parseInt(codigo2)
qtde2 = parseInt(qtde2)
preco2 = parseFloat(preco2)

let valor = (qtde1 * preco1) + (qtde2 * preco2)

console.log(`VALOR A PAGAR: R$ ${valor.toFixed(2)}`)