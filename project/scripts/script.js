const navbutton = document.querySelector("#nav-button");

const navbar = document.querySelector("#nav-bar");

const tosbutton = document.querySelector("#tos-button");
const tos = document.querySelector("#tos");
const pricesbutton = document.querySelector("#prices-button");
const prices = document.querySelector("#prices");

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navbar.classList.toggle('open');

});

tosbutton.addEventListener('click', () => {
    tos.classList.toggle('open');
})

pricesbutton.addEventListener('click', () => {
    prices.classList.toggle('open');
})

const year = document.getElementById("current-year");

const date = new Date();

year.textContent = `\u00A9 ${date.getFullYear()}`;

document.getElementById("last-modified").innerHTML = `Last modified on ${document.lastModified}`;