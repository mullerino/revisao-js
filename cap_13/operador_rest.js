/*

O operador rest permite representar n argumentos em um array.
O que nos permite utilzar métodos auxiliares dos arrays.

Só funciona no último argumento de uma função!
*/

function somar(...valores){
  let soma = 0
  const qtd = valores.length

  for(let i = 0; i < qtd; i++) {
    soma += valores[i]
  }

  return soma
}

console.log(somar(2,3,4))

// Aplicando métodos auxliares na função somar

function somarNumeros(...valores) {
  return valores.reduce((soma, valor) => {
    return soma+valor
  }, 0)
}

console.log(somarNumeros(2,3,4))
