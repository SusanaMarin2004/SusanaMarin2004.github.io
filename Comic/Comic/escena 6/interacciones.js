var activarinter = document.querySelector(".circulo")

var Hiroff = document.querySelector(".Pj1")

var Hiron = document.querySelector(".Pj2")

var texto = document.querySelector(".onomatopeya")

var rAudio = document.querySelector("audio")

activarinter.addEventListener("click", animacion)

function animacion(){
    activarinter.classList.add("oculto");

    texto.classList.remove("oculto");

    rAudio.setAttribute("src", "./media/sfx/toctoc.mp3")
    rAudio.play()

    setTimeout(function(){

        Hiroff.classList.add("oculto");

        Hiron.classList.remove("oculto");

        }, 500*2);
}