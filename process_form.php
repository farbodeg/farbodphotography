<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $title = $_POST["title"];
    $message = $_POST["message"];
    $to = "farbodeg@yahoo.com";
    $subject = "New message from your website";
    $body = "Name: $name\nEmail: $email\nTitle: $title\n\n$message";
    if (mail($to, $subject, $body)) {
        echo "Message sent!";
    } else {
        echo "Error sending message.";
    }
}
?>

<meta http-equiv="refresh" content="5;url=https://test199031.000webhostapp.com/">