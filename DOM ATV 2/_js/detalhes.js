i = 0

function detalhes() {
    if (i == 0) {
        var largura = window.innerWidth
        var altura = window.innerHeight
        var posicaoHorizontal = window.scrollX
        var posicaoVertical = window.scrollY

        document.getElementById('largura').innerHTML = "Largura Intera: " + largura
        document.getElementById('altura').innerHTML = "Altura Intera: " + altura
        document.getElementById('scrollHorizontal').innerHTML = "Posição Horizontal: " + posicaoHorizontal
        document.getElementById('scrollVertical').innerHTML = "Posição Vertical: " + posicaoVertical
        i = 1
    }
}

function atualizarDetalhes() {
    var largura = window.innerWidth
    var altura = window.innerHeight
    var posicaoHorizontal = window.scrollX
    var posicaoVertical = window.scrollY
    
    document.getElementById('largura').innerHTML = "Largura Intera: " + largura
    document.getElementById('altura').innerHTML = "Altura Intera: " + altura
    document.getElementById('scrollHorizontal').innerHTML = "Posição Horizontal: " + posicaoHorizontal
    document.getElementById('scrollVertical').innerHTML = "Posição Vertical: " + posicaoVertical
}