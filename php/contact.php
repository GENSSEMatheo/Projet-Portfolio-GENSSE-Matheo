<?php

function clean($str) {
    return htmlspecialchars(trim($str));
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nom = clean($_POST['nom'] ?? '');
    $email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
    $message = clean($_POST['message'] ?? '');

    if (!$nom || !$email || !$message) {
        echo "<p style='color:red'>Merci de remplir tous les champs correctement.</p>";
        exit;
    }

    $to = "matheogensse20@gmail.com"; // Ton adresse mail
    $subject = "Contact via le portfolio de Mathéo GENSSE";
    $body = "Nom : $nom\nEmail : $email\n\n$message";
    $headers = "From: noreply@".$_SERVER['SERVER_NAME']."\r\nReply-To: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<p style='color:green'>Votre message a bien été envoyé. Merci !</p>";
    } else {
        echo "<p style='color:red'>Erreur lors de l'envoi. Veuillez réessayer plus tard.</p>";
    }
} else {
    echo "<p style='color:red'>Méthode non autorisée.</p>";
}
?>