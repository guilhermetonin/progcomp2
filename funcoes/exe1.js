function mostrarDobro(x) {
  console.log(x * 2)
}
function calcularQuadrado(x) {
  return (x * 2)
}
function main() {
  let n = Number(prompt(`Digite um número inteiro`))
  mostrarDobro(n)
  let q = calcularQuadrado(n)
  console.log(`Quadrado de ${n} é ${q}`)
}
main()