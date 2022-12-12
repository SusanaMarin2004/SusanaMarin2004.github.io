var interaccionchao = document.querySelector(".circulo")

var burbujas1 = document.querySelector(".burbuja1")

var burbujas2 = document.querySelector(".burbuja2")

var burbujas3 = document.querySelector(".burbuja3")

var burbujas4 = document.querySelector(".burbuja4")

var rAudio = document.querySelector("audio")

interaccionchao.addEventListener("click",move);


function move() {

    rAudio.setAttribute("src", "./media/sfx/AguaHirviendo.mp3")
    rAudio.play()

    interaccionchao.classList.add("oculto");

    interaccionchao.classList.remove("titilar");

    burbujas1.classList.add("agitar")

    burbujas2.classList.add("agitar2")

    burbujas3.classList.add("agitar3")

    burbujas4.classList.add("agitar4")

}