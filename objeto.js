function exemplo () {
  let montadora = [
    {
      nome: "Polo GTS",
      ano: 2025,
      cor: "Vermelho",
      valor: 85000
    },
    {
      nome: "Amarok",
      ano: 2024,
      cor: "Preto",
      valor: 200000
    },
    {
      nome: "Nivus",
      ano: 2021,
      cor: "Cinza",
      valor: 156000
    }
  ]

  for (let i = 0; i < montadora.length; i++) {
    console.log(`Cor do carro ${i+1}: ${montadora[i].cor}`)
  }

  ///

  let loja = []

  for (let i = 0; i < 1; i++) {
    let nome = prompt(`Nome do carro ${i+1}: `)
    let ano = prompt(`Ano do carro ${i+1}: `)
    let cor = prompt(`Cor do carro ${i+1}: `)
    let valor = prompt(`Valor do carro ${i+1}: `)

    let montadora = {
      nome: nome,
      ano: ano,
      cor: cor,
      valor: valor
    }
    loja.push(montadora)
  }
  for (let i = 0; i < 1; i++) {
    console.log(`Carro ${i+1} - Nome: ${loja[i].nome}`)
  }
}

function cadastroLivros() {

  let livros = []

  // preencher
  for (let i = 0; i < 5; i++) {
    let titulo = prompt(`Título do Livro ${i+1}`)
    let autor = prompt(`Autor`)
    let ano = Number(prompt(`Ano de Publicação`))
    let qtde = Number(prompt(`Quantidade de Páginas`))

    let info = {
      titulo: titulo,
      autor: autor,
      ano: ano,
      qtde: qtde
    }
    livros.push(info)
  }

  // livros com +300 paginas
  for (let i = 0; i < 5; i++) {
    if (livros[i].qtde > 300) {
      console.log(livros[i])
    }
  }

  // livro com maior n de paginas
  let maior = livros[0]

  for (let i = 0; i < 5; i++) {
    if (livros[i].qtde > maior.qtde) {
      maior = livros[i]
    }
  }

  // media de paginas de tds os livros
  let soma = 0

  for (let i = 0; i < 5; i++) {
    total += livros[i].qtde
  }

  // exibe
  console.log(`Livro com maior n. de páginas: ${tituloMaior}`)
  console.log(`Média de páginas de todos os livros: ${soma / 5}`)

}

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
