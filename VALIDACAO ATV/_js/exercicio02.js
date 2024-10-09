function inputNome() {
    var comprimentoNome = document.getElementById('nome').value

    var nomeRegex = /^([a-zA-Z]?\s??[a-zA-Z]?){0,}$/

    if (!nomeRegex.test(comprimentoNome) || (comprimentoNome.length) < 3) {
        document.getElementById('nome').style.border = '2px solid #e63636'
        document.getElementById('avisoNome').style.display = 'block'
    }
    else {
        document.getElementById('nome').style.border = '1px solid #181818'
        document.getElementById('avisoNome').style.display = 'none'
    }
}

function inputEndereco() {
    var comprimentoEndereco = document.getElementById('endereco').value.length

    if (comprimentoEndereco < 1) {
        document.getElementById('endereco').style.border = '2px solid #e63636'
        document.getElementById('avisoEndereco').style.display = 'block'
    }
    else {
        document.getElementById('endereco').style.border = '1px solid #181818'
        document.getElementById('avisoEndereco').style.display = 'none'
    }
}

function inputCidade() {
    var comprimentoCidade = document.getElementById('cidade').value.length

    var cidadeRegex = /^([a-zA-Z]?\s??[a-zA-Z]?){0,}$/

    if (cidadeRegex.test(comprimentoCidade || (comprimentoCidade.length < 1))) {
        document.getElementById('cidade').style.border = '2px solid #e63636'
        document.getElementById('avisoCidade').style.display = 'block'
    }
    else {
        document.getElementById('cidade').style.border = '1px solid #181818'
        document.getElementById('avisoCidade').style.display = 'none'
    }
}

function inputEstado() {
    var comprimentoEstado = document.getElementById('estado').value.length

    if (comprimentoEstado < 2) {
        document.getElementById('estado').style.border = '2px solid #e63636'
        document.getElementById('avisoEstado').style.display = 'block'
    }
    else {
        document.getElementById('estado').style.border = '1px solid #181818'
        document.getElementById('avisoEstado').style.display = 'none'
    }
}

function inputIdade() {
    var comprimentoIdade = document.getElementById('idade').value

    if (comprimentoIdade < 3) {
        document.getElementById('idade').style.border = '2px solid #e63636'
        document.getElementById('avisoIdade').style.display = 'block'
    }
    else{
        document.getElementById('idade').style.border = '1px solid #181818'
        document.getElementById('avisoIdade').style.display = 'none'
    }
}

function inputTelefone() {
    var telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/

    if (!telefoneRegex.test(document.getElementById('telefone').value)) {
        document.getElementById('telefone').style.border = '2px solid #e63636'
        document.getElementById('avisoTelefone').style.display = 'block'
    }
    else{
        document.getElementById('telefone').style.border = '1px solid #181818'
        document.getElementById('avisoTelefone').style.display = 'none'
    }
}

function inputEmail() {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ /* Regex gerado por IA (Copilot) */

    if (!emailRegex.test(document.getElementById('email').value)) {
        document.getElementById('email').style.border = '2px solid #e63636'
        document.getElementById('avisoEmail').style.display = 'block'
    }
    else{
        document.getElementById('email').style.border = '1px solid #181818'
        document.getElementById('avisoEmail').style.display = 'none'
    }
}

function inputChut() {
    var tamanhoChut = document.getElementById('numChut').value

    if (tamanhoChut < 0) {
        document.getElementById('numChut').style.border = '2px solid #e63636'
        document.getElementById('avisoChut').style.display = 'block'
    }
    else {
        document.getElementById('numChut').style.border = '1px solid #181818'
        document.getElementById('avisoChut').style.display = 'none'
    }
}

function inputUni() {
    var tamanhoUni = document.getElementById('numUni').value

    if (tamanhoUni < 0) {
        document.getElementById('numUni').style.border = '2px solid #e63636'
        document.getElementById('avisoUni').style.display = 'block'
    }
    else {
        document.getElementById('numUni').style.border = '1px solid #181818'
        document.getElementById('avisoUni').style.display = 'none'
    }
}

function inputShort() {
    var tamanhoShort = document.getElementById('numShort').value

    if (tamanhoShort < 0) {
        document.getElementById('numShort').style.border = '2px solid #e63636'
        document.getElementById('avisoShort').style.display = 'block'
    }
    else {
        document.getElementById('numShort').style.border = '1px solid #181818'
        document.getElementById('avisoShort').style.display = 'none'
    }
}

function inputLuva() {
    var tamanhoLuva = document.getElementById('tamanhoLuva').value

    if (tamanhoLuva < 0) {
        document.getElementById('tamanhoLuva').style.border = '2px solid #e63636'
        document.getElementById('avisoLuva').style.display = 'block'
    }
    else {
        document.getElementById('tamanhoLuva').style.border = '1px solid #181818'
        document.getElementById('avisoLuva').style.display = 'none'
    }
}