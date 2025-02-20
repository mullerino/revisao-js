/*

O método every retorna um boolean, é usado para validar
se os itens respeitam uma certa condição.

Retorna false caso qualquer elemento não respeite
a condição imposta, a partir da primeira ocorrência.

*/


const alunos = [
  { nome: 'joão', idade: 15 },
  { nome: 'josé', idade: 18 },
  { nome: 'maria', idade: 20 }
]

const todosAlunosDeMaior = alunos.every(aluno => aluno.idade >= 18)

console.log(todosAlunosDeMaior)


/*

O método some é semelhante ao every, no entanto, caso um dos
itens do array corresponder a condição imposta, o retorno é true.

*/

const pesoDasMalas = [23, 12, 21, 28]
const temMalaAcimaDoPeso = pesoDasMalas.some(pesoDaMala => pesoDaMala > 20)
console.log(temMalaAcimaDoPeso)
