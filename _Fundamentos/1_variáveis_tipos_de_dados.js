//Variáveis

// "//" comentário de linha

/*
Comentário de múltiplas linhas
*/

//3 formas de criar variável

//var let const

//Variável é a forma que salvamos valores na memória

//Sintaxe: TIPO(var, let, const) NOME = VALOR;

//strings = textos, '' ou ""

var nome = "Matheus";
console.log(nome);
console.log("Matheus");

// let -> substituir o var 
//mesma sintaxe do var

let idade = 25;

/* diferença entre let e var é o escopo {} -> O var ocntamina muito o escopo da programação js, já o let respeira toda abertura e fechamento de bloco */


// tanto let quanto var permitem reatribuição de valores

nome = "Pedro";
idade = 30;
console.log(nome,idade);

/* A outra forma de a const, que iremos utilizar para valores constantes e não  irá permitir reatribuição */

const pi = 3.14;

/* A programação segue o padrão americano de números. No Brasil escrevemos o pi como 3,14, mas na programação usamos o ponto ao invés da vírgula */

console.log(pi);


//var, let, const => usar somente let e const


//Tipos de dados -> número, texto

let numero = 41;
let numero2 = 41.5;
console.log(numero,numero2);

//Em JS não há diferença entre interios e números com casas decimais

let umTexto = "Meu número é 12";
console.log(umTexto);