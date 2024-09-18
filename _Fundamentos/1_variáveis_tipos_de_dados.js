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

//Ferramenta para avaliar o tipo TYPEOF
//Typeof -> Operador de avaliação de tipo

console.log(typeof numero);
console.log(typeof numero2);
console.log(typeof UmTexto);

//Tipo de dado boolean, com dois possíveis valores: true, false

let estaChovendo = false;

console.log(estaChovendo); // Vai retornar o valor false
console.log(typeof estaChovendo); //Vai retornar o tipo de dado, que é boolean

console.log(10>5); //comparação, resulta em true ou false


//Variável do tipo nulo:

let semValor = null;
console.log(semValor); // vai retorar o tipo de dado NULL

console.log(typeof semValor); //vai resultar como um tipo object

//Tudo é objeto no JS, vários tipos de dados é originado como objeto no JS

let indefinido;

console.log(indefinido);
console.log(typeof indefinido); // vai retornar o tipo de  dado undefined

// Nulo = Quando inicio algo nulo
//Undefined = Quando eu esqueço de colocar um valor

//Arrays e objetos será falado mais à frente do curso

//Tipagem dinâmica

let variavel  = 100;
console.log(typeof variavel); // Vai retornar tipo number

variavel = "texto";
console.log(typeof variavel); // Vai retornar tipo string

//Concatenar string = unir;

let primeiroNome = "Gessyca";
let sobrenome = "Nóbrega";

//Nome + Sobrenome

let nomeCompleto = primeiroNome + " "+ sobrenome;
console.log(nomeCompleto);

//Também posso unir textos com a variável

console.log("Olá, " + nomeCompleto + "tudo bem?")

//Operações aritméticas

console.log(10 + 5);
console.log(10 - 5);
console.log(10 / 5);
console.log(10 * 5);

//Comparações
console.log(10 > 5);
console.log(10 < 5);

//Toda comparação retorna um booleano

// >= , <= - Maior ou igual, menor ou igual
// == , == - Para verificar se o dados é igual e se o tipo dele também é igual 

console.log(10 > 10); 
console.log(10 >= 10);
console.log(10 == 10);
console.log(10 === 10); // melhor sempre usar esse quando se trata de igualdade, para que possa se assegurar do seu tipo também 
// "=" não é igual a "=="

//"=" -> Atribuição de valor
// "==" e "===" -> Comparação