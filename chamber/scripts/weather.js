const temp = document.querySelector("#temp");
const condition = document.querySelector("#condition");
const wind = document.querySelector("#wind");
const icon = document.querySelector("#weather-icon");

const tmr = document.querySelector("#tmr-weather");
const two = document.querySelector("#two-weather");
const three = document.querySelector("#three-weather");

const displayDate = new Date();


const key = "bb5565074c69bb19a4869b0b51dd105f";
const lat = "41.82502";
const long = "-111.32159";


const dataurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=imperial`;

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=imperial`;


async function apiFetch (url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
           if (url.includes("weather") && !url.includes("forecast")) {
            displayResults(data);
            } else if (url.includes("forecast")) {
            displayForecast(data);
            } else {
                console.log("huh");
            }
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeekday(date, num) {
    const tempDate = new Date(displayDate);
    tempDate.setDate(tempDate.getDate() + num);
    const options = { weekday: 'long'};
    return tempDate.toLocaleDateString('en-us', options);
}

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let desc = data.weather[0].description;
    icon.setAttribute("src", iconsrc);
    icon.setAttribute("alt", data.weather[0].description);
    temp.textContent = `Temp: ${data.main.temp}ºF`;
    condition.textContent = `Condition: ${desc}`;
    wind.textContent = `Wind Speed: ${data.wind.speed} MPH`;
}

function displayForecast(data) {
    const today = new Date();
    tmr.textContent = `${displayWeekday(today, 1)}: ${data.list[1].main.temp_max}ºF, ${data.list[1].weather[0].description}`;
    two.textContent = `${displayWeekday(today, 2)}: ${data.list[9].main.temp_max}ºF, ${data.list[9].weather[0].description}`;
    three.textContent = `${displayWeekday(today, 3)}: ${data.list[17].main.temp_max}ºF, ${data.list[17].weather[0].description}`;
}

apiFetch(dataurl);
apiFetch(forecastURL);