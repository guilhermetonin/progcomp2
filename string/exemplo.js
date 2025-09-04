// tira os espaços antes e depois
let palavra2 = prompt("")

// cria um vetor da palavra limpa
let limpa = palavra.trim()

// converte a palavra em um vetor, palavra por palavra
let vetor = limpa.split("")

// inverte a palavra do tipo vetor
let invertida2 = vetor.reverse()

// converte vetor em string
let invertidaString = invertida.join("")

if (invertidaString === limpa) {
  console.log(``) 
}
else {
  console.log(``)
}

// outro jeito

let palavra = prompt("Informe uma palavra")

let invertida = palavra.trim().split("").reverse().join()

if (palavra.trim() === invertida){ // compara duas strings
    alert('São palíndromas')
}
else alert('Não são palíndromas')