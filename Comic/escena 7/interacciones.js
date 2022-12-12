var interact = document.querySelector(".circulo")

var puertaC = document.querySelector(".livingroom")

var rAudio = document.querySelector("audio")


interact.addEventListener("click", animacion)

function animacion(){

    rAudio.setAttribute("src", "./media/sfx/puerta.mp3")
    rAudio.play()
 
interact.classList.remove("titilar");

interact.classList.add("oculto");

puertaC.setAttribute("src", "./media/sala2.png")

}