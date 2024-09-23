var comida = prompt("Digite uma das opções: Pizza / Hamburguer / Sushi / Salada")
comida = comida.toUpperCase()

switch(comida) {

    case "HAMURGUER":
        document.write("<p>Vou pedir um hamburguer.</p>")
        break;
    case "PIZZA":
        document.write("<p>Vou pedir uma pizza.</p>")
        break;
    case "SUSHI":
        document.write("<p>Vou pedir sushi.</p>")
        break;
    case "SALADA":
        document.write("<p>Vou escolher uma salada.</p>")
        break;
    default:
        document.write("<p>Não sei o que comer.</p>")
}