const pCard = document.querySelector("#portrait");
const hCard = document.querySelector("#half");
const fCard = document.querySelector("#full");
const pMod = document.querySelector("#por-m");
const hMod  = document.querySelector("#half-m");
const fMod = document.querySelector("#full-m");
const pButt = document.querySelector("#p-close");
const hButt = document.querySelector("#h-close");
const fButt = document.querySelector("#f-close");


pCard.addEventListener("click", () => {
    pMod.showModal();
    pButt.addEventListener("click", () => {
        pMod.close();
    })
});

hCard.addEventListener("click", () => {
    hMod.showModal();
    hButt.addEventListener("click", () => {
        hMod.close();
    })
});

fCard.addEventListener("click", () => {
    fMod.showModal();
    fButt.addEventListener("click", () => {
        fMod.close();
    })
});
