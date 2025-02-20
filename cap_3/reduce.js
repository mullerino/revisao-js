/*

O método reduce visa condensar o array em um único item

Possui dois parâmetros: (função, valor inicial)

*/

const numeros = [1, 2, 3, 4]

let soma = 0

soma = numeros.reduce((soma, numero) => soma + numero)

console.log(soma)

// Exemplo 02 para ter uma lista apenas com o nome

const alunos = [
  { nome: 'joão', idade: 15 },
  { nome: 'josé', idade: 18 },
  { nome: 'maria', idade: 20 }
]

const nomes = alunos.reduce((arrayNomes, aluno) => {
  arrayNomes.push(aluno.nome)
  return arrayNomes
}, [])

console.log(nomes)
