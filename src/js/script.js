// DECLARAÇÕES E VARIAVEIS
// VAR, LET E CONST

var nome="Fiap";
console.log(nome);
var nome="Dev";
console.log(nome);

if(true){
    var avatar="Fiapinho";
}

console.log(avatar);

let exemplo1="ola dev-let";
console.log(exemplo1)

const exemplo2="ola dev-const";
console.log(exemplo2)

let exemplo3="20";
console.log(typeof exemplo3)

let exemplo4=true;
console.log(typeof exemplo4);

let exemplo5={nome:"fiap"};
console.log( exemplo5)

let exemplo6=["PHP","JAVA","HTML"]
console.log(exemplo6)

//VALOR INDEFINIDO

let exemplo7;
console.log(exemplo7)

//VALOR NULO
let exemplo8=null;
console.log(exemplo8)

//OPERADORES ARITMÉTICOS

const valor1=10;
const valor2=20;

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 / valor2);
console.log(valor1 * valor2);

//OPERADORES LÓGICOS

const valor3=40;
const valor4=20;

console.log(valor3 > valor4);
console.log(valor3 < valor4);
console.log(valor3 > valor4 && valor4 < 0);
console.log(valor3 == valor4 || valor4 >10);

//OPERADORES DE COMPARAÇÃO

console.log(valor3 == valor4); //COMPARA
console.log(valor3 === valor4); //COMPARA E VERIFICA O TIPO

/*
Utilizando as variáveis p (preço do produto) e v(valor do desconto),
crie uma nova váriavel chamada precofinal que subtraia o desconto
do preço e exiba o resultado.
*/

const p=100;
const v=50;
const precofinal= p - v; 
console.log("O desconto é de :",precofinal,"Reais")

//ESTRUTURA CONDICIONAL

//if
if(true){
    console.log("verdadeiro")
}
let nome="Fiap";
 if(nome1 =="Fiap"){
    console.log("Nome correto")
 }else{
    console.log("Nome errado")
 }

 //if, if else, else encadeado/alinhado

 let idade=13;

 if(idade <= 13){
    console.log("Uma criança")
 }else if(idade >13 && idade <18){
    console.log("Um adolescente")
 }else{
    console.log(Um adulto)
 }

 //switch case

 let times="Flamengo"

 switch(times){
    case "flamengo":
        console.log("flamengo é seleção")
        break;
    case "são paulo":
        console.log("sem tradiçao")
        break;
    case "palmeiras":
        console.log("sem mundial")
        break;
    default:
        console.log("nenhuma das opções")  
 }

 //CONDICIONAL TERNARIA

 let numero =100;
 let resultado = numero==100 ? "certo":"errado";
 console.log(resultado)

 let usuario="Fiap";
 let usuariologado=usuario=="Fiap" ? "logado com sucesso":"usuario invalido"
 console.log("usuariologado")
