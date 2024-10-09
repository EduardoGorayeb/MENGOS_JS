function alteraP() {
    document.getElementById('P').innerHTML = "Você alterou o conteúdo deste parágrafo!"
}

var indiceCor = 0
var cores = ['blue', 'purple', 'green', 'red', 'crimson', 'black']
function alteraCor() {
    p = document.getElementById('P')
    p.style.textShadow = 
    p.style.color = cores[indiceCor]

    indiceCor = indiceCor + 1

    indiceCor = indiceCor % cores.length
}