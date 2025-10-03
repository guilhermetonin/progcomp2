function preenche(x) {
  x.push('Antônio', 'Guilherme', 'Gustavo', 'Gabriel', 'Saturi')
}

function maiusculas(x) {
  for(let i = 0; i < x.length; i++) {
    x[i] = x[i].toUpperCase()
  }
}
function anonimo(x) {
  for (let i = 0; i < x.length; i++) {
    if (x[i][0] == 'A') {
      x[i] = 'ANÔNIMO'
    }
  }
}
function exibe(x) {
  console.log(x)
}
function main() { 
  let nomes = []
  preenche(nomes)
  maiusculas(nomes)
  anonimo(nomes)
  exibe(nomes)
}
main()

/* 
outro jeito de pegar o 1. caractere

if (x[i].slice(0,1) === 'A') {
      x[i] = 'ANÔNIMO'
    }
}
*/
