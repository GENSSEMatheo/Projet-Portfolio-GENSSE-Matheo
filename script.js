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

            spanBurgerMenu.forEach(span => {
                span.style.backgroundColor = 'white';
            });

        } else {
            burgerMenu.style.transform = 'rotate(0deg)';
            navGlob.style.overflowY = 'hidden';
            navGlob.style.top = '-102%';

            spanBurgerMenu.forEach(span => {
                span.style.backgroundColor = '#071530';
            });
        }

        burgerMenuTurn = !burgerMenuTurn;
    }
}
