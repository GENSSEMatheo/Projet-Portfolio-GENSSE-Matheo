function ouvertureModal(src) {
    // Vérifier si la modale existe déjà
    let modal = document.getElementById("custom-modal");
    if (!modal) {
        // Création de la modale
        modal = document.createElement("div");
        modal.id = "custom-modal";
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.background = "rgba(0, 0, 0, 0.7)";
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.style.zIndex = "1000";

        // Conteneur de l'image
        let modalContent = document.createElement("div");
        modalContent.style.position = "relative";
        modalContent.style.background = "white";
        modalContent.style.padding = "10px";
        modalContent.style.borderRadius = "8px";
        modalContent.style.maxWidth = "90%";
        modalContent.style.maxHeight = "90%";
        modalContent.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";

        // Image dans la modale
        let modalImg = document.createElement("img");
        modalImg.id = "modal-img";
        modalImg.style.maxWidth = "100%";
        modalImg.style.maxHeight = "80vh";
        modalImg.style.borderRadius = "5px";

        // Bouton de fermeture
        let closeBtn = document.createElement("span");
        closeBtn.innerHTML = "&times;";
        closeBtn.style.position = "absolute";
        closeBtn.style.top = "5px";
        closeBtn.style.right = "10px";
        closeBtn.style.fontSize = "30px";
        closeBtn.style.cursor = "pointer";
        closeBtn.style.color = "black";
        closeBtn.onclick = () => document.body.removeChild(modal);

        // Ajouter les éléments à la modale
        modalContent.appendChild(closeBtn);
        modalContent.appendChild(modalImg);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Fermer la modale en cliquant en dehors de l'image
        modal.onclick = function (event) {
            if (event.target === modal) {
                document.body.removeChild(modal);
            }
        };

        // Fermer la modale avec la touche Échap
        document.addEventListener("keydown", function escClose(event) {
            if (event.key === "Escape") {
                document.body.removeChild(modal);
                document.removeEventListener("keydown", escClose);
            }
        });
    }

    // Met à jour l'image et affiche la modale
    document.getElementById("modal-img").src = src;
}
