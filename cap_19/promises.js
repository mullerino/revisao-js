/*

Objetos que auxiliam a trabalhar com operações assincronas.

Uma promise é uma alternativa criada para lidar com resultados
de operações assíncronas.

O maior problema era o aninhamento de callbacks quando eram feitas
muitas operações assincronas, o que prejudicava bastante a legibilidade
e manutenção do código.

*/

let promise = new Promise((resolve, reject) => {
  const result = true
  if (result) {
    resolve("deu certo")
  } else {
    reject("deu errado")
  }
})

promise.then((data) => console.log(data))

// Lidando com erros

let promise1 = new Promise((resolve, reject) => {
  throw new Error('erro!')
  resolve('ok!')
});

promise1
  .then((data) => console.log(`sucesso:	${data}`))
  .catch((data) => console.log(`falha:	${data}`))
