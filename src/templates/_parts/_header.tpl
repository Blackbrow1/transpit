<!DOCTYPE html>
<html class="page" lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $title; ?></title>
  <link rel="stylesheet" href="<?php echo HOST; ?>css/main.css">
</head>

<body class="page__body">
  <header class="header">
    <div class="header__wrap">
      <?php if (isset($_SESSION['login']) && $_SESSION['login'] === 1): ?>
      <a href="<?php echo HOST; ?>user-card" class="header__logo">
        <svg viewBox="0 0 184 35" width="184" height="35">
          <use class="header__svg" href="<?php echo HOST; ?>img/icons/stack.svg#logo-desktop"></use>
        </svg>
      </a>
      <?php else: ?>
      <a href="#" class="header__logo">
        <svg viewBox="0 0 184 35" width="184" height="35">
          <use class="header__svg" href="<?php echo HOST; ?>img/icons/stack.svg#logo-desktop"></use>
        </svg>
      </a>
      <?php endif; ?>

      <?php if (isset($_SESSION['login']) && $_SESSION['login'] === 1): ?>
      <div class="header__menu">
        <ul class="header__menu-list">
          <?php if ($_SESSION['role'] === 'admin'): ?>
          <li class="header__menu-item">
            <a class="header__menu-link" href="<?php echo HOST; ?>admin">
              Админ
            </a>
          </li>
          <?php endif; ?>

          <li class="header__menu-item">
            <a class="header__menu-link" href="<?php echo HOST; ?>user-card">
              Кабинет
            </a>
          </li>
          <li class="header__menu-item header__menu-item--training">
            <a class="header__menu-link"><span>Обучение</span></a>
            <span class="header__menu-item--all-trainings"></span>

            <ul class="header__training-list">
              <li class="header__training-item">
                <a class="header__training-link" href="<?php echo HOST; ?>training">Зимняя подготовка водителей</a>
              </li>

              <li class="header__training-item">
                <a class="header__training-link" href="<?php echo HOST; ?>training">Зимняя подготовка
                  экспедиторов</a>
              </li>

              <li class="header__training-item">
                <a class="header__training-link" href="<?php echo HOST; ?>training">Зимняя подготовка
                  экспедиторов</a>
              </li>
            </ul>
          </li>
        </ul>

        <div class="header__login">
          <a class="header__login-link" href="<?php echo HOST; ?>logout">Выход</a>

          <div class="header__avatar">
            <picture>
              <source type="image/webp"
                srcset="<?php echo HOST; ?>img/user-img-desktop@1x.webp 1x, <?php echo HOST; ?>img/user-img-desktop@2x.webp 2x">
              <img class="header__avatar-img" loading="lazy" src="<?php echo HOST; ?>img/user-img-desktop@1x.jpg"
                srcset="<?php echo HOST; ?>img/user-img-desktop@2x.jpg 2x" alt="Аватар">
            </picture>
          </div>
        </div>
      </div>
      <?php else: ?>
      <div class="header__login">
        <a class="header__login-link"
          href="<?php if (isset($mainPage)) {echo $mainPage;} else {echo HOST . 'main';} ?>">Вход</a>

        <div class="header__avatar">
          <picture>
            <source type="image/webp"
              srcset="<?php echo HOST; ?>img/user-img-desktop@1x.webp 1x, <?php echo HOST; ?>img/user-img-desktop@2x.webp 2x">
            <img class="header__avatar-img" loading="lazy" src="<?php echo HOST; ?>img/user-img-desktop@1x.jpg"
              srcset="<?php echo HOST; ?>img/user-img-desktop@2x.jpg 2x" alt="Аватар">
          </picture>
        </div>
      </div>
      <?php endif; ?>
    </div>
  </header>