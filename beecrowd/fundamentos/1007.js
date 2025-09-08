var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

let A = parseInt(lines[0])
let B = parseInt(lines[1])
let C = parseInt(lines[2])
let D = parseInt(lines[3])

let diferenca = (A * B - C * D)

console.log(`DIFERENCA = ${diferenca}`)