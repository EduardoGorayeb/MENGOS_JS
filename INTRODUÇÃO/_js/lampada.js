function trocaImagem(){
    var elemento = document.getElementById("lamp");
    if (elemento.src.match("bulbon")){
        elemento.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    }
    else{
        elemento.src = "https://www.w3schools.com/js/pic_bulbon.gif"
    }
}