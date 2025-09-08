var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

let numero = parseInt(lines[0])
let horas = parseInt(lines[1])
let recebe = parseFloat(lines[2])

let salario = (horas * recebe)

console.log(`NUMBER = ${numero}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)