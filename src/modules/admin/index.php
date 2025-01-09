<?php
$title = 'Кабинет администратора | Транспит';

if (isset($uriArray[1])) {
  $user = R::load('users', $uriArray[1]);
} else {
  if (isset($_SESSION['login']) && $_SESSION['login'] === 1) {
    $user = R::load('users', $_SESSION['logged_user']['id']);
  } else {
    $userNotLoggedIn = true;
  }
}

if (isset($_POST['add-user'])) {
  if (trim($_POST['name']) == '') {
    $_SESSION['errors'][] = [
      'title' => 'Введите имя сотрудника'
    ];
  }

  if (trim($_POST['surname']) == '') {
    $_SESSION['errors'][] = [
      'title' => 'Введите фамилию сотрудника'
    ];
  }

  if (trim($_POST['patronymic']) == '') {
    $_SESSION['errors'][] = [
      'title' => 'Введите отчество сотрудника'
    ];
  }

  if (trim($_POST['tab-number']) == '') {
    $_SESSION['errors'][] = [
      'title' => 'Введите табельный номер сотрудника'
    ];
  }

  if (trim($_POST['password']) == '') {
    $_SESSION['errors'][] = [
      'title' => 'Задайте пароль сотруднику'
    ];
  }

  if (trim($_POST['post']) == 'Должность') {
    $_SESSION['errors'][] = [
      'title' => 'Выберите должность сотрудника'
    ];
  }

  // Проверка существующего пользователя
  if (R::count('users', 'tab_number = ?', array($_POST['tab-number'])) > 0) {
    $_SESSION['errors'][] = [
      'title' => 'Сотрудник с таким табельным номером уже записан'
    ];
  }

  if (empty($_SESSION['errors'])) {
    $user = R::dispense('users');
    $user->name = htmlentities(trim($_POST['name']));
    $user->surname = htmlentities(trim($_POST['surname']));
    $user->patronymic = htmlentities(trim($_POST['patronymic']));
    $user->tab_number = htmlentities(trim($_POST['tab-number']));
    $user->post = $_POST['post'];
    $user->password = password_hash(htmlentities(trim($_POST['password'])), PASSWORD_DEFAULT);
    $user->email = '';
    $user->role = 'user';
    $result = R::store($user);

    if (is_int($result)) {
      $_SESSION['success'][] = [
        'title' => 'Сотрудник зарегистрирован'
      ];
    } else {
      $_SESSION['errors'][] = [
        'title' => 'Что-то пошло не так. Попробуйте еще раз!'
      ];
    }
  }
}

// Удаление записи сотрудника из БД
if (isset($_GET['id'])) {
  $id = $_GET['id'];
  $m = R::load('users', $id);
  R::trash($m);
  header("Location: " . HOST . "admin");
  exit();
}

// ob_start();
// include ROOT . 'templates/admin/admin.tpl';
// $content = ob_get_contents();
// ob_end_clean();

include ROOT . 'templates/_parts/_header.tpl';
include ROOT . 'templates/admin/admin.tpl';
include ROOT . 'templates/_parts/_footer.tpl';
?>