const OpenBtnMenu = document.querySelector('.button-menu-nav');
const modalMenu = document.querySelector('.overlay-menu-nav-block');
const CloseMdMenu = document.querySelector('.close-nav-menu');

OpenBtnMenu.addEventListener('click', () => {
    modalMenu.classList.add('is-open');
});
CloseMdMenu.addEventListener('click', () => {
    modalMenu.classList.remove('is-open');
});

const OpenBtnMenuall = document.querySelector('#open');
const modalMenuall = document.querySelector('#modalOvr');
const CloseMdMenuall = document.querySelector('#close');

OpenBtnMenuall.addEventListener('click', () => {
    modalMenuall.classList.add('is-open');
});
CloseMdMenuall.addEventListener('click', () => {
    modalMenuall.classList.remove('is-open');
});