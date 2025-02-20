/*
O método find é utilizado quando é necessário encontrar
um item específico dentro do array.
*/

const alunos = [
  { nome: 'joão' },
  { nome: 'josé' },
  { nome: 'maria' }
]

const aluno = alunos.find(aluno => aluno.nome === 'josé')

console.log(aluno)

