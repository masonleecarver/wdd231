import { areas } from "../data/interest.mjs";

const poiCards = document.querySelector("#poi-cards");

const msg = document.querySelector("#welcome-message");

areas.forEach(area => {

    const card = document.createElement("section");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = area.name;

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.setAttribute("src", area.imageurl);
    img.setAttribute("loading", "lazy");
    figure.appendChild(img);


    const address = document.createElement("address");
    address.textContent = area.address;

    const desc = document.createElement("p");
    desc.textContent = area.desc;

    const button = document.createElement("button");
    button.textContent = "Learn More";

    card.append(title, figure, address, desc, button);
    poiCards.appendChild(card);

});


let lastVisted = new Date(window.localStorage.getItem("lastVisited-ls") || 0);
let now = new Date();

localStorage.setItem("lastVisited-ls", now);

const one_day = 1000*60*60*24;
let diffInDays = Math.floor((now - lastVisted) / one_day);

const lvls = Date(window.localStorage.getItem("lastVisisted-ls"));

if (lastVisted.getTime() !== 0) {
    if (diffInDays < 1) {
        msg.textContent = "Back so soon! Awesome!";
    } else {
        msg.textContent = `It has been ${diffInDays} days since you were here.`
    }
} else {
    msg.textContent = "Welcome! Let us know if you have any questions.";
};

