<?php

require_once "config.php";
require_once "db.php";

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

    case 'training':
        require ROOT . "modules/training/index.php";
        break;

    case 'user-card':
        require ROOT . "modules/user-card/index.php";
        break;

    case 'update-profile':
      require ROOT . "modules/update-profile/index.php";
      break;

    case 'test-hero':
      require ROOT . "modules/test-hero/index.php";
      break;

    case 'test':
      require ROOT . "modules/test/index.php";
      break;

    case 'password-recovery':
      require ROOT . "modules/password-recovery/index.php";
      break;

    case 'set-new-password':
      require ROOT . "modules/set-new-password/index.php";
      break;

    default:
        require ROOT . "modules/main/index.php";
        break;
}