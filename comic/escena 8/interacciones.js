var activarinter = document.querySelector(".circulo")

var humo = document.querySelector(".humo")

var rAudio = document.querySelector("audio")

activarinter.addEventListener("click", animacion)

function animacion(){

    activarinter.classList.add("oculto");

    activarinter.classList.remove("titilar");

    humo.classList.remove("oculto");

    rAudio.setAttribute("src", "./media/sfx/AguaHirviendo.mp3")
    rAudio.play()

}