function analiseVendas() {

  let vendas = []
  let nomes = []

  // preencher
  for (let i = 0; i < 4; i++) {
    vendas[i] = []
    nomes[i] = prompt(`Nome do vendedor:`)

    for (let k = 0; k < 7; k++) {
      vendas[i][k] = parseInt(Math.random() * 100)
    }

  }
  console.log(vendas)

  // total cada vendedor
  let totalVendedor = 0

  for (let i = 0; i < vendas.length; i++) { // vendedores
    totalVendedor = 0

    for (let k = 0; k < vendas[i].length; k++) { // dias
      totalVendedor += vendas[i][k]
    }
    
    console.log(`Vendedor ${nomes[i]} - vendeu: ${totalVendedor}`)
  }
  
  // total por dia
  let totalDia = 0

  for (let k = 0; k < 7; k++) {
    totalDia = 0

    for (let i = 0; i < 4; i++) {
      totalDia += vendas[i][k]
    }

    console.log(`Dia ${k+1} - total: ${totalDia}`)
  }
  
  // maior e sua posição
  let maior = vendas[0][0]
  let iMaior = 0
  let kMaior = 0

  for (let i = 0; i < 4; i++) {
    
    for (let k = 0; k < 7; k++) {
      if (maior < vendas[i][k]) {
        maior = vendas[i][k]
        iMaior = i
        kMaior = k
      }
    }

  }
  console.log(`Maior valor: ${maior} | Posição: [${iMaior}] [${kMaior}]`)

  // média
  let media = 0
  for (let i = 0; i < 4; i++) {

    for (let k = 0; k < 7; k++) {
      media+= vendas[i][k]
    }
  }
  console.log(`Média Geral: ${media / (vendas.length * vendas[0].length)}`)
  
}
