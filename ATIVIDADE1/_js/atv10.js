var dia = parseInt(prompt("Escolha uma opção (Digite o número correspondente):\n\n1. Segunda-Feira\n2. Terça-Feira\n3. Quarta-Feira\n4. Quinta-Feira\n5. Sexta-Feira\n6. Sábado\n7. Domingo"))

switch (dia) {
    case 1:
        document.write("<p id='segunda'>Gray</p>")
        break
    case 2:
        document.write("<p id='terca'>Violet</p>")
        break
    case 3:
        document.write("<p id='quarta'>Blue</p>")
        break
    case 4:
        document.write("<p id='quinta'>Green</p>")
        break
    case 5:
        document.write("<p id='sexta'>Brown</p>")
        break
    case 6:
        document.write("<p id='sabado'>Red</p>")
        break
    case 7:
        document.write("<p id='domingo'>Black</p>")
        break
    default:
        document.write("<p>O número que você inseriu é inválido, tente novamente.")
        break
}
