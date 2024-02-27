

var fondo = document.querySelector(".contenedor")
var llantaiz = document.querySelector(".llantaiz")
var llantader = document.querySelector(".llantader")
var luz1 = document.querySelector(".luz1")
var humo = document.querySelector(".humo")

fondo.addEventListener('click', foondoMover)

function foondoMover() {

    fondo.classList.add('fondoMover')
    llantaiz.classList.add('llantaizMover')
    llantader.classList.add('llantaderMover')
    luz1.classList.add('luz1Mover')
    humo.classList.add('humoMover')
    luz1.classList.remove('oculto')
    humo.classList.remove('oculto')
}




