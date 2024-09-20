var idade = parseInt(prompt("Insira a sua idade a seguir (apenas números): "))

if (idade > 0 && idade < 18) {
    document.write("<p>Você é menor de idade.</p>")
}
else if (idade >= 18) {
    document.write("<p>Você é maior de idade.</p>")
}
else {
    document.write("<p id='invalido'>Insira uma idade válida.</p>")
}