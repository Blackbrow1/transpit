<!DOCTYPE html>
<html class="page" lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1240">
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
          <?php if ($_SESSION['role'] === 'admin' || $_SESSION['role'] === 'watcher'): ?>
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
              <?php
              $user_results = R::findAll('results', 'tab_number = ?', [$user->tab_number]);
              ?>

              <?php if ($user->post === 'Водитель-экспедитор' || $user->post === 'Водитель автомобиля' || $user->post === 'Водитель автопогрузчика'):
              $found = false;

              foreach ($user_results as $test) {
                  if ($test['test_name'] === 'Тест для водителей (осень 2024)' && $test['result_name'] === 'Зачет') {
                      $found = true;
                      break;
                  }
              }

              if (!$found): ?>
              <li class="header__training-item">
                <a class="header__training-link" href="<?php echo HOST; ?>training-1">Обучение водителей (осень
                  2024)</a>
              </li>
              <?php endif; ?>
              <?php endif; ?>

              <?php if ($user->post === 'Супервайзер'):
              $found = false;

              foreach ($user_results as $test) {
                  if ($test['test_name'] === $dateString && $test['result_name'] === 'Зачет') {
                      $found = true;
                      break;
                  }
              }

              if (!$found): ?>
              <li class="header__training-item">
                <a class="header__training-link" href="<?php echo HOST; ?>training-1">Основы работы супервайзера</a>
              </li>
              <?php endif; ?>
              <?php endif; ?>

              <?php
              $found = false;
              foreach ($user_results as $test) {
                  if ($test['test_name'] === 'Безопасность на перроне (весна 2025)' && $test['result_name'] === 'Зачет') {
                      $found = true;
                      break;
                  }
              }

              if (!$found): ?>
              <li class="header__training-item">
                <a class="header__training-link" href="<?php echo HOST; ?>training-aircraft-safety">Безопасность на
                  перроне</a>
              </li>
              <?php endif; ?>

              <?php
              $found = false;
              foreach ($user_results as $test) {
                  if ($test['test_name'] === 'Человеческий фактор (январь 2025)' && $test['result_name'] === 'Зачет') {
                      $found = true;
                      break;
                  }
              }

              if (!$found): ?>
              <li class="header__training-item">
                <a class="header__training-link" href="<?php echo HOST; ?>training-2">Человеческий фактор</a>
              </li>
              <?php endif; ?>
            </ul>
          </li>
        </ul>

        <div class="header__login">
          <?php if (isset($_SESSION['login']) && $_SESSION['login'] === 1): ?>
          <div class="header__login-online"><span class="visually-hidden">Онлайн</span></div>
          <?php endif; ?>

          <a class="header__login-link" href="<?php echo HOST; ?>logout">Выход</a>

          <div class="header__avatar">
            <?php if(!empty($user->avatar)): ?>
            <img class="header__avatar-img" width="482" height="428" loading="lazy"
              src="<?php echo HOST; ?>user-content/avatars/<?php echo $user->avatarSmall; ?>" alt="Фото сотрудника">
            <?php else: ?>
            <img class="header__avatar-img" width="482" height="428" loading="lazy"
              src="<?php echo HOST; ?>img/icons/user.svg" alt="Фото сотрудника">
            <?php endif; ?>
          </div>
        </div>
      </div>
      <?php else: ?>
      <div class="header__login">
        <a class="header__login-link"
          href="<?php if (isset($mainPage)) {echo $mainPage;} else {echo HOST . 'main';} ?>">Вход</a>

        <div class="header__avatar">
          <img class="header__avatar-img" width="512" height="512" loading="lazy"
            src="<?php echo HOST; ?>img/icons/user.svg" alt="Аватар">
        </div>
      </div>
      <?php endif; ?>
    </div>

  </header>