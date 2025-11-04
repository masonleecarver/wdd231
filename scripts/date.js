const year = document.getElementById("current-year");

const date = new Date();

year.textContent = `\u00A9 ${date.getFullYear()}`;

document.getElementById("last-modified").innerHTML = `This website was last modified on ${document.lastModified}`;



