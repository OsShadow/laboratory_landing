<?php
    
    $strName = $_POST['name'];

    $strEmail = $_POST['email'];

    $strPhone = $_POST['phone'];

    $strMessageToSend = "Nombre: " . $strName . "\r\nCorreo electrónico: " . $strEmail . "\r\nTeléfono: " . $strPhone ;

    
    require '../../src/php/phpMailer/Exception.php';
    require '../../src/php/phpMailer/PHPMailer.php';
    require '../../src/php/phpMailer/SMTP.php';

    //Import PHPMailer classes into the global namespace
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    // echo "$strMessageToSend"; return;
    $strMessageToSend = nl2br($strMessageToSend);

    $mail = new PHPMailer;

    //$mail->SMTPDebug = 3;                               // Enable verbose debug output
    
    $mail->isSMTP();   // Set mailer to use SMTP
    // $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
    $mail->Host = 'SMTP.titan.email';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'klab@kalanlaboratorios.com';                 // SMTP username
    $mail->Password = '0yIlfqnoFX';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    $mail->setFrom('klab@kalanlaboratorios.com', 'Kalan laboratorios');
    $mail->addAddress('kalanlaboratorios@hotmail.com');               // Add a recipient
    $mail->addReplyTo($strEmail, $strName);
    $mail->ContentType = 'text/plain';
    $mail->isHTML(false);                               // Set email format to HTML
    $mail->CharSet = 'UTF-8';
    $mail->Subject = 'Prospecto interesado - Kalan';
    $mail->Body    = $strMessageToSend;
    $mail->AltBody = $strMessageToSend;

    sleep(1);

    if (!$mail->send()) {
        echo $mail->ErrorInfo;
    } else {
        echo "OK";
    }