/**
 * Header scroll operation
 */
const siteHeader = document.querySelectorAll('.header')[0];

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        siteHeader.classList.add('header--fixed');
    } else {
        siteHeader.classList.remove('header--fixed');
    }

    console.log('ada');
});


/**
 * Hamburger menu operation
 */
function toggleMenuIcon() {
    let initialImg = document.getElementById("hamburgerMenuIcon").src;
    let srcTest = initialImg.includes('assets/img/hamburger-menu.svg');
    let newImg = {
        'true': 'assets/img/icons-close.png',
        'false': 'assets/img/hamburger-menu.svg'
    }[srcTest];

    return newImg;
}

const hamburgerMenu = document.getElementById("hamburgerMenu");

hamburgerMenu.addEventListener("click", function () {
    document.querySelectorAll(".header")[0].classList.toggle('header-menu--active');
    document.querySelectorAll(".homepage")[0].classList.toggle('overflow-hidden');
    document.getElementById("hamburgerMenuIcon").src = toggleMenuIcon();
});