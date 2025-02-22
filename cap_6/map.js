/*

Mapas são estruturas de dados onde pode-se associar uma chave
a um valor. Um objeto é um mapa.

No map, é possível usar qualquer valor(objetos, funções..) 
como chave ou valor.

Utilizado quando precisamos de chaves que não são strings,
quando há remoção/adição de pares chave/valor.
*/

const map = new Map()
const obj = {}
function funcao(){}

map.set("string", "sou string")
map.set(obj, "sou obj")
map.set(funcao, "sou função")

console.log(map.get("string"))

// Possui alguns métodos (has, delete, size, clear)

console.log(map.size)

// O map é iteravel, portanto pode-se usar forof por meio dos
// métodos keys, values e entries

for(let chave of map.keys()){
  console.log(chave)
}

for(let chave of map.entries()){
  console.log(chave)
}

// Utiliza-se objeto quando temos número fixo de chaves!

