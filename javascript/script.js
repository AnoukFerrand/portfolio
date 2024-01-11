document.addEventListener("DOMContentLoaded", (event) => {

    let menu__links = document.querySelector('#menu__links__burger');
    let openBtn = document.querySelector('#openBtn');
    let closeBtn = document.querySelector('#closeBtn');
    let menuLinks = document.querySelectorAll('.scroll__js');
    // let navbarLinks = document.querySelectorAll('.scroll__js');


    // menu burger animation
    openBtn.addEventListener('click', () => {
        menu__links.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        menu__links.classList.remove('active');
    });

    menuLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });        
    });
console.log(menuLinks);

    // Call Animation profil picture
    profilPictureMouseEffect();
});

// Animation profil picture
function profilPictureMouseEffect() { 
    let imgProfil = document.querySelector('.profil');
    let isIn = false;

    imgProfil.addEventListener('mouseenter', () => {
        isIn = true;
        imgProfil.style.setProperty('--profil-img-size', '150px'); // change px to modifie mouse circle size

    });

    imgProfil.addEventListener('mouseleave', () => {
        isIn = false;
        imgProfil.style.setProperty('--profil-img-size', '100%');
    });

    imgProfil.addEventListener('mousemove', (e) => {
        if (isIn) {
            let rect = imgProfil.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            imgProfil.style.setProperty('--profil-img-x', x + 'px');
            imgProfil.style.setProperty('--profil-img-y', y + 'px');

        }
    });
}

// Switch button hiden on scroll
function isVisible(e) {
    let WH = $(window).height(), // Viewport height
      WS = $(window).scrollTop(), // Scroll top
      EH = $(e).height(), // Element height
      EOT = $(e).offset().top; // Element offset top
    return (EOT < (WH + WS - EH));
}

$(window).scroll(function() {
    if (isVisible('.cv')) {
        $('.switch__text').fadeIn(5); // fadeIn() fait réapparaître la classe
    } else {
        $('.switch__text').fadeOut(5); // fadeOut() fait disparaître la classe
    }
});