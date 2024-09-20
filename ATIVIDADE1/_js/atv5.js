var sinal = prompt("Digite o número correspondente a operação desejada:\n\n'1' para Adição\n'2' para Subtração\n'3' para Multiplicação\n'4' para Divisão\n'5' para Potenciação\n'6' para Resto de porcentagem")

document.write("<h1>Simulador de Calculadora</h1>")

switch(sinal) {
    case '1':
        var num1 = parseFloat(prompt("Digite o primeiro número para realizar a operação: "))
        var num2 = parseFloat(prompt("Digite o segundo número para realizar a operação: "))

        var soma = num1 + num2

        document.write("<p id='operacao'>Operação: ", num1 + " + ", num2 + "</p>")
        document.write("<p id='resultado'>Resultado da Soma: ", soma + "</p>")
        break
    case '2':
        var num1 = parseFloat(prompt("Digite o primeiro número para realizar a operação: "))
        var num2 = parseFloat(prompt("Digite o segundo número para realizar a operação: "))

        var subtracao = num1 - num2

        document.write("<p id='operacao'>Operação: ", num1 + " - ", num2 + "</p>")
        document.write("<p id='resultado'>Resultado da Substração: ", subtracao + "</p>")
        break
    case '3':
        var num1 = parseFloat(prompt("Digite o primeiro número para realizar a operação: "))
        var num2 = parseFloat(prompt("Digite o segundo número para realizar a operação: "))

        var multiplicacao = num1 * num2

        document.write("<p id='operacao'>Operação: ", num1 + " * ", num2 + "</p>")
        document.write("<p id='resultado'>Resultado da Multiplicação: ", multiplicacao + "</p>")
        break
    case '4':
        var num1 = parseFloat(prompt("Digite o número que será dividido: "))
        var num2 = parseFloat(prompt("Digite o número que dividirá o primeiro número: "))

        var divisao = num1 / num2

        document.write("<p id='operacao'>Operação: ", num1 + " / ", num2 + "</p>")
        document.write("<p id='resultado'>Resultado da Divisão: ", divisao + "</p>")
        break
    case '5':
        var num1 = parseFloat(prompt("Digite a base (número que será multiplicado): "))
        var num2 = parseFloat(prompt("Digite o expoente (quantidade de vezes que o número será multiplicado por ele mesmo): "))

        var potenciacao = num1 ** num2

        document.write("<p id='operacao'>Operação: ", num1 + " ** ", num2 + "</p>")
        document.write("<p id='resultado'>Resultado da Potenciação: ", potenciacao + "</p>")
        break
    case '6':
        var num1 = parseFloat(prompt("Digite o número que será dividido: "))
        var num2 = parseFloat(prompt("Digite o número que dividirá o primeiro número: "))

        var resto_div = num1 % num2

        document.write("<p id='operacao'>Operação: ", num1 + " % ", num2 + "</p>")
        document.write("<p id='resultado'>Resultado do Resto de Divisão: ", resto_div + "</p>")
        break
    default:
        document.write("<p>A operação informada é inválida, por favor, tente novamente.")
}