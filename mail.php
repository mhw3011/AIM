<?php
//get data from form  


$email= $_POST['email'];
$message= $_POST['message'];
$to = "mhwarsi03@gmail.com";
$subject = "Mail From website";
$txt = "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@codeconia.com" . "\r\n" .
"CC: ssomebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
?>
