const esquerda = document.querySelector(".esquerda")
const direita = document.querySelector(".direita")
const carrousel = document.querySelector(".carrousel")
const card = document.getElementsByClassName("card")
const firstCard = document.querySelector("#firstCard")
const lastCard = document.querySelector("#lastCard")


function Direita() {
    carrousel.style.marginLeft = '5.8vw'
    firstCard.style.opacity = '1'
    lastCard.style.opacity = '0'
    setTimeout(() => {
        carrousel.style.transition = '0s'
        carrousel.style.marginLeft = ''
        firstCard.style.transition = '0s'
        firstCard.style.opacity = '0'
        lastCard.style.transition = '0s'
        lastCard.style.opacity = '1'
    }, 400);
    setTimeout(() => {
        firstCard.style.transition = ''
        lastCard.style.transition = ''
        carrousel.style.transition = ''
    }, 450);
}

direita.addEventListener('click', Direita)

function Esquerda() {
    carrousel.style.transition = '0s'
    carrousel.style.marginLeft = '5.8vw'
    firstCard.style.opacity = '1'
    lastCard.style.opacity = '0'
    firstCard.style.transition = '0s'
    lastCard.style.transition = '0s'
    setTimeout(() => {
        carrousel.style.transition = ''
        carrousel.style.marginLeft = ''
        firstCard.style.transition = ''
        firstCard.style.opacity = '0'
        lastCard.style.transition = ''
        lastCard.style.opacity = '1'
    }, 10);
    setTimeout(() => {
        firstCard.style.transition = ''
        lastCard.style.transition = ''
        carrousel.style.transition = ''
    }, 50);
}

esquerda.addEventListener('click', Esquerda)

