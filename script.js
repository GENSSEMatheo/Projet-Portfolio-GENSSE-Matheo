let burgerMenuTurn = true;

function burgerMenuClic() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        const burgerMenu = document.getElementById('burgerMenu');
        const spanBurgerMenu = document.getElementById('burger-icon').querySelectorAll('span');
        const navGlob = document.querySelector('nav');

        if (burgerMenuTurn) {
            burgerMenu.style.transform = 'rotate(90deg)';
            navGlob.style.overflowY = 'auto';
            navGlob.style.top = '0%';


        } else {
            burgerMenu.style.transform = 'rotate(0deg)';
            navGlob.style.overflowY = 'hidden';
            navGlob.style.top = '-102%';

        }

        burgerMenuTurn = !burgerMenuTurn;
    }
}

function basculeContenuDesTitres() {
    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(titre => {
        titre.style.cursor = "pointer";
        const parent = titre.parentElement;
        if (!parent) return;

        // On prend tous les éléments frères après le titre
        let suivant = titre.nextElementSibling;
        const elements = [];
        while (suivant) {
            elements.push(suivant);
            suivant = suivant.nextElementSibling;
        }

        // Initialisation : tout visible
        elements.forEach(el => {
            el.style.overflow = "hidden";
            el.style.transition = "max-height 0.4s, opacity 0.4s";
            el.style.maxHeight = el.scrollHeight + "vh";
            el.style.opacity = "1";
        });

        titre.addEventListener("click", function () {
            elements.forEach(el => {
                if (el.style.maxHeight !== "0px") {
                    el.style.maxHeight = "0px";
                    el.style.opacity = "0";
                } else {
                    el.style.maxHeight = el.scrollHeight + "px";
                    el.style.opacity = "1";
                }
            });
        });
    });
}

window.addEventListener("DOMContentLoaded", basculeContenuDesTitres);