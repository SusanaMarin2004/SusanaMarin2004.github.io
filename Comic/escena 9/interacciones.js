var activarinter = document.querySelector(".circulo")

var animacionwrite = document.querySelector(".shiori")

activarinter.addEventListener("click", animacion)

function animacion(){
    activarinter.classList.add("oculto");

    animacionwrite.classList.add("interaccion");
}