const year = document.getElementById("current-year");

const date = new Date();

year.textContent = `\u00A9 ${date.getFullYear()}`;

document.getElementById("last-modified").innerHTML = `Last modified on ${document.lastModified}`;



