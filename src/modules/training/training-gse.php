<?php
$title = 'Основы безопасности ПРР и использования средств Механизации | Транспит';
$keywords = 'обучение, уроки, сдо, система дистанционного обучения, онлайн курс, онлайн школа';
$description = 'Обучение Основы безопасности ПРР и использования средств Механизации"';
$url = 'https://transpit-edu.ru/training-gse';

// Создаем уникальный токен для каждой ссылки
$_SESSION['token'] = bin2hex(random_bytes(16)); // Генерируем случайный токен длиной 32 символа
$urlWithToken = "?token={$_SESSION['token']}";

if (isset($uriArray[1])) {
  $user = R::load('users', $uriArray[1]);
} else {
  if (isset($_SESSION['login']) && $_SESSION['login'] === 1) {
    $user = R::load('users', $_SESSION['logged_user']['id']);
  } else {
    $userNotLoggedIn = true;
  }
}

// ob_start();
// include ROOT . 'templates/training/training.tpl';
// $content = ob_get_contents();
// ob_end_clean();

include ROOT . 'templates/_parts/_header.tpl';
include ROOT . 'templates/training/training-gse.tpl';
include ROOT . 'templates/_parts/_footer.tpl';

?>