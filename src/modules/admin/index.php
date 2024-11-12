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
  if (R::count('users', 'tab_number = ?', array($_POST['tab-number'])) > 0) {
    $errors[] = [
      'title' => 'Сотрудник с таким табельным номером уже записан'
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
    $result = R::store($user);

    if (is_int($result)) {
      $success[] = [
        'title' => 'Сотрудник зарегистрирован'
      ];
    } else {
      $errors[] = [
        'title' => 'Что-то пошло не так. Попробуйте еще раз!'
      ];
    }
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
