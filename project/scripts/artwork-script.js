import { artwork } from "../data/artwork.mjs";

const artDiv = document.querySelector("#photos");


artwork.forEach(art => {

    const card = document.createElement("div");
    card.classList.add("art-card");

    const img = document.createElement("img");
    img.setAttribute("src", art.imageurl);
    img.setAttribute("loading", "lazy");
    img.setAttribute("alt", art.title);
    img.setAttribute("title", art.title);

    const price = document.createElement("p");
    price.textContent = `Hypothetical Price: ${art.price}`;

    card.append(img, price);

    artDiv.appendChild(card);

})