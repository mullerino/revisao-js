/*
O MAP é utilizado quando queremos iterar sobre um array 
e realizar alguma modificação nos itens do array. 

Retorna um novo array, o que mantem a integradidade do array
de referência.
*/

const numeros = [1,2,3]
const novosNumeros = numeros.map(numero => {
  return numero ** 2
})
console.log(novosNumeros)
