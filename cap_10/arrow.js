/*

Funções anonimas são aquelas que não são atribuidas
a nenhuma variavel.

As arrows functions surgem como uma nova forma de declarar
uma função. São menos verbosas e possui contexto de execução
diferente das demais.

*/

// Declaração de função
function desligar() {
}

// Expressão de função
const funcaoDesligar = function () {
}

const boasVindas = nome => `Seja bem vindo, ${nome}`

const equipe = {
  nome: 'Guerreiros	Z',
  membros: ['Goku', 'Kuririn', 'Vegeta'],
  membrosDaEquipe: function () {
    this.membros.forEach(membro => {
      console.log(`${membro} é	da equipe ${this.nome}`)
    })
  }
}

console.log(equipe.membrosDaEquipe())

// A arrow function referencia sem problemas o contexto fora dela
// como pode-se notar no exemplo acima.
