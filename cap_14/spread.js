/*
O operador spread permite que uma expressão seja expandida. Funciona 
de forma oposta ao operador rest.

Trata os elementos individualmente. Agrupa n elementos em um array.

*/

const argumentos = [1, 2, 3]
console.log(...argumentos)

const listaMae = ['leite', 'ovos', 'papel'];
const listaNamorada = ['arroz', 'feijão', 'suco']

const listaCompleta = [...listaMae, ...listaNamorada]
console.log(listaCompleta)
