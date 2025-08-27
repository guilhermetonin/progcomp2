function matriz() {
  
  let mat = []

  // preencher
  for (let i = 0; i < 3; i++) {
    mat[i] = []
    for (let k = 0; k < 3; k++) {
      mat[i][k] = Number(prompt(`Linha ${i+1} - Digite o número ${k+1}`))
      // parseInt(Math.random() * 10) // RNG
    }
  }

  //  soma e pares
  let soma = 0
  let qtdePares = 0

  for (let i = 0; i < mat.length; i++) {
    for (let k = 0; k < mat[i].length; k++) {
      soma+= mat[i][k]

      if (mat[i][k] % 2 === 0) {
        qtdePares++
      }
    }
  }

  // exibir
  console.log(`Soma total: ${soma}`)
  console.log(`Qtde de pares: ${qtdePares}`)

  // diagonal secundária
  for (let i = 0; i < mat.length; i++) {
      console.log(mat[i][mat[i].length -1 - i])
    }

}