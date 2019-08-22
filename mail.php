<?php
    $resultText = "";
    $resultConfirm = false;
    if(isset($_POST['submit'])) {
        require_once('PHPMailer-5.2.25/PHPMailerAutoLoad.php');

        $mail = new PHPMailer;
        $mail->Host = 'smtp.gmail.com';
        $mail->Port = 587;
        $mail->isSMTP(true);
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = 'tls';
        $mail->Username = 'valvecsgo4@gmail.com';
        $mail->Password = '29yO3JR82veL';

        $mail->setFrom($_POST['email'], $_POST['name']);
        $mail->AddAddress('valvecsgo4@gmail.com');
        $mail->addReplyTo($_POST['email'], $_POST['name']);

        $mail->isHTML(true);
        $mail->Subject = $_POST['subject'];
        $mail->Body = $_POST['message'];

        $resultConfirm = $mail->send();
        if(!$resultConfirm) {
            $resultText = "Algo deu errado. Por favor, tente novamente.";
        } else {
            $resultText = "Obrigado por entrar em contato, " . $_POST['name'] . ". Retornaremos sua mensagem o mais breve possível.";
        }
        echo $resultText;
    }
?>