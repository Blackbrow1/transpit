<?php

function updateUserAndGoToProfile($user) {
  if (isset($_POST['update'])) {
    if ( trim($_POST['name']) === '') {
      $_SESSION['errors'][] = ['title' => 'Введите имя'];
    }

    if ( trim($_POST['surname']) === '') {
      $_SESSION['errors'][] = ['title' => 'Введите фамилию'];
    }

    if ( trim($_POST['patronymic']) === '') {
      $_SESSION['errors'][] = ['title' => 'Введите отчество'];
    }




    // $mails = R::getAssoc('SELECT email FROM users');

    // foreach($mails as $mail) {
    //   if ($mail === $_POST['email']) {
    //     $_SESSION['errors'][] = ['title' => 'Такой адрес почты уже зарегистрирован'];
    //     header('Location: ' . HOST . 'user-card');
    //   }
    // }







    // Обновить инфу в БД
    if (empty($_SESSION['errors'])) {
      $user->name = htmlentities($_POST['name']);
      $user->surname = htmlentities($_POST['surname']);
      $user->patronymic = htmlentities($_POST['patronymic']);
      $user->email = htmlentities($_POST['email']);

      if (isset($_POST['password']) && $_POST['password'] !== '') {
        $user->password = password_hash($_POST['password'], PASSWORD_DEFAULT);
      }

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