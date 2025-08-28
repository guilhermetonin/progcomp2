function indicePoluicao() {
  
  // regioes e dias
  let regioes = []
  let dias = []

  for (let r = 0; r < 5; r++) {
    regioes.push(prompt(`Digite o nome da região ${r+1}: `))

  }

  for (let d = 0; d < 5; d++) {
    dias.push(Number(prompt(`Digite o dia ${d+1}: `)))

  }


  // índice de poluição
  let poluicao = []

  for (let r = 0; r < 5; r++){ 
    poluicao[r] = []

    for (let d = 0; d < 5; d++) {
      do {
        poluicao[r][d] = (Number(prompt(`Índice da poluição da região ${regioes[r]} no dia ${dias[d]}:`)))
      }
      while (poluicao[r][d] < 0 || poluicao[r][d] > 500)

    }
  }

  // d. principal
  let somaDP = 0

  for (let i = 0; i < poluicao.length; i++) {
    console.log(`Diagonal principal: ${poluicao[i][i]}`)
    somaDP += poluicao[i][i]
  }

  console.log(`Média da Diagonal Principal: ${somaDP / poluicao.length}`)

  // d. secundária
  let somaDS = 0

  for (let i = 0; i < 5; i++) {
    console.log(`Diagonal secundária: ${poluicao[i][4-i]}`)
    somaDS += poluicao[i][4-i]
  }

  console.log(`Média da Diagonal Secundária: ${somaDS / poluicao.length}`)

  // maior
  let maior = poluicao[0][0]
  let rMaior = 0
  let dMaior = 0

  for (let r = 0; r < 5; r++) {

    for (let d = 0; d < 5; d++) {
      if (poluicao[r][d] > maior) {
        maior = poluicao[r][d]
        rMaior = r
        dMaior = d
        
      }
    }
  }
  
  console.log(`Maior nível de poluição foi ${maior} na região ${regioes[rMaior]} no dia ${dias[dMaior]}`)

  // nivel critico
  let critico = 0

  for (let r = 0; r < 5; r++) {

    for (let d = 0; d < 5; d++) {
      if (poluicao[r][d] > 300) {
        critico++

      }
    }
  }

  console.log(`Quantidade de níveis críticos: ${critico}`)


  // menor

  let medias = []
  let somaDias = 0

  for (let r = 0; r < poluicao.length; r++) {
    somaDias = 0

    for (let d = 0; d < poluicao.length; d++) {
      somaDias += poluicao[r][d]

    }
    medias.push(somaDias / poluicao.length)

  }

  let menor = medias[0]
  let rMenor = 0

  for (let i = 0; i < medias.length; i++) {
    if (medias[i] < menor) {
      menor = medias[i]
      rMenor = i
    }
  }

  console.log(`Região com menor média: ${menor} foi ${regioes[rMenor]}`)


} // 