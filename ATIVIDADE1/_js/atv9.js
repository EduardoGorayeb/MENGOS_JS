var contagem = parseInt(prompt("Digite um número para iniciar a contagem regressiva: "))

function contagemregre() {
  setTimeout(function() {
    document.write("<p style= 'font-weight: bold; font-size: 30px; font-family: verdana;'>", contagem + "</p>"); 
    contagem-- 
    if (contagem >= 0) { 
      contagemregre(); 
    }
  }, 1000)
}

contagemregre();