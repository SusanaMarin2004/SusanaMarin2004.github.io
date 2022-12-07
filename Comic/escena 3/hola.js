var maqui = document.querySelector(".maqui")
var tela = document.querySelector(".tela")
var interaccionchao = document.querySelector(".circulo")
var Audiomaquina = document.querySelector("audio")

interaccionchao.addEventListener("click",move);

function move() {

    
    Audiomaquina.setAttribute("src", "./imagenes/sfx/cosedora.mp3")
    Audiomaquina.play()
    maqui.classList.add("maqui_move");
    tela.classList.add("tela_move")
    interaccionchao.classList.add("oculto");

interaccionchao.classList.remove("titilar");

}