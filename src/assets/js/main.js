const burger = document.querySelector('.nav-btn');
const mobile_nav_menu = document.querySelector('.mobile-nav');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    mobile_nav_menu.classList.toggle('is-active');
    body.classList.toggle('is-active');
});

const mediaQuery = window.matchMedia('(min-width: 768px)');

function handleMediaQuery(e) {
    // Check if the media query is true
    if (e.matches) {
        burger.classList.toggle('hidden');
        mobile_nav_menu.classList.toggle('hidden');
        if (burger.classList.contains('is-active')) {
            body.classList.toggle('is-active');
        }
    }
    else if (burger.classList.contains('hidden')) {
        burger.classList.toggle('hidden');
        mobile_nav_menu.classList.toggle('hidden');
        if (burger.classList.contains('is-active')) {
            body.classList.toggle('is-active');
        }
    }
}

// Register event listener
mediaQuery.addEventListener('change', handleMediaQuery);

// Initial check
handleMediaQuery(mediaQuery);