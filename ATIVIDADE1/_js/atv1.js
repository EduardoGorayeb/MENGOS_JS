var peso = parseFloat(prompt("Digite o seu peso em quilogramas (kg): "))
var altura = parseFloat(prompt("Digite a sua altura em metros (m): "))

var imc = peso / (altura ** 2)
imc = imc.toFixed(2)

document.write("<h1>Cálculo de Índice de Massa Corporal (IMC)</h1>")
document.write("<p>O Índice de Massa Corporal (IMC) é uma medida utilizada para avaliar se uma pessoa está dentro do peso considerado saudável para sua altura.<br>Embora não leve em consideração a composição corporal, como a proporção de massa muscular e gordura, o IMC é uma ferramenta útil para alertar sobre riscos à saúde e incentivar a adoção de um estilo de vida mais saudável.</p>")

document.write("<p>Sua altura é de: <b>", altura + "m</b></p>")
document.write("<p>Seu peso é de: <b>", peso + "kg</b></p>")
document.write("<p>E por fim, o seu IMC é: <b>", imc + "</b></p>")

if (imc < 18.5) {
    document.write("<p id='classimc'>De acordo com a tabela de IMC indicada abaixo, você está <b>Abaixo do peso normal</b>.</p>")
}
else if (imc >= 18.5 && imc <= 24.99) { 
    document.write("<p id='classimc'>De acordo com a tabela de IMC indicada abaixo, você está com <b>Peso normal</b>.</p>")
}
else if (imc >= 25 && imc <= 29.99) {
    document.write("<p id='classimc'>De acordo com a tabela de IMC indicada abaixo, você está <b>Acima do peso normal</b>.</p>")
}
else if (imc >= 30 && imc <= 34.99) {
    document.write("<p id='classimc'>De acordo com a tabela de IMC indicada abaixo, você está com <b>Obesidade Grau I</b>.</p>")
}
else if (imc >= 35 && imc <= 39.99) {
    document.write("<p id='classimc'>De acordo com a tabela de IMC indicada abaixo, você está com <b>Obesidade Grau II</b>.</p>")
}
else if (imc >= 40) {
    document.write("<p id='classimc'>De acordo com a tabela de IMC indicada abaixo, você está com <b>Obesidade Grau III</b>.</p>")
}
else {
    document.write("<p id='classimc'>Você inseriu algum valor inválido. Tente novamente.")
}