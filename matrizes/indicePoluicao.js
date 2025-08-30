function indicePoluicao() {
  

  // Preenche os Vetores com os Dados do Usuário
  // regiões e dias
  let regioes = []
  let dias = []

  for (let r = 0; r < 5; r++) {
    regioes.push(prompt(`Digite o nome da região ${r+1}: `))

  }

  for (let d = 0; d < 5; d++) {
    dias.push(Number(prompt(`Digite o dia ${d+1}: `)))

  }


  // Preenche o Vetor com os Índices de Poluição
  // r - regiões | d - dias
  let poluicao = []

  for (let r = 0; r < 5; r++){ 
    poluicao[r] = []

    for (let d = 0; d < 5; d++) {
      do {
        poluicao[r][d] = (Number(prompt(`Índice da poluição da região ${regioes[r]} no dia ${dias[d]}:`)))

      } // valida a entrada, somente valores entre 0 a 500
      while (poluicao[r][d] < 0 || poluicao[r][d] > 500) 

    }
  }


  // Diagonal Principal
  // é formada pelo os valores onde os índices da linha e da coluna são iguais
  let somaDP = 0

  console.log(`Diagonal Principal:`)
  for (let i = 0; i < poluicao.length; i++) {
    console.log(poluicao[i][i])
    somaDP += poluicao[i][i]

  }

  console.log(`Média da Diagonal Principal: ${somaDP / poluicao.length}`)


  // Diagonal Secundária
  // a formula 4-i é usado para acessar os valores corretos
  let somaDS = 0

  console.log(`\nDiagonal secundária:`)
  for (let i = 0; i < 5; i++) {
    console.log(poluicao[i][4-i])
    somaDS += poluicao[i][4-i]
    
  }

  console.log(`Média da Diagonal Secundária: ${somaDS / poluicao.length}`)


  // Região e Dia com Maior Índice de Poluição
  let maior = poluicao[0][0]
  let rMaior = 0 // guarda a posição da região
  let dMaior = 0 // guarda a posição do dia

  for (let r = 0; r < 5; r++) {

    for (let d = 0; d < 5; d++) {

      if (poluicao[r][d] > maior) {
        maior = poluicao[r][d]
        rMaior = r
        dMaior = d
        
      }
    }
  }
  
  console.log(`\nMaior nível de poluição: ${maior}`)
  console.log(`Na região: ${regioes[rMaior]}`)
  console.log(`No dia: ${dias[dMaior]}`) 


  // Qtde de Níveis Críticos
  // acima de 300 é considerado um nível crítico
  let critico = 0

  for (let r = 0; r < 5; r++) {

    for (let d = 0; d < 5; d++) {

      if (poluicao[r][d] > 300) {
        critico++

      }
    }
  }

  console.log(`\nQuantidade de níveis críticos: ${critico}`)


  // Encontrar a Média 
  // de cada região ao longo de 5 dias
  let medias = []
  let somaDias = 0

  for (let r = 0; r < poluicao.length; r++) {
    somaDias = 0 // reseta para calcular dnv

    for (let d = 0; d < poluicao.length; d++) {
      somaDias += poluicao[r][d] // soma de todos os índices

    }
    medias.push(somaDias / poluicao.length) // coloca a média dentro do vetor

  }


  // Região com Menor Média de Poluição
  let menor = medias[0]
  let rMenor = 0 // guardar a posicão da região

  for (let i = 0; i < medias.length; i++) {

    if (medias[i] < menor) {
      menor = medias[i]
      rMenor = i

    }
  }

  console.log(`Menor média de poluição: ${menor}`)
  console.log(`Foi da região: ${regioes[rMenor]}`)


} // 