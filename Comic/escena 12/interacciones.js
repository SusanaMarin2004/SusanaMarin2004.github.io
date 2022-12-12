var activarinter = document.querySelector(".circulo")

var interaccion = document.querySelector(".fondo2")

var esquizo = document.querySelector("audio")

activarinter.addEventListener("click", inter)

function inter(){

    esquizo.setAttribute("src", "./media/sfx/voices.mp3")
    esquizo.play()

    activarinter.classList.add("oculto");

    activarinter.classList.remove("titilar");

    interaccion.classList.add("desaparicion")
}