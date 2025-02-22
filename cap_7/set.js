/*

O set pode ser usado quando queremos apenas valores únicos
em nosso array/object/map.

*/

// Implementação antes do método set usando indexOf

const set = new Set()
set.add(1)
set.add(2)
set.add(1)

for	(const valor of set)	{
  console.log(valor)
}

var	musicas	=	new	Set(['musica1', 'musica2'])

musicas.delete('musica1')

for(var	musica of musicas)	{
  console.log(musica)
}
