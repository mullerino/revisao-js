/*

Break e Continue são palavras reservadas relacionadas a um laço.

O break interrompe a execução do laço, já o contine indica
que o laço deve continuar :)

*/

const numeros = [1, 2, 3]

for(const numero of numeros) {
  if(numero > 2) {
    break
  }
  console.log(numero)
}
