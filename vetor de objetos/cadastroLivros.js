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