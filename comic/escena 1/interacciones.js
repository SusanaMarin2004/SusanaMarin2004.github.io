var activarinter = document.querySelector(".circulo")

var animacionzoom = document.querySelector(".fondo")

activarinter.addEventListener("click", animacion)

function animacion(){
    activarinter.classList.add("oculto");

    animacionzoom.classList.add("interaccion");
}