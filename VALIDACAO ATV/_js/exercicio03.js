function inputCodigo() {
    var tamanhoCodigo = document.getElementById('codigo').value.length

    if (tamanhoCodigo < 1) {
        document.getElementById('codigo').style.border = '2px solid #e63636'
        document.getElementById('avisoCodigo').style.display = 'block'
    }
    else {
        document.getElementById('codigo').style.border = '1px solid #181818'
        document.getElementById('avisoCodigo').style.display = 'none'
    }
}

function inputTitulo() {
    var tamanhoTitulo = document.getElementById('titulo').value.length

    var tituloRegex = /^([a-zA-Z]?\s??[a-zA-Z]?){0,}$/

    if (tituloRegex.test(tamanhoTitulo) || (tamanhoTitulo.length) < 1) {
        document.getElementById('titulo').style.border = '2px solid #e63636'
        document.getElementById('avisoTitulo').style.display = 'block'
    }
    else {
        document.getElementById('titulo').style.border = '1px solid #181818'
        document.getElementById('avisoTitulo').style.display = 'none'
    }
}

function inputProdutor() {
    var tamanhoProdutor = document.getElementById('produtor').value.length

    var produtorRegex = /^([a-zA-Z]?\s??[a-zA-Z]?){0,}$/

    if (produtorRegex.test(tamanhoProdutor) || (tamanhoProdutor) < 1) {
        document.getElementById('produtor').style.border = '2px solid #e63636'
        document.getElementById('avisoProdutor').style.display = 'block'
    }
    else {
        document.getElementById('produtor').style.border = '1px solid #181818'
        document.getElementById('avisoProdutor').style.display = 'none'
    }
}

function inputAno() {
    var tamanhoAno = document.getElementById('ano').value.length

    if (tamanhoAno < 4 || tamanhoAno >= 5) {
        document.getElementById('ano').style.border = '2px solid #e63636'
        document.getElementById('avisoAno').style.display = 'block'
    }
    else {
        document.getElementById('ano').style.border = '1px solid #181818'
        document.getElementById('avisoAno').style.display = 'none'
    }
}

function inputTipo() {
    var tipo = document.getElementById('tipo')

    var valor = tipo.options[tipo.selectedIndex].text
    
    if (valor == "Clique aqui para selecionar um tipo") {
        document.getElementById('tipo').style.border = '2px solid #e63636'
        document.getElementById('avisoTipo').style.display = 'block'
    }
    else {
        document.getElementById('tipo').style.border = '1px solid #181818'
        document.getElementById('avisoTipo').style.display = 'none'
    }
}

function inputClassificacao() {
    var classificacao = document.getElementById('classificacao')

    var valor = classificacao.options[classificacao.selectedIndex].text
    
    if (valor == "Clique aqui para selecionar uma classificação") {
        document.getElementById('classificacao').style.border = '2px solid #e63636'
        document.getElementById('avisoClassificacao').style.display = 'block'
    }
    else {
        document.getElementById('classificacao').style.border = '1px solid #181818'
        document.getElementById('avisoClassificacao').style.display = 'none'
    }
}

function inputDuracao() {
    var tamanhoDuracao = document.getElementById('duracao').value.length

    if (tamanhoDuracao < 1) {
        document.getElementById('duracao').style.border = '2px solid #e63636'
        document.getElementById('avisoDuracao').style.display = 'block'
    }
    else {
        document.getElementById('duracao').style.border = '2px solid #181818'
        document.getElementById('avisoDuracao').style.display = 'none'
    }
}

function inputComentario() {
    var tamanhoComentario = document.getElementById('comentario').value.length

    if (tamanhoComentario < 25) {
        document.getElementById('comentario').style.border = '2px solid #e63636'
        document.getElementById('avisoComentario').style.display = 'block'
    }
    else {
        document.getElementById('comentario').style.border = '2px solid #181818'
        document.getElementById('avisoComentario').style.display = 'none'
    }
}