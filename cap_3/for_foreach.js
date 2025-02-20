// O capitulo trata dos métodos de interação de um array

/*
O problema do FOR está relacionado a necessidade de olhar sua implementação
para entender o porquê ele está sendo usado. 
*/
const frutas = ["abacaxi", "maça", "uva"]
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
}

/*
O foreach é utilizado quando queremos passar por todos os elementos do array
*/
const nomes = ["leandro", "maria", "joão"]
nomes.forEach(nome => {
  console.log(nome)
})

function imprimeNome(nome)	{
  console.log(nome);
}

 // Posso passar uma função existente no lugar da função anônima
nomes.forEach(imprimeNome)

// Nesse caso, RedeTv é adicionado a cada iteração mas não será exibida no console uma vez que ao iniciar a iteração ela não existia
const	canais	=	["Globo",	"Sbt",	"Record"]
canais.forEach(canal => {
  canais.push("RedeTV")
  console.log(canal)
})



