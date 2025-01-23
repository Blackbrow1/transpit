<?php

$title = 'Онлайн-школа ООО "Транспит Северо-Запад"';
$mainPage = '#hero';

if (isset($_POST['send-form'])) {
  if (trim($_POST['tab-number']) == '') {
    $_SESSION['errors'][] = [
      'title' => 'Введите логин'
    ];
  }

  if (trim($_POST['password']) == '') {
    $_SESSION['errors'][] = [
      'title' => 'Введите пароль'
    ];
  }

  if (empty($_SESSION['errors'])) {
    $user = R::findOne('users', 'tab_number = ?', array($_POST['tab-number']));

    if ($user) {
      if (password_verify($_POST['password'], $user->password) || $_POST['password'] == $user->password) {
        $_SESSION['logged_user'] = $user;
        $_SESSION['login'] = 1;
        $_SESSION['role'] = $user->role;

        $_SESSION['success'][] = [
          'title' => 'Рады снова Вас видеть. Учение - свет!'
        ];

        header('Location: ' . HOST . 'user-card');
        exit();
      } else {
        $_SESSION['errors'][] = [
          'title' => 'Неверный пароль'
        ];
      }
    } else {
      $_SESSION['errors'][] = [
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
