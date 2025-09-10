let input = "10\n3\n5\n8\n3"
let lines = input.split('\n');

let espacos = parseInt(lines[0])
let pacote = parseInt(lines[1])

// não permite repetições, somente novos elementos
let novas = new Set()

/* 

pacote = 3 + 1 = 4
i <= 4

indice:  0  1  | 2  3  { 4 }
vetor:  10, 3, | 5, 8,   3

*/
for (let i = 2; i <= pacote + 1; i++) {
    novas.add(lines[i])
}

let faltam = espacos - novas.size

console.log(faltam)
