var num1 = prompt("Digite o primeiro número: ");
var num2 = prompt("Digite o segundo número: ");

num1 = parseInt(num1);
num2 = parseInt(num2);

var soma = num1 + num2;
var subtra = num1 - num2;
var multipli = num1 * num2;
var divisao = num1 / num2;

document.write("A<p> soma dos números é: ", soma + "</p>")
document.write("<p>A subtração dos números é: ", subtra + "</p>");
document.write("<p>A multiplicação dos números é: ", multipli + "</p>");
document.write("<p>A divisão dos números é: ", divisao + "</p>");