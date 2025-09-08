var input = require('fs').readFileSync('/dev/stdin', 'utf8');

/*
entrada de dados: '3.0 4.0 5.2'
var lines = input.split('\n') > ao encontrar \n cria-se um novo elemento
lines[0] = '3.0 4.0 5.2'
lines[1] = não existe, pq nao tem \n na entrada de dados

var lines = input.split(' ') > ao encontrar um espaço cria-se um novo elemento
lines[0] = '3.0'
lines[1] = '4.0'
lines[2] = '5.2'
*/
var lines = input.split(' '); 

let A = parseFloat(lines[0])
let B = parseFloat(lines[1])
let C = parseFloat(lines[2])
let pi = 3.14159

let triangulo = (A * C) / 2

let circulo = pi * (C * C)

let trapezio = ((A + B) / 2) * C

let quadrado = B * B

let retangulo = A * B

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)
console.log(`CIRCULO: ${circulo.toFixed(3)}`)
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
console.log(`RETANGULO: ${retangulo.toFixed(3)}`)
