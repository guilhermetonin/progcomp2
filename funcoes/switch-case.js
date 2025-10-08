function listarNomes(alunos){
  for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome)
  }
}
function aumentarIdade(alunos) {
  for (let aluno of alunos) {
    aluno.idade += 1
  }
}
function cadastroInicial(alunos) {
  alunos.push({nome: "Ana", idade: 20, curso: "SI"})
  alunos.push({nome: "Carlos", idade: 22, curso: "CC"})
  alunos.push({nome: "Beatriz", idade: 19, curso: "ES"})
}
function cadastrarNovo(alunos) {
  alunos.push({
    nome: prompt(`Nome do aluno:`),
    idade: Number(prompt(`Idade do aluno:`)),
    curso: prompt(`Curso do aluno:`)
  })
}
function removeAluno(alunos, nome) {
  for (let i = 0; i < alunos.length; i++) {
    if (nome == alunos[i].nome) {
      alunos.splice(i, 1) // remove do vetor
      return // encerra a função
    }
  }
}
function main() {
  let vetor = []
  cadastroInicial(vetor)
  let opcao 
  do {
    opcao = Number(prompt(`1. Cria Aluno | 2. Lista nomes | 3. Atualiza idade | 4. Remove aluno | 5. Sair`))
    switch(opcao) {
      case 1: cadastrarNovo(vetor); break
      case 2: listarNomes(vetor); break
      case 3: aumentarIdade(vetor); break
      case 4:
        let nomeRemove = prompt(`Nome para remover:`)
        removeAluno(vetor, nomeRemove)
        break // encerra a execução do switch
      case 5: alert (`Programa encerrado.`); break
      default: alert(`Opção inválida.`); break
    }
  } while (opcao != 5)
  console.log(vetor)
}

main()