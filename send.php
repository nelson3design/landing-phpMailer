<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
    <link rel="stylesheet" href="index.css">
    <link rel="icon" type="image/png" href="logo.png" />

    <title>Elements</title>
</head>

<body>

    <?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;


    require './lib/vendor/autoload.php';


    $data = filter_input_array(INPUT_POST, FILTER_DEFAULT);


    $mail = new PHPMailer(true);
    try {

        $mail->CharSet = 'UTF-8';
        $mail->isSMTP();
        $mail->Host = 'smtp.dreamhost.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'nelson@mynelson.xyz';
        $mail->Password = 'Mendeleve1@';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom('nelson@mynelson.xyz');



        $to = 'nelson@mynelson.xyz';
        $nome = 'Nelson';
        $nome = 'inVettor';
        $assunto = "Avaliação QRCode";
        $mensagem = "Recebemos uma mensagem no site <a href='https://mynelson.xyz/'></a></a><br/>
              <strong>Nome:</strong> $data[name]<br/>
              <strong>e-mail:</strong> $data[email]<br/>
              <strong>mensagem:</strong> $data[message]";

         $reply= $data[email];
       

        $mail->AddAddress($to, $nome);
         $mail->addReplyTo($reply);
        $mail->WordWrap = 50;
        $mail->IsHTML = true;
        $mail->Subject = $assunto;
        $mail->Body = '<br/>' . $mensagem . '<br/>';
        $mail->AltBody = "$mensagem";



        $mail->send();
        unset($data);

       
    } catch (Exception $e) {
      
    }
    ?>




    <div class="body">
        <div class="item">

            <div class="sent">
                <div class="logo">
                    <i class="far fa-check-circle"></i>
                </div>

                <div class="sent-text">
                    <div class="success">success!</div>
                    <div class="message-2">your message has been sent.</div>
                </div>
                <div class="btn-sent">
                    <a href="index.html">ok</a>
                </div>
            </div>

        </div>
    </div>
    <script src="index.js"></script>
</body>

</html>