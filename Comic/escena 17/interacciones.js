var activarinter = document.querySelector(".circulo");

var interaccion = document.querySelector(".manoA");

var cuchillamen = document.querySelector(".manoB")

var sonido = document.querySelector("audio");

activarinter.addEventListener("click", inter)

function inter(){

    sonido.setAttribute("src", "./media/sfx/cuchillo.mp3")
    sonido.play()

    activarinter.classList.add("oculto");

    activarinter.classList.remove("titilar");

    interaccion.classList.add("animacion");

    setTimeout(function(){

    cuchillamen.classList.add("animacion")

        }, 400*2);

}