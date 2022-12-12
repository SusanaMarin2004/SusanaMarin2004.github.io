var activarinter = document.querySelector(".circulo")

var interaccion = document.querySelector(".fondo")

var pasartiempo = document.querySelector("audio")

activarinter.addEventListener("click", inter)

function inter(){

    pasartiempo.setAttribute("src", "./media/sfx/fastclock.mp3")
    pasartiempo.play()

    activarinter.classList.add("oculto");

    activarinter.classList.remove("titilar");

    interaccion.classList.add("animacion")
}