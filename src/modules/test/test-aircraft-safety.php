<?php
$title = 'Тест "Безопасность на перроне" | Транспит';

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
include ROOT . 'templates/test/test-aircraft-safety.tpl';
include ROOT . 'templates/_parts/_footer.tpl';
?>