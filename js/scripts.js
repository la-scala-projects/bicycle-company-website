var navMenu = document.querySelector('.nav-menu');
var navButton = document.querySelector('.nav-button');

navButton.addEventListener('click', menuToggle);

function menuToggle () {
    navMenu.classList.add('nav-menu--transition');
    if (navButton.classList.contains('nav-button--open')) {
        navButton.classList.remove('nav-button--open');
        navButton.classList.add('nav-button--close');
        navMenu.classList.remove('nav-menu--hidden');
        return
    }  else {
        navButton.classList.remove('nav-button--close');
        navButton.classList.add('nav-button--open');
        navMenu.classList.add('nav-menu--hidden');
        return
    }
}

window.addEventListener('resize', function() {
    navMenu.classList.remove('nav-menu--transition');
});