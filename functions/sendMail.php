<?php


require '../src/php/phpMailer/Exception.php';
require '../src/php/phpMailer/PHPMailer.php';
require '../src/php/phpMailer/SMTP.php';

//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

 $mail->IsSMTP(); // enable SMTP
 $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
 $mail->SMTPAuth = true; // authentication enabled
 $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
 $mail->Host = "SMTP.titan.email";
 $mail->Port = 465; // or 587
 $mail->IsHTML(true);
 $mail->Username = "klab@kalanlaboratorios.com";
 $mail->Password = "0yIlfqnoFX";
 $mail->SetFrom("klab@kalanlaboratorios.com");
 $mail->Subject = "Asunto del mensaje";
 $mail->Body = "Ingrese el texto del correo electrónico aquí";
 $mail->AddAddress("klab@kalanlaboratorios.com");
 if(!$mail->Send()) {
 echo "Mailer Error: " . $mail->ErrorInfo;
 } else {
 echo "Mensaje enviado correctamente";
 }
?>