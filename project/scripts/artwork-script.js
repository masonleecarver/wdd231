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
    
        const price = document.createElement("span");
        price.innerHTML = `<p>${art.title}</p><br><p>Hypothetical Price: ${art.price}</p>`;

        
        card.append(img, price);
        
        if (art.imageurl === "images/Commission/Stars.webp") {
            const modal = document.createElement("dialog");
            const mButt = document.createElement("button");
            mButt.textContent = "X";
            const mTitle = document.createElement("h2");
            mTitle.textContent = "Caution - 2025";
            const stuff = document.createElement("span");
            stuff.innerHTML = `<p>Medium: Sketch on Paper</p>
            <p>Description: A person stands, cautious in their starry pajamas, in a room filled with various art pieces.</p>
            <p>Artist Statement: I enjoyed drawing this piece of art, as it shows what my ideal bedroom would look like. I had fun sketching it. The theme of the art is how I feel I may be judged for how I perceive and appreciate all kinds of art, as I have tried to draw different styles in my sketch: repeated basic patterns, suprematism, photography, portraits, etc.</p>`;

            modal.append(mButt, mTitle, stuff);

            artDiv.appendChild(modal);

            card.addEventListener("click", () => {
                modal.showModal();
                mButt.addEventListener("click", () => {
                    modal.close();
                })
            });
        };

        artDiv.appendChild(card);
    
    })
}

createArt(artwork);


artDiv.appendChild(loadMore);

