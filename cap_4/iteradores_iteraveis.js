/*

Iterador é um objeto que sabe acessar, um a um, os itens de
um elemento iterável.

Retorna um objeto com as propriedades value e done.

Iteraveis são definidos quando é possível obter explicitamente
o comportamento de iteração, como arrays, strings, maps, sets.

Iteradores são Lazy, não sabem a quantidade total de itens a 
ser iterados!
*/

const bruxos = ['Harry poter', 'Hermione Granger']

const iteradorBruxos = bruxos[Symbol.iterator]()

iteradorBruxos.next() // { value: Harry Poter, done: false }
iteradorBruxos.next() // { value: Hermione Granger, done: false}
iteradorBruxos.next() // { value: undefined, done: true }

// Chapeu seletor

function fazerSelecaoDaCasa(bruxo) {
  console.log(`aluno: ${bruxo} | casa: Grifinória`)
}

const iterador = bruxos[Symbol.iterator]()

let done = false
let next = iterador.next()

while (!next.done) {
  const bruxo = next.value
  fazerSelecaoDaCasa(bruxo)
  next = iterador.next()
}
