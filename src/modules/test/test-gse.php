<?php
$title = 'Тест "Основы безопасности ПРР и использования средств Механизации" | Транспит';
$keywords = 'тест';
$description = 'Страница тестирования "Основы безопасности ПРР и использования средств Механизации"';
$url = 'https://transpit-edu.ru/test-gse';

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
// include ROOT . 'templates/test/test.tpl';
// $content = ob_get_contents();
// ob_end_clean();

include ROOT . 'templates/_parts/_header.tpl';
include ROOT . 'templates/test/test-gse.tpl';
include ROOT . 'templates/_parts/_footer.tpl';
?>