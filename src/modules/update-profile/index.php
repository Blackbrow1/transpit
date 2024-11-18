<?php

function updateUserAndGoToProfile($user) {
  if (isset($_POST['update'])) {
    global $errors;

    if ( trim($_POST['name']) === '') {
      $errors[] = ['title' => 'Введите имя'];
    }
    if ( trim($_POST['surname']) === '') {
      $errors[] = ['title' => 'Введите фамилию'];
    }
    if ( trim($_POST['patronymic']) === '') {
      $errors[] = ['title' => 'Введите отчество'];
    }

    // Обновить инфу в БД
    if (empty($errors)) {
      $user->name = htmlentities($_POST['name']);
      $user->surname = htmlentities($_POST['surname']);
      $user->patronymic = htmlentities($_POST['patronymic']);
      $user->email = htmlentities($_POST['email']);
      $user->password = password_hash($_POST['password'], PASSWORD_DEFAULT);

      R::store($user);
      $_SESSION['logged_user'] = $user;
      header('Location: ' . HOST . 'user-card');
      exit();
    }
  }
}

$title = 'Редактировать профиль | Транспит';

if (isset($_SESSION['login']) && $_SESSION['login'] === 1) {
  if ($_SESSION['logged_user']['role'] === 'user') {
    $user = R::load('users', $_SESSION['logged_user']['id']);

    updateUserAndGoToProfile($user);

  } else if ($_SESSION['logged_user']['role'] === 'admin') {
    if (isset($uriArray[1])) {
      $user = R::load('users', intval($uriArray[1]));

      updateUserAndGoToProfile($user);

    } else {
      $user = R::load('users', $_SESSION['logged_user']['id']);

      updateUserAndGoToProfile($user);
    }
  }
} else {
  header('Location: ' . HOST . 'main');
  exit();
}

// ob_start();
// include ROOT . 'templates/update-profile/update-profile.tpl';
// $content = ob_get_contents();
// ob_end_clean();

include ROOT . 'templates/_parts/_header.tpl';
include ROOT . 'templates/update-profile/update-profile.tpl';
include ROOT . 'templates/_parts/_footer.tpl';
?>