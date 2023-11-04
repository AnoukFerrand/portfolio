document.addEventListener("DOMContentLoaded", (event) => {

    let menu__links = document.querySelector('#menu__links__burger');
    let openBtn = document.querySelector('#openBtn');
    let closeBtn = document.querySelector('#closeBtn');

    // menu burger animation
    openBtn.addEventListener('click', () => {
        menu__links.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        menu__links.classList.remove('active');
    });

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
