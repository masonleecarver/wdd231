const temp = document.querySelector("#current-temp");
const icon = document.querySelector("#weather-icon");
const caption = document.querySelector("figcaption");

const key = "bb5565074c69bb19a4869b0b51dd105f";
const lat = "49.76";
const long = "6.79";


const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=imperial`;


async function apiFetch () {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); 
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    console.log('hello');


    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    let desc = data.weather[0].description;
    icon.setAttribute("src", iconsrc);
    icon.setAttribute("alt", data.weather[0].description);
    temp.textContent = `${data.main.temp}ºF`;
    caption.textContent = desc;
}

apiFetch();