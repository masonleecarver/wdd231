async function returnBusinesses() {
    const response = await fetch("data/members.json");
    const data = await response.json();

    return data.companies;
}


async function makeCards() {

    let companies = await returnBusinesses();

    company1 = companies[Math.floor(Math.random()*companies.length)];
    company2 = companies[Math.floor(Math.random()*companies.length)];

    companies = [company1, company2];

    let grid = document.querySelector("#company-spotlight");

    companies.forEach(company => {

        let card = document.createElement("section");
        card.classList.add("b-card");
        
        let logo = document.createElement("img");
        let name = document.createElement("h3");
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