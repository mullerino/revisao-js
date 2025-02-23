/*

Um objeto é uma coleção de propriedades onde cada propriedade
associa a uma chave/valor.

É possivel criar objetos por meio de um construtor ou de
forma literal.

*/

function Livro(titulo) {
  this.titulo = titulo
}

const livro = new Livro("Teste")
console.log(livro.titulo)

// Criar utilizando o objeto literal significa que a referencia será fixa
// Portanto, mesmo se criar uma nova variável, a referencia não mudará.

const livro2 = {
  titulo: 'teste 2'
}

console.log(livro2.titulo)

const outroLivro = livro2
livro2.titulo = 'teste 3'

console.log(livro2.titulo)
console.log(outroLivro.titulo)

// Ao passar uma propriedade diretamente, a chave assume o mesmo nome dela:

const nome = 'Maria'
const sobrenome = 'Madalena'
const pessoa = { nome, sobrenome }

console.log(pessoa.nome, pessoa.sobrenome)

/*

O JSON (javascript object notation) é um subconjunto da notação
de objetos literais, mais leve. 

É um formato adotado para troca de dados entre sistemas, 
principalmente api's do tipo REST (Representation State Transfer)

Diferenças:
1- Chaves devem estar entre aspas
2- Valores não podem ser funções
3- Strings devem estar em aspa dupla

*/
