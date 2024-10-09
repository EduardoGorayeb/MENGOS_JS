
function verificarSenha() {
    senha1 = document.getElementById('senha').value;
    senha2 = document.getElementById('confirmarsenha').value;

    if (senha1 != senha2) {
        alert("As senhas não coincidem.");
        return false;
    }
    return true;
}