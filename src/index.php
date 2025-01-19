<?php
error_reporting(E_ALL & ~E_NOTICE); // Скрыть предупреждения типа E_NOTICE
ini_set('display_errors', 0);       // Отключить вывод ошибок на экран

require_once 'config.php';
require_once 'db.php';
require './libs/resize-and-crop.php';

$_SESSION['errors'] = [];
$_SESSION['success'] = [];

session_start();

/* ..........................................

РОУТЕР // ROUTE - МАРШРУТ

............................................. */

// Обработка запроса
$uri = $_SERVER['REQUEST_URI'];
$uri = rtrim($uri, "/"); // 'site.ru/' => 'site.ru'
$uri = filter_var($uri, FILTER_SANITIZE_URL);
$uri = substr($uri, 1);
$uri = explode('?', $uri);

if (isset($uri[1])) {
  $uriGet = $uri[1];
}

$uriArray = explode('/', $uri[0]);
$uriModule = $uriArray[0];

////////////////////////////////////////////////////////
// Путь к файлу, хранящему последний год обновления
$updateFilePath = 'last_update.txt';

// Проверка существования файла
if (!file_exists($updateFilePath)) {
    // Если файла нет, создаём его и записываем туда текущий год
    file_put_contents($updateFilePath, date('Y-m-d'));
}

// Читаем последний сохранённую дату
$lastUpdateDate = file_get_contents($updateFilePath);

// Текущие год, месяц и день
$currentDate = date('Y-m-d');
list($currentYear, $currentMonth, $currentDay) = explode('-', $currentDate);

// Проверяем, наступило ли 1 сентября нового года
if ($currentYear > substr($lastUpdateDate, 0, 4) || ($currentYear == substr($lastUpdateDate, 0, 4) && $currentMonth >= 9 && $currentDay >= 1)) {
    // Обновляем файл
    file_put_contents($updateFilePath, $currentDate);

    // Формируем строку с новой датой
    $testNameAddDate = "Основы работы супервайзера (весна $currentYear)";
} else {
    // Используем старую дату
    $lastYear = substr($lastUpdateDate, 0, 4);
    $testNameAddDate = "Основы работы супервайзера (весна $lastYear)";
}
///////////////////////////////////////////////////////

// Роутер
switch ($uriModule) {
  case '':
    if (isset($_SESSION['login']) && $_SESSION['login'] === 1) {
      require ROOT . "modules/user-card/index.php";
      break;
    }

  case '':
      require ROOT . "modules/main/index.php";
      break;

  case 'logout':
    require ROOT . "modules/main/logout.php";
    break;

  case 'admin':
      require ROOT . "modules/admin/index.php";
      break;

  case 'user-card':
      require ROOT . "modules/user-card/index.php";
      break;

  case 'update-profile':
    require ROOT . "modules/update-profile/index.php";
    break;

  // Страницы теоретического обучения
  case 'training-1':
    require ROOT . "modules/training/training-1.php";
    break;

  case 'training-2':
    require ROOT . "modules/training/training-2.php";
    break;

  case 'training-aircraft-safety':
    require ROOT . "modules/training/training-aircraft-safety.php";
    break;

  // Страницы описания тестов
  case 'test-hero-1':
    // Проверяем, передан ли токен и совпадает ли он с сохраненным в сессии
    if (!isset($_GET['token']) || $_GET['token'] !== $_SESSION['token']) {
      // Ошибка, если токен не передан или не совпадает
      header("Location: " . HOST . 'user-card');
      exit;
    }

    // Удаляем токен из сессии, чтобы избежать повторного использования
    unset($_SESSION['token']);

    require ROOT . "modules/test-hero/test-hero-1.php";
    break;

  case 'test-hero-2':
    // Проверяем, передан ли токен и совпадает ли он с сохраненным в сессии
    if (!isset($_GET['token']) || $_GET['token'] !== $_SESSION['token']) {
      // Ошибка, если токен не передан или не совпадает
      header("Location: " . HOST . 'user-card');
      exit;
    }

    // Удаляем токен из сессии, чтобы избежать повторного использования
    unset($_SESSION['token']);

    require ROOT . "modules/test-hero/test-hero-2.php";
    break;

  case "test-hero-aircraft-safety":
    // Проверяем, передан ли токен и совпадает ли он с сохраненным в сессии
    if (!isset($_GET['token']) || $_GET['token'] !== $_SESSION['token']) {
      // Ошибка, если токен не передан или не совпадает
      header("Location: " . HOST . 'user-card');
      exit;
    }

    // Удаляем токен из сессии, чтобы избежать повторного использования
    unset($_SESSION['token']);

    require ROOT . "modules/test-hero/test-hero-aircraft-safety.php";
    break;

  // Страницы тестов
  case 'test-1':
    // Проверяем, передан ли токен и совпадает ли он с сохраненным в сессии
    if (!isset($_GET['token']) || $_GET['token'] !== $_SESSION['token']) {
      // Ошибка, если токен не передан или не совпадает
      header("Location: " . HOST . 'user-card');
      exit;
    }

    // Удаляем токен из сессии, чтобы избежать повторного использования
    unset($_SESSION['token']);

    require ROOT . "modules/test/test-1.php";
    break;

  case 'test-2':
    // Проверяем, передан ли токен и совпадает ли он с сохраненным в сессии
    if (!isset($_GET['token']) || $_GET['token'] !== $_SESSION['token']) {
      // Ошибка, если токен не передан или не совпадает
      header("Location: " . HOST . 'user-card');
      exit;
    }

    // Удаляем токен из сессии, чтобы избежать повторного использования
    unset($_SESSION['token']);

    require ROOT . "modules/test/test-2.php";
    break;

  case 'test-aircraft-safety':
    // Проверяем, передан ли токен и совпадает ли он с сохраненным в сессии
    if (!isset($_GET['token']) || $_GET['token'] !== $_SESSION['token']) {
      // Ошибка, если токен не передан или не совпадает
      header("Location: " . HOST . 'user-card');
      exit;
    }

    // Удаляем токен из сессии, чтобы избежать повторного использования
    unset($_SESSION['token']);

    require ROOT . "modules/test/test-aircraft-safety.php";
    break;

  case 'submit-results':
    require ROOT . "modules/test/submit_results.php";
    break;

  case 'password-recovery':
    require ROOT . "modules/password-recovery/index.php";
    break;

  case 'set-new-password':
    require ROOT . "modules/set-new-password/index.php";
    break;

  default:
    if (isset($_SESSION['login']) && $_SESSION['login'] === 1) {
      require ROOT . "modules/user-card/index.php";
      break;
    }

    require ROOT . "modules/main/index.php";
    break;
  }