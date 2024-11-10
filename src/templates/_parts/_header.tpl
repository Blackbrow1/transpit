<!DOCTYPE html>
<html class="page" lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $title; ?></title>
  <link rel="stylesheet" href="css/main.css">
</head>

<body class="page__body">
  <header class="header">
    <div class="header__wrap">
      <a href="#" class="header__logo">
        <svg viewBox="0 0 184 35" width="184" height="35">
          <use class="header__svg" href="img/icons/stack.svg#logo-desktop"></use>
        </svg>
      </a>

      <div class="header__menu">
        <ul class="header__menu-list">
          <li class="header__menu-item">
            <a class="header__menu-link" href="<?php echo HOST; ?>admin">
              Админ
            </a>
          </li>
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
          <li class="header__menu-item">
            <a class="header__menu-link" href="<?php echo HOST; ?>password-recovery">
              Тест
            </a>
          </li>
        </ul>

        <div class="header__login">
          <a class="header__login-link" href="<?php echo HOST; ?>">Выход</a>

          <div class="header__avatar">
            <picture>
              <source type="image/webp" srcset="img/user-img-desktop@1x.webp 1x, img/user-img-desktop@2x.webp 2x">
              <img class="header__avatar-img" loading="lazy" src="img/user-img-desktop@1x.jpg"
                srcset="img/user-img-desktop@2x.jpg 2x" alt="Аватар">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </header>
