var idade = prompt("Digite sua idade: ")

if (idade > 15 && idade < 18 || idade > 70) {
    document.write("<p>O voto é opcional.</p>")
}
else if (idade < 16) {
    document.write("<p>Você não pode votar.</p>")
}
else {
    document.write("<p>Você é obrigado a votar.</p>")
}