import { artwork } from "../data/artwork.mjs";
import { extraArt } from "../data/artwork.mjs";

const artDiv = document.querySelector("#photos");
const loadMore = document.createElement("button");
loadMore.classList.add("more");
loadMore.textContent = "Load More"

loadMore.addEventListener('click', () => {
    createArt(extraArt);
    loadMore.classList.toggle("hidden");
})


function createArt(artList) {

    artList.forEach(art => {
    
        const card = document.createElement("div");
        card.classList.add("art-card");
    
        const img = document.createElement("img");
        img.setAttribute("src", art.imageurl);
        if (art.imageurl !== "images/Commission/Author_sketch.webp") {

            img.setAttribute("loading", "lazy");
        }
        img.setAttribute("alt", art.title);
        img.setAttribute("title", art.title);
    
        const price = document.createElement("p");
        price.textContent = `Hypothetical Price: ${art.price}`;
    
        card.append(img, price);
    
        artDiv.appendChild(card);
    
    })
}

createArt(artwork);


artDiv.appendChild(loadMore);

