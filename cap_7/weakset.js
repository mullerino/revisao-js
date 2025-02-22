/*

Semelhante ao weekMap, o weekSet não previne os seus elementos
de serem coletados pelo garbage collector. 

Só é possivel adicionar objetos, a estrutura não é iterável e
não podemos remover todos os elementos de uma vez, não possui 
o método clear.

*/

let musica1 = {
  titulo: 'Musica',
  autor: 'Autor'
}

const musicas = new WeakSet([musica1])

console.log(musicas)

musica1 = null

console.log(musicas)
