var hirochao = document.querySelector(".hiroSolo")
var hiro = document.querySelector(".hiro")
var interaccionchao = document.querySelector(".circulo")

interaccionchao.addEventListener("click",move);


function move() {
    hirochao.classList.add("oculto")

    interaccionchao.classList.add("oculto");

    interaccionchao.classList.remove("titilar");

    hiro.classList.remove("oculto");

    hiro.classList.add("Hirocaminado")

}