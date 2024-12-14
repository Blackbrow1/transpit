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

    $email = R::findOne('users', 'email = ?', array($_POST['email']));

    if ($email && $_POST['email'] !== $user->email && $_POST['email'] !== '' && $_POST['email'] !== NULL) {
      $_SESSION['errors'][] = ['title' => 'Такой Email уже есть в базе. Придумайте другой!'];
    }


    // // Обновить инфу в БД
    if (empty($_SESSION['errors'])) {
      $user->name = htmlentities($_POST['name']);
      $user->surname = htmlentities($_POST['surname']);
      $user->patronymic = htmlentities($_POST['patronymic']);
      $user->email = htmlentities($_POST['email']);

      if (isset($_POST['password']) && $_POST['password'] !== '') {
        $user->password = password_hash($_POST['password'], PASSWORD_DEFAULT);
      }

      // Работа с файлом фотографии для аватара пользователя
      if ( isset($_FILES['avatar']['name']) && $_FILES['avatar']['tmp_name'] !== '') {

        // echo $_FILES['avatar']['name'];
        // echo $_FILES['avatar']['tmp_name'];
        // die();

        // 1. Записываем параметры файла в переменные
        $fileName = $_FILES["avatar"]["name"];
        $fileTmpLoc = $_FILES["avatar"]["tmp_name"];
        $fileType = $_FILES["avatar"]["type"];
        $fileSize = $_FILES["avatar"]["size"];
        $fileErrorMsg = $_FILES["avatar"]["error"];
        $kaboom = explode(".", $fileName);
        $fileExt = end($kaboom);

        // 2. Проверка файла на корректность
        // 2.1 Проверка на маленький размер изображения
        list($width, $height) = getimagesize($fileTmpLoc);
        if ($width < 160 || $height < 160) {
            $_SESSION['errors'][] = [
                'title' => 'Изображение слишком маленького размера. '
            ];
        }

        // 2.2 Проверка на большой вес файла
        if ($fileSize > 4194304) {
            $_SESSION['errors'][] = ['title' => 'Файл изображения не должен быть более 4 Mb'];
        }

        // 2.3 Проверка на формат файла
        if (!preg_match("/\.(gif|jpg|jpeg|png)$/i", $fileName)) {
            $_SESSION['errors'][]  = ['title' => 'Неверный формат файла'];
        }

        // 2.4 Проверка на формат файла
        if ($fileErrorMsg == 1) {
            $_SESSION['errors'][] = ['title' => 'При загрузке изображения произошла ошибка. Повторите попытку'];
        }

        // Если нет ошибок - двигаемся дальше
        if (empty($_SESSION['errors'])) {

            // Поверям установлен ли аватар у пользователя
            $avatar = $user->avatar;
            $avatarFolderLocation = ROOT . 'user-content/avatars/';

            // Если у подльзователя уже есть старый аватар - тогда удаляем его
            if (!empty($avatar)) {
                // Определяем путь к большой аватарке и удаляем ее
                $pictureUrl = $avatarFolderLocation . $avatar;
                file_exists($pictureUrl) ? unlink($pictureUrl) : '' ;

                // Определяем путь к маленькой аватарке и удаляем ее
                $pictureUrl277 = $avatarFolderLocation . '277-' . $avatar;
                file_exists( $pictureUrl277) ? unlink($pictureUrl277) : '';
            }

            // $moveResult = move_uploaded_file($fileTmpLoc, $uploadfile);

            $db_file_name =
            rand(100000000000,999999999999) . "." . $fileExt;
            $uploadfile482 = $avatarFolderLocation . $db_file_name;
            $uploadfile277 = $avatarFolderLocation . '277-' . $db_file_name;

            // Обработать фотографию
            // 1. Обрезать до 160х160
            // 2. Обрезать до 48х48
            $result482 = resize_and_crop($fileTmpLoc, $uploadfile482, 482, 428);
            $result277 = resize_and_crop($fileTmpLoc, $uploadfile277, 277, 277);

            if ($result482 != true || $result277 != true) {
              $_SESSION['errors'][] = ['title' => 'Ошибка сохранения файла'];
              return false;
          }

            // Сохраняем имя файла в БД
            $user->avatar = $db_file_name;
            $user->avatarSmall = '277-' . $db_file_name;
        }
      }

      // Удаление аватарки пользователя
      if (isset($_POST['delete-avatar']) && $_POST['delete-avatar'] == 'on') {
        $avatarFolderLocation = ROOT . 'user-content/avatars/';
        unlink($avatarFolderLocation . $user->avatar);
        unlink($avatarFolderLocation . '277-' . $user->avatar);

        $user->avatar = '';
        $user->avatar_small = '';
      }

      R::store($user);

      if ($user->id === $_SESSION['logged_user']['id']) {
        $_SESSION['logged_user'] = $user;
      }
      header('Location: ' . HOST . 'user-card/' . $user->id);
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
