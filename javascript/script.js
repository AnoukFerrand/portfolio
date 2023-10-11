document.addEventListener("DOMContentLoaded", (event) => {


let menu__links = document.querySelector('#menu__links__burger');
let openBtn = document.querySelector('#openBtn');
let closeBtn = document.querySelector('#closeBtn');
console.log(openBtn);

openBtn.addEventListener('click', () => {
    menu__links.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu__links.classList.remove('active');
});

});