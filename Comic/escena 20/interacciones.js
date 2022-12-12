var activarinter = document.querySelector(".circulo");

var interaccion = document.querySelector(".pomo");

var sonido = document.querySelector("audio");

activarinter.addEventListener("click", inter)

function inter(){

    sonido.setAttribute("src", "./media/sfx/abriendo.mp3")
    sonido.play()

    activarinter.classList.add("oculto");

    activarinter.classList.remove("titilar");

    interaccion.classList.add("puerta")
}