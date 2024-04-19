const scomfort = document.querySelector('.scomfort')
const section = document.querySelector('.section1')
const tenis = document.querySelector('.tenis')
const nav = document.querySelector('.nav')
const loginButton = document.querySelector('.loginButton')
const models = document.querySelector('.models')
const lobo = document.querySelector('.lobo')
const coluna = document.querySelectorAll('.coluna')
const imagemComentario = document.querySelectorAll(".imagem-comentario")
const nomeComentario = document.querySelectorAll(".nome-comentario")
const avaliarComentario = document.querySelectorAll(".avaliar-comentario")
const textoComentario = document.querySelectorAll(".texto-comentario")
const carrouselContainer = document.querySelector(".carrousel-container")
const carrouselContainerCell = document.querySelector(".carrousel-container-cell")

window.onload = function () {
    scrollar = pageYOffset
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });

        window.onscroll = function () {
            if (scrollar >= 580 && scrollar <= 5500) {
                models.style.opacity = '1';
                models.style.marginTop = '190px';
            }


        }

    }, 20);
}



// setTimeout(() => {
//     document.addEventListener("click", function() {
//         var audio = new Audio("img/audio.mp3");
//         audio.play();
//         document.documentElement.requestFullscreen();
//         document.body.style.overflowY = 'hidden' 
//         lobo.style.zIndex = '50'
//         lobo.style.opacity = '1'
//       });
// }, 13000);


function aumentarColuna() {
    largura = window.innerWidth
    console.log(-150 * (-largura * -0.01) + 1300);
    coluna.forEach(function(coluna) {
        coluna.style.height = `${-150 * (-largura * -0.01) + 1600}px`
    }
    )
}

setInterval(aumentarColuna, 100)


setTimeout(() => {

    function efeito() {
        scrollar = pageYOffset
        scomfort.style.marginTop = `${scrollar * 0.06}px`
        scomfort.style.opacity = `${1 - scrollar * 0.001}`
        section.style.clipPath = `polygon(0% 0%, 100% ${220 - scrollar * 0.2}px, 100% 1900px, 0vw 1900px)`


        
            if (window.innerWidth <= 768) {
                carrouselContainer.style.opacity = '0';
                carrouselContainerCell.style.opacity = '1';
                if (scrollar <= 780) {
                    nav.style.color = '';
                    nav.style.backgroundColor = '';
                    loginButton.style.backgroundColor = '';
                    loginButton.style.color = ''
                } if (scrollar >= 780 && scrollar <= 1910) {
                    nav.style.backgroundColor = '#008ba7';
                    nav.style.color = '';
                    loginButton.style.backgroundColor = '';
                    loginButton.style.color = ''
                } if (scrollar >= 1910 && scrollar <= 2600) {
                    nav.style.backgroundColor = 'white';
                    nav.style.color = '#004E66';
                    loginButton.style.backgroundColor = '#004E66';
                    loginButton.style.color = 'white';
                } if (scrollar >= 2600 && scrollar <= 3290) {
                    nav.style.backgroundColor = 'rgb(246, 246, 246)';
                } if (scrollar >= 3290 && scrollar <= 3980) {
                    nav.style.backgroundColor = 'white';
                } if (scrollar >= 3980 && scrollar <= 6660) {
                    imagemComentario.forEach(function (imagemComentario) {
                        imagemComentario.style.opacity = '1';
                        imagemComentario.style.marginTop = '0';
                    });
                    setTimeout(() => {
                        nomeComentario.forEach(function (nomeComentario) {
                            nomeComentario.style.opacity = '1';
                            nomeComentario.style.marginTop = '0';
                        });
                    }, 100);
                    setTimeout(() => {
                        avaliarComentario.forEach(function (avaliarComentario) {
                            avaliarComentario.style.opacity = '1';
                            avaliarComentario.style.marginTop = '0';
                        });
                    }, 300);
        
                    setTimeout(() => {
                        textoComentario.forEach(function (textoComentario) {
                            textoComentario.style.opacity = '1';
                            textoComentario.style.marginTop = '10px';
                        });
                    }, 600);
        
                    nav.style.backgroundColor = 'rgb(246, 246, 246)';
                }

            } else {
                carrouselContainer.style.opacity = '1';
                carrouselContainerCell.style.opacity = '0';
                if (scrollar <= 780) {
                    nav.style.color = '';
                    nav.style.backgroundColor = '';
                    loginButton.style.backgroundColor = '';
                    loginButton.style.color = ''
                } if (scrollar >= 780 && scrollar <= 1840) {
                    nav.style.backgroundColor = '#008ba7';
                    nav.style.color = '';
                    loginButton.style.backgroundColor = '';
                    loginButton.style.color = ''
                } if (scrollar >= 1840 && scrollar <= 3240) {
                    nav.style.backgroundColor = 'white';
                    nav.style.color = '#004E66';
                    loginButton.style.backgroundColor = '#004E66';
                    loginButton.style.color = 'white';
                } if (scrollar >= 3240 && scrollar <= 4660) {
                    nav.style.backgroundColor = 'rgb(246, 246, 246)';
                } if (scrollar >= 4660 && scrollar <= 6040) {
                    nav.style.backgroundColor = 'white';
                } if (scrollar >= 6040 && scrollar <= 6660) {
                    imagemComentario.forEach(function (imagemComentario) {
                        imagemComentario.style.opacity = '1';
                        imagemComentario.style.marginTop = '0';
                    });
                    setTimeout(() => {
                        nomeComentario.forEach(function (nomeComentario) {
                            nomeComentario.style.opacity = '1';
                            nomeComentario.style.marginTop = '0';
                        });
                    }, 100);
                    setTimeout(() => {
                        avaliarComentario.forEach(function (avaliarComentario) {
                            avaliarComentario.style.opacity = '1';
                            avaliarComentario.style.marginTop = '0';
                        });
                    }, 300);
        
                    setTimeout(() => {
                        textoComentario.forEach(function (textoComentario) {
                            textoComentario.style.opacity = '1';
                            textoComentario.style.marginTop = '10px';
                        });
                    }, 600);
        
                    nav.style.backgroundColor = 'rgb(246, 246, 246)';
                }
            }
        }

       
    window.addEventListener('scroll', efeito);

}, 100);





