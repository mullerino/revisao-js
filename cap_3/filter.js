/*
O metodo filter itera sobre o array e aplica um filtro nos itens dele

Retorna um novo array
*/

const alunos = [
  {nome:'joão',	idade:15},
  {nome:'josé',	idade:18},
  {nome:'maria', idade:20}
]

const alunosDeMaior = alunos.filter(aluno => aluno.idade >= 18)

console.log(alunosDeMaior)

