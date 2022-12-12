var activarinter = document.querySelector(".circulo")

var voces = document.querySelector("audio")

activarinter.addEventListener("click", inter)

function inter(){

    voces.setAttribute("src", "./media/sfx/voices.mp3")
    voces.play()

    activarinter.classList.add("oculto");

    activarinter.classList.remove("titilar");
}