/*

O forof é um laço que funciona unicamente para objetos
iteraveis.

Usado para percorrer todos os valores de arrays, set e maps.

Quando o objeto não é iteravel, há um erro indicando que o 
iterator não é uma função.
*/

const numeros = [1, 2, 3, 4]

for(const numero of numeros) {
  console.log(numero)
}

/*

O forin percorre os nomes dos atributos do objeto, já o
forof percorre os valores.

*/

const perfilFacebook = {
  nome: 'Muller',
  idade: 24
}

for(const propriedade in perfilFacebook) {
  const info = perfilFacebook[propriedade]
  console.log(info)
}
