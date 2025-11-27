const npCard = document.querySelector("#npCard");
const bCard = document.querySelector("#bronzeCard");
const sCard = document.querySelector("#silverCard");
const gCard = document.querySelector("#goldCard");
const npMod = document.querySelector("#np-modal");
const bMod  = document.querySelector("#bronze-modal");
const sMod = document.querySelector("#silver-modal");
const gMod = document.querySelector("#gold-modal");
const npButt = document.querySelector("#np-close");
const bButt = document.querySelector("#bronze-close");
const sButt = document.querySelector("#silver-close");
const gButt = document.querySelector("#gold-close");


npCard.addEventListener("click", () => {
    npMod.showModal();
    npButt.addEventListener("click", () => {
        npMod.close();
    })
});

bCard.addEventListener("click", () => {
    bMod.showModal();
    bButt.addEventListener("click", () => {
        bMod.close();
    })
});

sCard.addEventListener("click", () => {
    sMod.showModal();
    sButt.addEventListener("click", () => {
        sMod.close();
    })
});

gCard.addEventListener("click", () => {
    gMod.showModal();
    gButt.addEventListener("click", () => {
        gMod.close();
    })
});
