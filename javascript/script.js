document.addEventListener("DOMContentLoaded", (event) => {

    // menu burger animation
    let menu__links = document.querySelector('#menu__links__burger');
    let openBtn = document.querySelector('#openBtn');
    let closeBtn = document.querySelector('#closeBtn');




    openBtn.addEventListener('click', () => {
        menu__links.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        menu__links.classList.remove('active');
    });

    profilPictureMouseEffect();

});

function profilPictureMouseEffect() { 
    let imgProfil = document.querySelector('.profil');
    let isIn = false;

    imgProfil.addEventListener('mouseenter', () => {
        isIn = true;
        imgProfil.style.setProperty('--profil-img-size', '130px');

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





// fonction test
function testImageEffect() {
    let blur = document.querySelector('.blur');
    let imgProfil = document.querySelector('.profil');
    imgProfil.addEventListener('mousemove', (e) => {

        let rect = imgProfil.getBoundingClientRect();
        let x = e.clientX - rect.left - 50;
        let y = e.clientY - rect.top - 50;

        blur.style.top = y + 'px';
        blur.style.left = x + 'px'; 
    });

    imgProfil.addEventListener('mouseenter', () => {
        blur.style.display = 'block';
    });

    imgProfil.addEventListener('mouseleave', () => {
        blur.style.display = 'none';
    });
}