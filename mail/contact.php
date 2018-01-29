<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];

// Create the email and send the message
$to = 'dinnerpartysaboteur@gmail.com';
// Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Mulheres no Jornalismo Brasileiro Contato:  $name";
$email_body = "Recebeu uma mensagem do sítio Mulheres no Jornalismo Brasileiro.\n\n"."Aqui está o conteúdo:\n\nNome: $name\n\nEmail: $email_address\n\nMensagem:\n$message";
$headers = "From: noreply@mulheresnojornalismo.org.br\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
return mail($to,$email_subject,$email_body,$headers);
?>
