const burger = document.querySelector('.nav-btn');
const menu = document.querySelector('.mobile-nav');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    body.classList.toggle('is-active');
});