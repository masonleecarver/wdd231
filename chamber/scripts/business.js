const grid = document.querySelector("#businesses");

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

async function returnBusinesses() {
    const response = await fetch("data/members.json");
    const data = await response.json();

    return data.companies;
}


async function makeCards() {

    let companies = await returnBusinesses();

    companies.forEach(company => {

        let card = document.createElement("section");
        card.classList.add("b-card");
        
        let logo = document.createElement("img");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let pnumber = document.createElement("p");
        let website = document.createElement("a");

        logo.setAttribute("src", company.imageurl);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("height", 75);
        logo.setAttribute("alt", company.name);

        name.textContent = company.name;
        address.textContent = company.address;
        pnumber.textContent = company["phone-number"];

        if (company["web-url"] != "none")
        {
            
            website.textContent = company["web-url"];
        }

        website.setAttribute("href", company["web-url"]);
        website.setAttribute("target", "_blank");

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(pnumber);
        card.appendChild(website);

        grid.appendChild(card);

    });

}

makeCards();

gridButton.addEventListener('click', () => {
    grid.classList.add("grid");
    grid.classList.remove("list");
});

listButton.addEventListener('click', () => {
    grid.classList.add("list");
    grid.classList.remove("grid");
});