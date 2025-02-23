/*

É uma forma de extrair valores dos arrays e objetos. É possível
obter propriedades específicas com base na desestruturação.
*/

const Usuario = {
  nome: '	Elliot',
  sobrenome: 'Alderson',
  senha: 'mrrobot',
  email: 'elliot.alderson@gmail.com',
  profissao: 'Engenheiro	de	Cibersegurança',
  github: 'https://github.com/ElliotAlderson'
}

const { email } = Usuario

console.log(Usuario.email)
console.log(email)

// Rotulando propriedades
const Pessoa = {
  sobrenome: 'Muller'
}

const { sobrenome: apelido } = Pessoa

console.log(apelido)

// Desestruturando mais de um objeto
const suco = {
  sabor: 'uva',
  quantidade: '500ml'
}

const doce = {
  tipo: 'açucar'
}

function descreveSuco({ sabor, quantidade }, { tipo }) {
  return `Este suco é de sabor ${sabor} e possui ${quantidade} adocicado	com	${tipo}`
}

console.log(descreveSuco(suco, doce))

// Desestruturando arrays
const [cor1, , , cor2, cor3] = ['azul', 'cinza', 'branco', 'preto'];
console.log(cor1, cor2, cor3)

const contatos = [
  {
    nome: 'Alex	Júnior',
    numero: '1234-5678'
  },
  {
    nome: 'Carolina	Moya',
    numero: '1234-6789'
  },
  {
    nome: 'Fernando	Jorge',
    numero: '1234-5567'
  }
]

const [,carolina] = contatos

function mostrarNumero({ numero }) {
  return numero
}
console.log(mostrarNumero(carolina))

const rotas = {
  rapidas: ['Rodovia', 'Estrada']
}

const { rapidas: [rapida] } = rotas
console.log(rapida)
