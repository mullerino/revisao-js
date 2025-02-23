/*

São funções que podemos interromper e retornar sua execução n vezes


*/

function* percorrerLinha1() {
  console.log('Passei pela rua 1')
  yield 'Parada 1'
  console.log('Passei pela rua 2')
  yield 'Parada 2'
}

const linha = percorrerLinha1()
for( let parada of linha) {
  console.log(parada)
}
