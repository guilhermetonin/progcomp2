function cadastroInicial(vetor) {
  vetor.push({nome: "Vitor", cargo: "Supervisor", salario: 5800.00})
  vetor.push({nome: "José", cargo: "Estagiário", salario: 1518.00})
  vetor.push({nome: "Guilherme", cargo: "Gerente", salario: 12500.00})
}
// cadastra novo funcionário
function cadastrarNovo(vetor) {
  vetor.push({
    nome: prompt(`Nome do funcionário:`),
    cargo: prompt(`Cargo do funcionário:`),
    salario: Number(prompt(`Salário do funcionário:`))
  })
}
// lista todos os funcionários
function listarTodos(vetor) {
  for (let i = 0; i < vetor.length; i++) {
    console.log(vetor[i].nome)
  }
}
// aumenta o salário de todos em 10%
function aumentarSalario(vetor) {
  for (let funcionario of vetor) {
    funcionario.salario *= 1.10
  }
}
// busca o salário pelo o nome informado
function buscarSalario(vetor, nome) {
  for (let i = 0; i < vetor.length; i++) {
    if (nome == vetor[i].nome) {
      console.log(`Nome: ${vetor[i].nome} | Salário: ${vetor[i].salario.toFixed(2)}`)
      return
    }
  }
  // não tem no sistema
  alert(`Nome não encontrado.`)
}
// atualiza o cargo
function atualizarCargo(vetor, nome) {
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i].nome == nome) {
      vetor[i].cargo = prompt(`Novo cargo do funcionário:`)
      return
    }
  }
  alert(`Nome não encontrado.`)
}
// remove o funcionário pelo o nome informado
function removerFunc(vetor, nome) {
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i].nome == nome) {
      vetor.splice(i, 1)
      return
    }
  }
  alert(`Nome não encontrado.`)
}
// encontra a média salarial da empresa
function mediaSalarial(vetor) {
  let media = 0
  for (let funcionario of vetor) {
    media += funcionario.salario
  }
  media = media / vetor.length
  console.log(`Média salarial: R$${media.toFixed(2)}`)
  return media.toFixed(2)
}
// promove quem recebe abaixo da média
function abaixoMedia(vetor, media) {
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i].salario < media) {
      vetor[i].cargo = "Analista Júnior"
      vetor[i].salario *= 1.15
    }
  }
}

function maiorSalario(vetor) {
  let maior = vetor[0].salario
  let nome = vetor[0].nome
  for (let funcionario of vetor) {
    if (funcionario.salario > maior) {
      nome = funcionario.nome
      maior = funcionario.salario
    }
  }
  console.log(`Maior salário: ${nome} | R$ ${maior.toFixed(2)} `)
}


function main() {
  let vetor = []
  cadastroInicial(vetor)
  let opcao
  let media
  do {
    opcao = Number(prompt(`1. Cadastrar novo\n2. Listar todos\n3. Aumentar salário em 10%\n4. Buscar salário pelo nome\n5. Atualizar cargo\n6. Remover funcionário\n7. Exibir média salarial\n8. Promover abaixo da média\n9. Exibir maior salário\n10. Finalizar`))
    switch(opcao) {
      case 1: cadastrarNovo(vetor); break
      case 2: listarTodos(vetor); break
      case 3: aumentarSalario(vetor); break
      case 4: 
        let nomeSalario = prompt(`Buscar salário | Nome:`)
        buscarSalario(vetor, nomeSalario)
        break
      case 5:
        let nomeCargo = prompt(`Atualizar | Nome:`)
        atualizarCargo(vetor, nomeCargo)
        break
      case 6:
        let nomeRemove = prompt(`Remover | Nome:`)
        removerFunc(vetor, nomeRemove)
        break
      case 7: let media = mediaSalarial(vetor); break
      case 8: 
        let m = mediaSalarial(vetor)
        abaixoMedia(vetor, m)
        break
      case 9: maiorSalario(vetor); break
      case 10: alert(`Programa finalizado.`); break
      default: alert(`Opção não encontrada.`); break
    } 
  } while (opcao != 10)
  console.log(vetor)
}

main()