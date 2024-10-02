function mudarTexto() {
    document.getElementById('mudarTexto').innerHTML = "Este é um parágrafo alterado em um documento de HTML. Bye, World!"
}
function mostrarValorNome() {
    var valorNome = document.getElementsByName('valoresNome')
    var valorNome = valorNome[0].value
    
    document.getElementById('mostrarValorNome').innerHTML = valorNome
}
function mostrarValorId() {
    var valorId = document.getElementById('valoresId').value

    document.getElementById('mostrarValorId').innerHTML = valorId
}
function adicionarParagrafo() {
    var p = document.createElement("p")

    p.textContent = "Você criou um parágrafo!"

    document.body.appendChild(p)
}
function adicionarTexto() {
    var texto = document.createTextNode("Você criou um texto! ")

    document.body.appendChild(texto)
}
var i = 0

function mudarFundo() {
    var coresFundo = ["lightyellow", "lightgreen", "lightpink", "lightgoldenrodyellow", "goldenrod", "lightseagreen","lightsalmon"]

    var body = document.body
    body.style.background = coresFundo[i]

    i = (i + 1) % coresFundo.length
}