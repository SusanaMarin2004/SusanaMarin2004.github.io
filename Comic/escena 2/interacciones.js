var activarinter = document.querySelector(".circulo")

var quitarpj2 = document.querySelector(".Pj2")

var Shikamina = document.querySelector(".animacion2")

var quitarpj3 = document.querySelector(".Pj3")

var ShioriCaminado = document.querySelector(".animacion3")

activarinter.addEventListener("click", animacion)

function animacion(){
    activarinter.classList.add("oculto");

    ShioriCaminado.classList.remove("oculto")

    ShioriCaminado.classList.add("steps3")

    quitarpj3.classList.add("oculto")

    setTimeout(function(){

        Shikamina.classList.add("steps2")
    
        Shikamina.classList.remove("oculto")
    
        quitarpj2.classList.add("oculto")
        }, 500*2);


}