function cadastroProjetos() {
  
  let projetos = []

  // preencher
  for (let i = 0; i < 7; i++) {
    let info = {
      nomeProjeto: prompt(`Nome do Projeto ${i+1}`),
      empresa: prompt(`Empresa`).toLowerCase(),
      duracaoMeses: Number(prompt(`Duração (em meses)`)),
      orcamento: Number(prompt(`Orçamento`))
    }
    projetos.push(info)
  }

  // duracao e meses
  for (let i = 0; i < 7; i++) {
    if (projetos[i].duracaoMeses > 12 && projetos[i].orcamento > 1000000.00) {
      console.log(projetos[i])
    }
  }

  // maior orcamento
  let maior = projetos[0]
  let media = 0

  // maior e media
  for (let i = 0; i < 7; i++) {
    if (projetos[i].orcamento > maior.orcamento) {
      maior = projetos[i]
    }
    media+= projetos[i].duracaoMeses
  }

  // inovatech
  let qtde = 0
  for (let i = 0; i < 7; i++) {
    if (projetos[i].empresa === `inovatech`) {
      qtde++
    }
  }

  // soma de orcamento
  let totalGasto = 0
  for (let i = 0; i < 7; i++) {
    if (projetos[i].duracaoMeses < 6) {
      totalGasto+= projetos[i].orcamento
    }
  }

  // exibir
  console.log(`Maior orçamento: ${maior.nomeProjeto}`)
  console.log(`Média de duração dos projetos: ${media / projetos.length}`)
  console.log(`InovaTech foram realizados: ${qtde} projetos`)
  console.log(`Total de orçamento com menos de 6 meses de duração: R$ ${totalGasto}`)


}