// exercicio 1
let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite o segundo número:"));

if (n1 > n2) {
  console.log("O maior número é: " + n1);
} else if (n2 > n1) {
  console.log("O maior número é: " + n2);
} else {
  console.log("Os números são iguais.");
}

// exercico 2

let valor = parseInt(prompt("Digite um valor: "));

if (valor > 0) {
  console.log("O valor é positivo.");
} else if (valor < 0) {
  console.log("O valor é negativo.");
} else {
  console.log("O valor é zero.");
}

// exercicio 3

let letra = prompt("Digite uma letra:").toLowerCase();

if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
  console.log("A letra digitada é uma vogal.");
} else {
  console.log("A letra digitada é uma consoante.");
}

// exercicio 4

let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));

// Cálculo da média
let media = (nota1 + nota2) / 2;

// Verificação do resultado
if (media === 10) {
  console.log("Aprovado com Distinção");
} else if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// exercicio 5


let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let num3 = parseInt(prompt("Digite o terceiro número:"));

// verifica qual é o maior número
let maior = num1;
if (num2 > maior) {
  maior = num2;
}
if (num3 > maior) {
  maior = num3;
}

// mostra o maior número na tela
alert("O maior número é: " + maior);

//exercicio 6

// Pergunta o preço de três produtos
let preco1 = parseFloat(prompt("Digite o preço do primeiro produto:"));
let preco2 = parseFloat(prompt("Digite o preço do segundo produto:"));
let preco3 = parseFloat(prompt("Digite o preço do terceiro produto:"));

// Compara os preços e identifica o mais barato
let maisBarato;
if (preco1 < preco2 && preco1 < preco3) {
    maisBarato = "primeiro produto";
} else if (preco2 < preco1 && preco2 < preco3) {
    maisBarato = "segundo produto";
} else {
    maisBarato = "terceiro produto";
}

// Exibe o resultado
alert("Você deve comprar o " + maisBarato + ".");

// exercicio 7

const turno = prompt("Em que turno você estuda? Digite M-matutino, V-vespertino ou N-noturno");

if (turno.toUpperCase() === "M") {
  console.log("Bom Dia!");
} else if (turno.toUpperCase() === "V") {
  console.log("Boa Tarde!");
} else if (turno.toUpperCase() === "N") {
  console.log("Boa Noite!");
} else {
  console.log("Valor Inválido!");
}

// ecxeercicio 8 

// solicita ao usuário a nota em sistema numérico
var nota = prompt("Digite a nota:");

// converte a nota para um número inteiro
nota = parseInt(nota);

// verifica em qual intervalo a nota se encontra e exibe a nota em caracteres
if (nota >= 90) {
    document.write("A");
} else if (nota >= 80) {
    document.write("B");
} else if (nota >= 70) {
    document.write("C");
} else if (nota >= 60) {
    document.write("D");
} else {
    document.write("F");
}

// exercicio 9

let num = prompt("Digite um número de 1 a 7:");

switch (num) {
  case "1":
    console.log("Domingo");
    break;
  case "2":
    console.log("Segunda-feira");
    break;
  case "3":
    console.log("Terça-feira");
    break;
  case "4":
    console.log("Quarta-feira");
    break;
  case "5":
    console.log("Quinta-feira");
    break;
  case "6":
    console.log("Sexta-feira");
    break;
  case "7":
    console.log("Sábado");
    break;
  default:
    console.log("Valor inválido");
    break;
}

