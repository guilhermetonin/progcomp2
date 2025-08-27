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