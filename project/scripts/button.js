const tosbutton = document.querySelector("#tos-button");
const tos = document.querySelector("#tos");
const pricesbutton = document.querySelector("#prices-button");
const prices = document.querySelector("#prices");

tosbutton.addEventListener('click', () => {
    tos.classList.toggle('open');
})

pricesbutton.addEventListener('click', () => {
    prices.classList.toggle('open');
})