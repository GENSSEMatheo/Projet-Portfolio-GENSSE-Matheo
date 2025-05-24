<?php

function clean($str) {
    return htmlspecialchars(trim($str));
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $mail = filter_var($_POST['mailDemandeur'] ?? '', FILTER_VALIDATE_EMAIL);
    $message = clean($_POST['messageDemande'] ?? '');
    $titre = clean($_POST['docDemandeTitre'] ?? 'Document de certification/diplôme');

    if (!$mail || empty($message)) {
        echo "Merci de remplir tous les champs.";
        exit;
    }

    $to = "matheogensse20@gmail.com"; // Ton adresse mail
    $subject = "Demande d'obtention du document : $titre";
    $body = "Bonjour,\n\nJe souhaite obtenir une copie du document suivant : $titre\n\nAdresse mail de l'expéditeur : $mail\n\nJustification :\n$message\n\nMerci d'avance.\nCordialement.";
    $headers = "From: noreply@".$_SERVER['SERVER_NAME']."\r\nReply-To: $mail";

    if (mail($to, $subject, $body, $headers)) {
        echo "Votre demande a bien été envoyée. Merci !";
    } else {
        echo "Erreur lors de l'envoi. Veuillez réessayer plus tard.";
    }
} else {
    echo "Méthode non autorisée.";
}
?>