var num1 = parseInt(prompt("Digite o primeiro número INTEIRO: "))
var num2 = parseInt(prompt("Digite o segundo número INTEIRO: "))
var num3 = parseInt(prompt("Digite o terceiro número INTEIRO: "))

document.write("<p>Primeiro número: ", num1 + "</p>")
document.write("<p>Segundo número: ", num2 + "</p>")
document.write("<p>Terceiro número: ", num3 + "</p><br><br>")

if (num1 > num2 && num1 > num3) {
    var maior = num1
    if (num2 > num3) {
        var menor = num3
    }
    else {
        var menor = num2
    }
}
else if (num2 > num1 && num2 > num3) {
    var maior = num2
    if (num1 > num3) {
        var menor = num3
    }
    else {
        var menor = num1
    }
}
else {
    var maior = num3
    if (num1 > num2) {
        var menor = num2
    }
    else {
        var menor = num1
    }
}

document.write("<p>O maior número é: <b>", maior + "</b></p>")
document.write("<p>E o menor número é: <b>", menor + "</b></p>")
