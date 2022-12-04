var activarinter = document.querySelector(".circulo")

var ShioriEntra = document.querySelector(".Pj1")

activarinter.addEventListener("click", animacion)

function animacion(){
    activarinter.classList.add("oculto");

    ShioriEntra.classList.add("interaccion")

}