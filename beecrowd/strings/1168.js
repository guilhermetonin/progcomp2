var input = require('fs').readFileSync('/dev/stdin', 'utf8');

/*
.trim()
remove todo e qlqr espaço em branco

.split(\n)
divide a linha em um vetor, usando a quebra de linha (\n) como separador

de: lines = "3\n115380\n2819311\n23456"

para: lines = ['3', '115380', '2819311', '23456'] 
todos os elementos ainda são strings
*/
var lines = input.trim().split('\n')


// tabela de cada dígito com a sua qtde de led
let ledsDigitos = {
  '1': 2,
  '2': 5,
  '3': 5,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 3,
  '8': 7,
  '9': 6,
  '0': 6
}

/*
.shift()
acessa o 1. elemento do vetor, remove e o valor desse elemento 
foi armazenado na variavel n

de: lines = ['3', '115380', '2819311', '23456']

para: lines = ['115380', '2819311', '23456']

parseInt() fez a string virar um número
n = 3
*/
let n = parseInt(lines.shift())

for (let i = 0; i < n; i++) {

  /*
  pega o prox valor do vetor '115380' e remove ele do vetor
  lines = ['2819311', '23456']
  valor = '115380'
  */
  let valor = lines.shift()

  /*
  pega o valor e splita ele e coloca em um vetor
  de: '115380'

  para: vetor = ['1', '1', '5', '3', '8', '0']
  são strings
  */
  let vetor = valor.split("")

  let total = 0

  // passar sobre cada digito para calcular
  for (let k = 0; k < vetor.length; k++) {

    // guarda o caractere na posicao [k]
    let digito = vetor[k]

    // consulta essa string na tabela para calcular a qtde de LEDs
    total = total + ledsDigitos[digito]
  }
  console.log(`${total} leds`)

}

