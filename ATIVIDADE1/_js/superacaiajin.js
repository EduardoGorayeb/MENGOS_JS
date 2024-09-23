var p = 10
var m = 15
var g = 20

function tamanhos() {
    var tamanhos = document.getElementsByName('tamanho');

    for (var i = 0; i < tamanhos.length; i++) {
        if (tamanhos[i].checked) {
            var valorSelecionado = tamanhos[i].value;
            break;
        }
    }

    document.getElementById('pagarcartao').style.display = 'none'
    document.getElementById('realizarpagamento').style.display = 'none'

    switch (valorSelecionado) {
        case 'P':
            var resultado = "Você escolheu o tamanho P. Valor: R$ 10";
            document.getElementById('pagamento').style.display = 'none'
            document.getElementById('valorpagamento').style.display = 'none'
            document.getElementById('aviso').style.display = 'none'
            escolha = p
            break;
        case 'M':
            var resultado = "Você escolheu o tamanho M. Valor: R$ 15";
            document.getElementById('pagamento').style.display = 'none'
            document.getElementById('valorpagamento').style.display = 'none'
            document.getElementById('aviso').style.display = 'none'
            escolha = m
            break;
        case 'G':
            var resultado = "Você escolheu o tamanho G. Valor: R$ 20";
            document.getElementById('pagamento').style.display = 'none'
            document.getElementById('valorpagamento').style.display = 'none'
            document.getElementById('aviso').style.display = 'none'
            escolha = g
            break;
        default:
            var resultado = "Nenhum tamanho selecionado.";
            break
    }

    document.getElementById('resultado').innerHTML = resultado;
}

function pagamentos() {
    var formapagamento = document.getElementsByName('pagamento')

    for (i = 0; i < formapagamento.length; i++) {
        if (formapagamento[i].checked) {
            var pagselecionado = formapagamento[i].value
        }
    }

    switch (pagselecionado) {
        case 'dinheiro':
            var pagamento = "Você escolheu a forma de pagamento Dinheiro."
            document.getElementById('aviso').innerHTML = ""
            valor = "O valor total de seu pedido é: <b>" + escolha + "</b>"
            document.getElementById('form-troco').style.display = 'block'
            document.getElementById('pagamento').style.display = 'block'
            document.getElementById('valorpagamento').style.display = 'block'
            document.getElementById('pagarcartao').style.display = 'none'
            document.getElementById('realizarpagamento').style.display = 'none'
            break
        case 'cartao':
            var pagamento = "Você escolheu a forma de pagamento Cartão."
            document.getElementById('aviso').innerHTML = "Ao selecionar a forma de pagamento 'Cartão', haverá um acréscimo de 5% no valor total do pedido.<br>Você pode mudar a forma de pagamento a qualquer momento."
            valor = "O valor total de seu pedido é: <b>" + (escolha + (escolha * 0.05)) + "</b>"
            document.getElementById('form-troco').style.display = 'none'
            document.getElementById('ocultar').style.display = 'none'
            document.getElementById('valorpagamento').style.display = 'block'
            document.getElementById('aviso').style.display = 'block'
            document.getElementById('pagarcartao').style.display = 'block'
            document.getElementById('realizarpagamento').style.display = 'block'
            break
        default:
            var pagamento = "Nenhuma forma de pagamento selecionada."
            break
    }

    document.getElementById('pagamento').innerHTML = pagamento;
    document.getElementById('valorpagamento').innerHTML = valor;
}

function realizarpagamento() {
    document.getElementById('realizarpagamento').innerHTML = "Pagamento realizado com sucesso. Obrigado e volte sempre!"
}

function valortroco() {
    var tertroco = document.getElementsByName('troco')

    for (i = 0; i < tertroco.length; i++) {
        if (tertroco[i].checked) {
            var trocosimounao = tertroco[i].value
        }

        switch (trocosimounao) {
            case 'sim':
                document.getElementById('troco').innerHTML = "<input type='number' id='valortroco' placeholder='Insira o valor do pagamento aqui' onchange='calculartroco()'>"
                document.getElementById('quantidadetroco').style.display = 'block'
                document.getElementById('ocultar').style.display = 'block'
                break
            case 'nao':
                document.getElementById('troco').innerHTML = "O total de seu pedido foi: <b>R$" + escolha + "</b>"
                document.getElementById('ocultar').style.display = 'block'
                document.getElementById('quantidadetroco').style.display = 'none'
                break
            default:
                document.getElementById('troco').innerHTML = "Você não inseriu uma opção válida, tente novamente."
                break
        }
    }
}
function calculartroco() {
    var valortroco = parseFloat(document.getElementById('valortroco').value)
    escolha = parseInt(escolha)
    if (valortroco < escolha) {
        document.getElementById('quantidadetroco').innerHTML = "O valor inserido não é suficiente para realizar o pagamento."
    }
    else if (valortroco == escolha) {
        document.getElementById('quantidadetroco').innerHTML = "O valor inserido é suficiente para realizar o pagamento e não precisará de troco."
    }
    else if (valortroco > escolha) {
        var quantidadetroco = valortroco - escolha
        quantidadetroco = quantidadetroco.toFixed(2)
        document.getElementById('quantidadetroco').innerHTML = "O seu troco é de: <b>R$" + quantidadetroco + "</b>"
    }
    else { 
        document.getElementById('quantidadetroco').innerHTML = ""
    }
}