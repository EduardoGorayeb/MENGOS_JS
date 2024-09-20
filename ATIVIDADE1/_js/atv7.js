var num = parseInt(prompt("Digite um número INTEIRO: "))

if (num % 2 == 0) {
    document.write("<p>O número digitado foi <b>", num + "</b> e ele é PAR.</p>")
}
else {
    document.write("<p>O número digitado foi <b>", num + "</b> e ele é ÍMPAR.</p>")
}