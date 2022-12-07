var hiro = document.querySelector(".Hirowalk")
var interaccionchao = document.querySelector(".circulo")

interaccionchao.addEventListener("click",move);


function move() {

    interaccionchao.classList.add("oculto");

    interaccionchao.classList.remove("titilar");

    hiro.classList.add("Hirocaminado")

}