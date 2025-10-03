function alterarNumero(x) {
  x = 100
}
function alterarVetor(v) {
  v[0] = 100
}
function main() {
  // passagem de parâmetro por valor
  let a = 10
  alterarNumero(a)
  console.log(`A: ${a}`)
  
  // passagem de parâmetro por referência
  let v = [10, 20, 30]
  alterarVetor(v)
  console.log(`Vetor: ${v}`)
}
main()