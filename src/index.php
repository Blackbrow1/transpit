<?php

require_once "config.php";

/* ..........................................

РОУТЕР // ROUTE - МАРШРУТ

............................................. */

// Обработка запроса
$uri = $_SERVER['REQUEST_URI'];
$uri = rtrim($uri, "/"); // 'site.ru/' => 'site.ru'
$uri = filter_var($uri, FILTER_SANITIZE_URL);
$uri = substr($uri, 1);
$uri = explode('?', $uri);

// Роутер
switch ($uri[0]){
    case '':
        require (ROOT . "modules/main/index.php");
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

    default:
        require ROOT . "modules/main/index.php";
        break;
}
