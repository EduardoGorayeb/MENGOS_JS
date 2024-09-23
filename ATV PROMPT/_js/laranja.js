var segunda = prompt("Digite a quantidade colhida na Segunda-Feira: ")
var terca = prompt("Digite a quantidade colhida na Terça-Feira: ")
var quarta = prompt("Digite a quantidade colhida na Quarta-Feira: ")

segunda = parseInt(segunda)
terca = parseInt(terca)
quarta = parseInt(quarta)

if (segunda > terca && segunda > quarta) {
    // if (se) segunda > terca (segunda maior que terça) && (e) segunda > quarta (segunda maior que quarta), "if" serve para exigir uma condição para acontecer algo.
    // Nesse caso, está exigindo que segunda seja o maior número, se for, ela irá ser executada, se não for, passa para a próxima condição, se houver.
    var maior = "Segunda"
    var maiornum = segunda
    if (terca > quarta) {
        var diferenca = segunda - quarta
        var menor = "Quarta"
        var menornum = quarta
        var meio = "Terça"
    }
    else {
        var diferenca = segunda - terca
        var menor = "Terça"
        var menornum = terca
        var meio = "Quarta"
    }
}

// Caso a condição acima não seja atendida, passamos para a próxima condição, a condição "else if" só vai ser executada se a condição acima dela não for atendida. Pode haver mais de uma condição acima dela.
// Se a condição "if" não for atendida, passamos para a "else if", que só vai ser executava se terça for o maior número.
else if (terca > segunda && terca > quarta) {
    var maior = "Terça"
    var maiornum = terca
    if (segunda > quarta) {
        var diferenca = terca - quarta
        var menor = "Quarta"
        var menornum = quarta
        var meio = "Segunda"
    }
    else {
        var diferenca = terca - segunda
        var menor = "Segunda"
        var menornum = segunda
        var meio = "Quarta"
    }
}

// Caso nenhuma condição do código seja atendida, passamos para a última, a condição "else" só vai ser executada se nenhuma outra do código for atendida.
// Se as condições "if" e "else if" não forem atendidas, passamos para "else", que é última condição de uma série de condições.
else {
    var maior = "Quarta"
    var maiornum = quarta
    if (segunda > terca) {
        var diferenca = quarta - terca
        var menor = "Terça"
        var menornum = terca
        var meio = "Segunda"
    }
    else {
        var diferenca = quarta - segunda
        var menor = "Segunda"
        var menornum = segunda
        var meio = "Terça"
    }
}

var total = segunda + terca + quarta

var meionum = total - (maiornum + menornum)

document.write("<p><b>O total de laranja recolhida nos três dias é de: </b>", total + " laranjas.</p>")
document.write("<p><b>O dia que teve a colheita mediana foi: </b>", meio + ", com ", meionum + " laranjas.</p>")
document.write("<p><b>O dia com a maior colheita foi: </b>", maior + ", com ", maiornum + " laranjas.</p>")
document.write("<p><b>O dia com a menor colheita foi: </b>", menor + ", com ", menornum + " laranjas.</p>")
document.write("<p><b>E a diferença de colheita do melhor dia para o pior dia foi de: </b>", diferenca + " laranjas.</p>")