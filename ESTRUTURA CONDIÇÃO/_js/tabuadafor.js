let num = parseFloat(prompt("Digite seu número: "))
document.write("<p>Tabuada usando 'for'</p>")

for (i = 0; i < 11; i++) {
    document.write("<p>" + num + " * " + i + " = " + num * i + "</p>")
}