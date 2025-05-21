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
        titre.addEventListener("click", function () {
            const boite = titre.parentElement; 
            if (!boite) return;
            Array.from(boite.children).forEach(element => {
                if (element !== titre) {
                    if (element.style.display === "none") {
                        element.style.display = "";
                    } else {
                        element.style.display = "none";
                    }
                }
            });
        });
    });
}

window.addEventListener("DOMContentLoaded", basculeContenuDesTitres);
