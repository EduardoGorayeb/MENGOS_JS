window.onload = function() {
    var listras = document.querySelectorAll(".tabelaListrada tbody tr")
    for (var i = 0; i < listras.length; i += 2) {
        listras[i].className = "listras";
    }
}