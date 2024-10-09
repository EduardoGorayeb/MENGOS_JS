function inputUsuario() {
    var tamanhoUsuario = document.getElementById('usuario').value.length

    if (tamanhoUsuario < 3) {
        document.getElementById('usuario').style.border = '2px solid #e63636'
        document.getElementById('avisoUsuario').style.display = 'block'
    }
    else {
        document.getElementById('usuario').style.border = '2px solid #181818'
        document.getElementById('avisoUsuario').style.display = 'none'
    }
}

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

function inputTipo() {
    var tipo = document.getElementById('tipo')

    var valor = tipo.options[tipo.selectedIndex].text
    
    if (valor == "Clique aqui para selecionar o tipo") {
        document.getElementById('tipo').style.border = '2px solid #e63636'
        document.getElementById('avisoTipo').style.display = 'block'
    }
    else {
        document.getElementById('tipo').style.border = '1px solid #181818'
        document.getElementById('avisoTipo').style.display = 'none'
    }
}

function inputGrupo() {
    var grupo = document.getElementById('grupo')

    var valor = grupo.options[grupo.selectedIndex].text
    
    if (valor == "Clique aqui para selecionar o grupo") {
        document.getElementById('grupo').style.border = '2px solid #e63636'
        document.getElementById('avisoGrupo').style.display = 'block'
    }
    else {
        document.getElementById('grupo').style.border = '1px solid #181818'
        document.getElementById('avisoGrupo').style.display = 'none'
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

function inputSenha() {
    var senha = document.getElementById('senha').value
    var avisoSenha = document.getElementById('avisoSenha')

    if (senha.length < 8) {
        avisoSenha.textContent = "A senha deve conter pelo menos 8 caracteres."
        document.getElementById('senha').style.border = '2px solid #e63636'
        document.getElementById('avisoSenha').style.display = 'block'
    }
    else if (!/[A-Z]/.test(senha)) {
        avisoSenha.textContent = "A senha deve conter pelo menos 1 letra maiúscula."
        document.getElementById('senha').style.border = '2px solid #e63636'
        document.getElementById('avisoSenha').style.display = 'block'
    }
    else if (!/[a-z]/.test(senha)) {
        avisoSenha.textContent = "A senha deve conter pelo menos 1 letra minúscula."
        document.getElementById('senha').style.border = '2px solid #e63636'
        document.getElementById('avisoSenha').style.display = 'block'
    }
    else if (!/[0-9]/.test(senha)) {
        avisoSenha.textContent = "A senha deve conter pelo menos 1 número."
        document.getElementById('senha').style.border = '2px solid #e63636'
        document.getElementById('avisoSenha').style.display = 'block'
    }
    else if (!/[#@$!%*?&]/.test(senha)) {
        avisoSenha.textContent = "A senha deve conter pelo menos 1 caractere especial (@, $, !, %, *, ?, &)"
        document.getElementById('senha').style.border = '2px solid #e63636'
        document.getElementById('avisoSenha').style.display = 'block'
    }
    else {
        document.getElementById('senha').style.border = '1px solid #181818'
        document.getElementById('avisoSenha').style.display = 'none'
    }
}

function confirmaSenha() {
    var senha = document.getElementById('senha').value
    var senha2 = document.getElementById('senha2').value

    if (senha == senha2) {
        document.getElementById('senha2').style.border = '1px solid #181818'
        document.getElementById('avisoSenha2').style.display = 'none' 
    }
    else {
        document.getElementById('senha2').style.border = '2px solid #e63636'
        document.getElementById('avisoSenha2').style.display = 'block'
    }
}

function mostrarSenha() {
    var icone = document.getElementById('icone')
    var tipo = document.getElementById('senha')

    if (tipo.type === "password") {
        tipo.setAttribute('type', 'text')

        document.getElementById('icone').classList.replace('bi-eye', 'bi-eye-slash')
    }
    else {
        tipo.setAttribute('type', 'password')

        document.getElementById('icone').classList.replace('bi-eye-slash', 'bi-eye')
    }
}

function mostrarSenha2() {
    var icone2 = document.getElementById('icone2')
    var tipo2 = document.getElementById('senha2')

    if (tipo2.type === "password") {
        tipo2.setAttribute('type', 'text')

        document.getElementById('icone2').classList.replace('bi-eye', 'bi-eye-slash')
    }
    else {
        tipo2.setAttribute('type', 'password')

        document.getElementById('icone2').classList.replace('bi-eye-slash', 'bi-eye')
    }
}