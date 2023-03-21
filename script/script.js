//menu-hamburger

let menuLines = document.querySelectorAll('.menu-hamburger_line');
let menuHamburgerIcon = document.getElementById('menu-hamburger-icon');
let menuHamburger = document.querySelector('nav ul');

 menuHamburgerIcon.onclick = function() {
    menuLines[0].classList.toggle('menu_line1');
    menuLines[1].classList.toggle('menu_line2');
    menuLines[2].classList.toggle('menu_line3');
    menuHamburger.classList.toggle('menu-hamburger-display');
}

//preloader

window.onload = function() {
    document.querySelector('.preloader').classList.add("preloader-remove");
};