const navbutton = document.querySelector("#nav-button");

const navbar = document.querySelector("#nav-bar");

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navbar.classList.toggle('open');

});