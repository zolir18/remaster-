<?php
 
/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
 
//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы
$name = $_POST['name'];
$user = $_POST['username'];
$email = $_POST['email'];
$messeg = $_POST['messeg'];



 
//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1283463720:AAH5vBECJ4yV1gIs4R7iE3sWnzfcZypB2sg";
 
//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "-378798969";
 
//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
  'Имя:  ' => $name,
  'фам: ' => $user,
  'Email:' => $email,
    'messeg:' => $messeg
  
);
 
//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
//Осуществляется отправка данных в переменной $sendToTelegram
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
if ($sendToTelegram) {
  include_once("index.html");
} else {
 echo "error";
}
?>
