<?php
$title = 'Кабинет администратора | Транспит';

if (isset($_POST['add-user'])) {
  if (trim($_POST['name']) == '') {
    $errors[] = [
      'title' => 'Введите имя сотрудника'
    ];
  }

  if (trim($_POST['surname']) == '') {
    $errors[] = [
      'title' => 'Введите фамилию сотрудника'
    ];
  }

  if (trim($_POST['patronymic']) == '') {
    $errors[] = [
      'title' => 'Введите отчество сотрудника'
    ];
  }

  if (trim($_POST['tab-number']) == '') {
    $errors[] = [
      'title' => 'Введите табельный номер сотрудника'
    ];
  }

  if (trim($_POST['password']) == '') {
    $errors[] = [
      'title' => 'Задайте пароль сотруднику'
    ];
  }

  // Проверка существующего пользователя
  if (R::count('users', 'tab_namber = ?', array($_POST['tab-number'])) > 0) {
    $errors[] = [
      'title' => 'Такой сотрудник уже записан'
    ];
  }

  if (empty($errors)) {
    $user = R::dispense('users');
    $user->name = $_POST['name'];
    $user->surname = $_POST['surname'];
    $user->patronymic = $_POST['patronymic'];
    $user->tab_number = $_POST['tab-number'];
    $user->password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $user->email = '';
    $user->role = 'user';
    R::store($user);
  }
}


// ob_start();
// include ROOT . 'templates/admin/admin.tpl';
// $content = ob_get_contents();
// ob_end_clean();

include ROOT . 'templates/_parts/_header.tpl';
include ROOT . 'templates/admin/admin.tpl';
include ROOT . 'templates/_parts/_footer.tpl';
?>
