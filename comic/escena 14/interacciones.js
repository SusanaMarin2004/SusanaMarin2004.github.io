var activarinter = document.querySelector(".circulo")

var interaccion = document.querySelector(".texto")

var esquizo = document.querySelector(".tension")

activarinter.addEventListener("click", inter)

function inter(){

    esquizo.setAttribute("src", "./media/sfx/sus.mp3")
    esquizo.play()

    activarinter.classList.add("oculto");

    activarinter.classList.remove("titilar");

    interaccion.classList.add("desaparicion")
}