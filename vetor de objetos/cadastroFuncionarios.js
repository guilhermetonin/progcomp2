function cadastroFuncionarios() {
  let funcionarios = []
  
  // preencher
  for (let i = 0; i < 6; i++) {

    let info = {
      nome: prompt(`Nome do Funcionário ${i+1}`),
      cargo: prompt(`Cargo`).toLowerCase(),
      salario: Number(prompt(`Salário`)),
      tempoServico: Number(prompt(`Tempo na empresa (em anos)`))
    }
    funcionarios.push(info)
  }

  let maior = funcionarios[0]
  let media = 0

  // > 5000 & > 5 anos
  for (let i = 0; i < 6; i++) {
    if (funcionarios[i].salario > 5000 && funcionarios[i].tempoServico > 5) {
      console.log(funcionarios[i])
    }
    // maior
    if (funcionarios[i].salario > maior.salario) {
      maior = funcionarios[i]
    }
    // media
    media+= funcionarios[i].salario
  }
  console.log(`O funcionário com maior salário é: ${maior.nome}`)
  console.log(`A média salarial é R$ ${media / funcionarios.length}`)
  
  // gerentes
  let qtde = 0 
  for (let i = 0; i < 6; i++) {    
    if (funcionarios[i].cargo === `gerente`) {
      qtde++
      console.log(funcionarios[i])
    }   
  }
  console.log(`Tem ${qtde} Gerentes`)

}