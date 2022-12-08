var activarinter = document.querySelector(".circulo");

var shikaoff = document.querySelector(".Shika");

var shikasteps = document.querySelector(".Shikawalk");

activarinter.addEventListener("click", animacion)

function animacion(){
  
activarinter.classList.add("oculto")

activarinter.classList.remove("titilar")

shikaoff.classList.add("oculto")

shikasteps.classList.add("steps")

shikasteps.classList.remove("oculto")

}