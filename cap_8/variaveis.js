/*

Js é fracamente tipada, uma vez que as variáveis não 
possuem nenhum tipo predeterminado. O tipo é definido
pelo seu valor

*/


/* 

Uso de const para variáveis que não mudam de valor 
com decorrer da execução, dentro de um escopo.

Lembrando que a referência que é constante!

*/

const pessoa = { nome: 'joão' };
const novaPessoa = { nome: 'maria' };
pessoa = novaPessoa;
//TypeError: Assignment	to constant variable.


// O let é um tipo de variável que pode-se alterar o valor
// ao decorrer da execução.


// Principais vantagens da criação de let e const

// Diferença de escopo
// Legibilidade
// Hoisting -> A variável do tipo const e let é inacessivel até que a execução alcance sua declaração
