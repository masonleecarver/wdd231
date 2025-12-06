const navbutton = document.querySelector("#nav-button");

const navbar = document.querySelector("#nav-bar");

const year = document.getElementById("current-year");

const date = new Date();

year.textContent = `\u00A9 ${date.getFullYear()}`;

document.getElementById("last-modified").innerHTML = `Last modified on ${document.lastModified}`;

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navbar.classList.toggle('open');

});
