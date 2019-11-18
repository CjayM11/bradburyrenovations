<?php 

if(!isset ($_POST['submit'])){
    //Need to submit the form
    echo " Error; you need to submit the form"
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

//Validate
if(empty($name)||empty($visitor_email)){
    echo "Name and Eail are mandatory"
    exit;
}
//your email here
$email_from = "c.joe.mcleod@gmail.com";
$email_subject = "New Form submission";
$email_body = "You have received a new message from the user $name.\n".
"email address : $visitor_email\n".
"Here is the message:\n" $message".

$to = "c.joe.mcleod@gmail.com";
$headers = "From: $email_from\r\n";

//send email
mail($to,$email_subject,$email_body,$headers);

