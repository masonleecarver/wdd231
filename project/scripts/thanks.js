const myInfo = JSON.parse(sessionStorage.getItem("formData"));

let numOrdered = window.localStorage.getItem("numOrders-ls") || 0;

numOrdered++

localStorage.setItem("numOrdered-ls", numOrdered);

document.querySelector("#form-deets").innerHTML = `
<p>Thank you so much for your order, <strong>${myInfo.first} ${myInfo.last}</strong>!
<p>If I'm not mistaken, you've ordered a <strong>${myInfo.size}</strong> <strong>${myInfo.state}</strong>...</p>
<p>I should be able to do that! If I can't I'll contact you at:</p>
<p>Your Email: ${myInfo.email}</p>
<p>Your Phone Number: ${myInfo.tel}</p>
<p>You've ordered from me ${numOrdered} time(s)! I hope that number goes up ;)! Hehehe.</p>
<p>Look forward to hearing from me soon!</p>`;
