/*

Weakmap é uma coleção de pares onde as chaves só 
podem ser objetos.

As referencias dos objetos são fracamente mantidas, possíveis
de serem eliminadas pelo garbage collector
*/

const weakMap = new WeakMap()
const obj = {}
function funcao(){}

weakMap.set("string", 'elemento 1')
weakMap.set(obj, 'elemento 2')
weakMap.set(funcao, 'elemento 3')

// Garbage collector é um processo automatizado de gerencimamento
// da memória, limpando processos que não estão sendo usados.
 

// Sua vantagem é a garantia de prevenir o memory leak
