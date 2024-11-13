<?php

$title = 'Онлайн-школа ООО "Транспит Северо-Запад"';

if (isset($_POST['send-form'])) {
  if (trim($_POST['tab-number']) == '') {
    $errors[] = [
      'title' => 'Введите табельный номер'
    ];
  }

  if (trim($_POST['password']) == '') {
    $errors[] = [
      'title' => 'Введите пароль'
    ];
  }

  if (empty($errors)) {
    $user = R::findOne('users', 'tab_number = ?', array($_POST['tab-number']));

    if ($user) {
      if (password_verify($_POST['password'], $user->password)) {
        $success[] = [
          'title' => 'Верный пароль'
        ];
      } else {
        $errors[] = [
          'title' => 'Неверный пароль'
        ];
      }
    } else {
      $errors[] = [
        'title' => 'Такой пользователь не зарегистрирован'
      ];
    }
  }
}

// ob_start();
// include ROOT . 'templates/main/main.tpl';
// $content = ob_get_contents();
// ob_end_clean();

include ROOT . 'templates/_parts/_header.tpl';
include ROOT . 'templates/main/main.tpl';
include ROOT . 'templates/_parts/_footer.tpl';
?>