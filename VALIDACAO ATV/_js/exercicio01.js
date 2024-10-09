function inputCpf() {
    var comprimentoCpf = document.getElementById('cpf').value

    var cpfRegex = /^\d{3}?\.?\d{3}?\.?\d{3}?\-?\d{2}$/

    if (!cpfRegex.test(comprimentoCpf)) {
        document.getElementById('cpf').style.border = '2px solid #e63636'
        document.getElementById('avisoCpf').style.display = 'block'
    }
    else {
        document.getElementById('cpf').style.border = '1px solid #181818'
        document.getElementById('avisoCpf').style.display = 'none'
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

    if (comprimentoCidade < 1) {
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

function inputSalario() {
    var comprimentoSalario = document.getElementById('salario').value

    if (comprimentoSalario < 1) {
        document.getElementById('salario').style.border = '2px solid #e63636'
        document.getElementById('avisoSalario').style.display = 'block'
    }
    else {
        document.getElementById('salario').style.border = '1px solid #181818'
        document.getElementById('avisoSalario').style.display = 'none'
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