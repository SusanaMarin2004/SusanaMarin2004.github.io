var activarinter = document.querySelector(".circulo")

var cambiocolor = document.querySelector(".fondo")

activarinter.addEventListener("click", animacion)

function animacion(){
    activarinter.classList.add("oculto");

    cambiocolor.classList.add("interaccion");
}