<?php

$name = trim($_POST["name"]);
$mail = trim($_POST["mail"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["comment"]);

$message = "Имя: $name \nEmail: $mail \nТелефон: $phone \nСообщение: $comment";
$resMail = mail('olegpl1993@gmail.com', 'MySiteMailer', $message);

if ($resMail !== TRUE)
{
echo "Письмо не отправлено";
exit;
}
echo "Письмо отправлено";
