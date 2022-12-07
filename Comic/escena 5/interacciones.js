var activarinter = document.querySelector(".circulo")

var Hiroff = document.querySelector(".Hiro")

var HiroMove = document.querySelector(".Hirowalk")

activarinter.addEventListener("click", animacion)

function animacion(){
    activarinter.classList.add("oculto");

    activarinter.classList.remove("titilar");

    Hiroff.classList.add("oculto");

    HiroMove.classList.remove("oculto");
    
    HiroMove.classList.add("Caminado");

}