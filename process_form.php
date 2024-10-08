<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $title = strip_tags(trim($_POST["title"]));
    $message = strip_tags(trim($_POST["message"]));
    $to = "farbodeg@yahoo.com";
    $subject = "New message from your website";
    $body = "Name: $name\nEmail: $email\nTitle: $title\n\n$message";

    $headers = "From: webmaster@yourdomain.com";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent!";
        // Redirect
        header("Location: https://test199031.000webhostapp.com/");
        exit;
    } else {
        echo "Error sending message.";
    }
}
?>
