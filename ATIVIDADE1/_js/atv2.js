var nome = prompt("Digite o seu nome a seguir: ")
var nota1 = parseFloat(prompt("Digite a sua primeira nota: "))
var nota2 = parseFloat(prompt("Digite a sua segunda nota: "))
var nota3 = parseFloat(prompt("Digite a sua terceira nota: "))

var media = (nota1 + nota2 + nota3) / 3
media = media.toFixed(2)

document.write("<h1>Cálculo de Média</h1>")

document.write("<p>Seja bem-vindo aluno: <b>", nome + "</b></p>")
document.write("<p>Sua primeira nota foi: <b>", nota1 + "</b></p>")
document.write("<p>Sua segunda nota foi: <b>", nota1 + "</b></p>")
document.write("<p>Sua terceira nota foi: <b>", nota1 + "</b></p>")
document.write("<p>E por fim, a sua média foi: <b>", media + "</b></p>")

if (media >= 0 && media <= 5) {
    document.write("<p id='reprovado'>Reprovado.</p>")
}
else if (media > 5 && media < 7) {
    document.write("<p id='recuperacao'>Recuperação.</p>")
}
else if (media > 7 && media <= 10) {
    document.write("<p id='aprovado'>Aprovado!!</p>")
}
else {
    document.write("<p>Algum valor informado está incorreto, tente novamente.</p>")
}
