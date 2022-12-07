var activarinter = document.querySelector(".circulo")

var esquizo = document.querySelector("audio")

activarinter.addEventListener("click", inter)

function inter(){

    esquizo.setAttribute("src", "./media/sfx/ShikaLlorando.mp3")
    esquizo.play()

    activarinter.classList.add("oculto");

    activarinter.classList.remove("titilar");
}