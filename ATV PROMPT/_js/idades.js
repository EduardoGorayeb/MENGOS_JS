var ano = prompt("Digite o ano atual: ")
var velha = prompt("Digite o ano de nascimento da pessoa mais velha: ")
var nova = prompt("Digite o ano de nascimento da pessoa mais nova: ")

ano = parseInt(ano)
velha = parseInt(velha)
nova = parseInt(nova)

var idade_v = ano - velha
var idade_n = ano - nova

var diferenca = nova - velha

document.write("<p>O ano atual é: ", ano)
document.write("<p>A idade da pessoa mais velha é: ", idade_v + "</p>")
document.write("<p>A idade da pessoa mais nova é: ", idade_n + "</p>")
document.write("<p>A diferença de idade entre a pessoa mais velha e a pessoa mais nova é de: ", diferenca + "</p>")