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
      console.log(`Livro com +300 páginas: ${livros[i].titulo}`)
    }
  }

  // livro com maior n de paginas
  let maiorPaginas = livros[0].qtde
  let tituloMaior = livros[0].titulo

  for (let i = 0; i < 5; i++) {
    if (livros[i].qtde > maiorPaginas) {
      maiorPaginas = livros[i].qtde
      tituloMaior = livros[i].titulo
    }
  }

  // media de paginas de tds os livros
  let total = 0

  for (let i = 0; i < 5; i++) {
    total += livros[i].qtde
  }
  let media = total / 5

  // exibe
  console.log(`Livro com maior n. de páginas: ${tituloMaior}`)
  console.log(`Média de páginas de todos os livros: ${media}`)

}

    