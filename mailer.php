<?php 

if(isset($_POST['submit'])){
    $to = "dossermelanie@gmail.com";
    $full_name = $_POST['full_name'];
    $attending = $_POST['attending'];
    $plus1 = $_POST['plus1'];
    $plus1_name = $_POST['plus1_name'];
    $dietary_restrictions = $_POST['dietary_restrictions'];
    $dietary_restrictions_listed = $_POST['dietary_restrictions_listed'];
    $additional_comments = $_POST['additional_comments'];
    $message = "Full Name: " . $full_name . "\n\n" . "Attending: " . $attending . "\n\n" . "+ 1: " . $plus1 . "\n\n" . "+1 Name: " . $plus1_name . "\n\n" . "Dietary Restrictions: " . $dietary_restrictions . "\n\n" . "Dietary Restrictions Details: " . $dietary_restrictions_listed . "\n\n" . "Additional Comments: " . $additional_comments; 
    $headers = "From: admin@hanifsgethitched.fun" ;
    $subject = $full_name . " RSVP";

    mail($to, $subject, $message, $headers);

    header('location: /thanks.html');
    // echo "THANKS FOR YOUR RSVP!";
}
?>

