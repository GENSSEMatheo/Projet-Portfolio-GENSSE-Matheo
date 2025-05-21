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

        const boite = titre.parentElement;
        if (!boite) return;

        const autresElements = Array.from(boite.children).filter(el => el !== titre);

        // Tout est ouvert par défaut
        autresElements.forEach(element => {
            element.classList.add("contenu-cache", "contenu-visible");
            element.style.maxHeight = element.scrollHeight + "px";
            element.style.opacity = "1";
        });

        titre.addEventListener("click", function () {
            autresElements.forEach(element => {
                if (element.classList.contains("contenu-visible")) {
                    // Fermer avec animation
                    element.style.maxHeight = "0";
                    element.style.opacity = "0";
                    setTimeout(() => {
                        element.classList.remove("contenu-visible");
                    }, 1000); // Durée identique à la transition CSS
                } else {
                    // Ouvrir avec animation
                    element.classList.add("contenu-visible");
                    // Forcer le recalcul pour l'animation
                    void element.offsetWidth;
                    element.style.maxHeight = element.scrollHeight + "px";
                    element.style.opacity = "1";
                }
            });
        });
    });
}

window.addEventListener("DOMContentLoaded", basculeContenuDesTitres);