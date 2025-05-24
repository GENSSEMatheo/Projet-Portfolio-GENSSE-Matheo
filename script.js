let burgerMenuTurn = true;

function burgerMenuClic() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        const burgerMenu = document.getElementById('burgerMenu');
        const navGlob = document.querySelector('nav');

        if (burgerMenuTurn) {
            burgerMenu.style.transform = 'rotate(90deg)';
            navGlob.style.display = "flex";
            void navGlob.offsetWidth;
            navGlob.style.overflowY = 'auto';
            navGlob.style.top = '0%';
        } else {
            burgerMenu.style.transform = 'rotate(0deg)';
            navGlob.style.overflowY = 'hidden';
            navGlob.style.top = '-102%';

            navGlob.addEventListener('transitionend', function handler(e) {
                if (e.propertyName === 'top') {
                    navGlob.style.display = "none";
                    navGlob.removeEventListener('transitionend', handler);
                }
            });
        }
        burgerMenuTurn = !burgerMenuTurn;
    }
}

function basculeContenuDesTitres() {
    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(titre => {
        titre.style.cursor = "pointer";
        const parent = titre.parentElement;
        if (!parent) return;

        let suivant = titre.nextElementSibling;
        const elements = [];
        while (suivant) {
            elements.push(suivant);
            suivant = suivant.nextElementSibling;
        }

        elements.forEach(el => {
            el.style.overflow = "hidden";
            el.style.maxHeight = "1000000000vh";
            el.style.opacity = "1";
        });

        titre.addEventListener("click", function () {
            elements.forEach(el => {
                if (el.style.maxHeight !== "0vh") {
                    el.style.maxHeight = "0vh";
                    el.style.opacity = "0";
                    if (el.id === "boxGlobParagraphe") {
                        el.style.padding = "0";
                        el.style.margin = "0";
                    }
                } else {
                    el.style.maxHeight = "1000000000vh";
                    el.style.opacity = "1";
                    if (el.id === "boxGlobParagraphe") {
                        el.style.padding = "";
                        el.style.margin = "";
                    }
                }
            });
        });
    });
}
let docDemandeTitre = "";

function ouvrirFormulaireDemande(btn) {
    let eventDiv = btn.closest('.event');
    let titre = eventDiv ? eventDiv.querySelector('h3')?.innerText : "";
    docDemandeTitre = titre || "Document de certification/diplôme";
    document.getElementById('formDemandeDoc').style.display = "flex";
    document.getElementById('docDemandeTitreInput').value = docDemandeTitre;
}

function fermerFormulaireDemande() {
    document.getElementById('formDemandeDoc').style.display = "none";
    document.getElementById('mailDemandeur').value = "";
    document.getElementById('messageDemande').value = "";
}

function envoyerDemandeDoc() {
    const mail = document.getElementById('mailDemandeur').value;
    const message = document.getElementById('messageDemande').value;
    if (!mail || !message) {
        alert("Merci de remplir tous les champs.");
        return;
    }
    const destinataire = "matheogensse20@gmail.com";
    const sujet = encodeURIComponent("Demande d'obtention du document : " + docDemandeTitre);
    const corps = encodeURIComponent(
        "Bonjour,\n\nJe souhaite obtenir une copie du document suivant : " + docDemandeTitre +
        "\n\nAdresse mail de l'expéditeur : " + mail +
        "\n\nJustification :\n" + message +
        "\n\nMerci d'avance.\nCordialement."
    );
    window.location.href = `mailto:${destinataire}?subject=${sujet}&body=${corps}`;
    fermerFormulaireDemande();
}


function ouvrirModalImage(src) {
    const modal = document.getElementById('modalImage');
    const img = document.getElementById('modalImgContent');
    img.src = src;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function fermerModalImage() {
    document.getElementById('modalImage').style.display = "none";
    document.getElementById('modalImgContent').src = "";
    document.body.style.overflow = "";
}



window.addEventListener("DOMContentLoaded", function () {
    if (
        window.location.href.includes("projets.html") ||
        window.location.href.includes("competences.html")) {
        basculeContenuDesTitres();
    }
});