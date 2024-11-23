<main>
  <?php if (isset($userNotLoggedIn)): ?>
  <section class="user-card">
    <div class="user-card__wrap">
      <h1 class="user-card__title">Войдите в свой <a href="<?php echo HOST; ?>main">профиль</a></h1>
    </div>
  </section>
  <?php elseif($user['id'] === 0): ?>
  <section class="user-card">
    <div class="user-card__wrap">
      <h1 class="user-card__title">Такого пользователя не существует</h1>

      <a href="<?php echo HOST; ?>main" class="user-card__back">Вернуться на главную</a>
    </div>
  </section>
  <?php else: ?>
  <section class="user-card">
    <div class="user-card__wrap">
      <?php include ROOT . "templates/components/errors.tpl"; ?>
      <?php include ROOT . "templates/components/success.tpl"; ?>
      <h1 class="user-card__title">Личная карточка сотрудника</h1>

      <div class="user-card__content">
        <div class="user-card__info">
          <ul class="user-card__list">
            <li class="user-card__item">
              <span>ФИО</span>
              <p><?php echo $user->surname; ?> <?php echo $user->name; ?> <?php echo $user->patronymic; ?></p>
            </li>

            <li class="user-card__item">
              <span>Табельный номер</span>
              <p><?php echo $user->tab_number; ?></p>
            </li>

            <li class="user-card__item">
              <span>Должность</span>
              <p><?php echo $user->post; ?></p>
            </li>

            <li class="user-card__item">
              <span>Email</span>
              <p><?php echo $user->email; ?></p>
            </li>
          </ul>

          <?php if (isset($_SESSION['login']) && $_SESSION['login'] === 1): ?>
          <?php if ($_SESSION['logged_user']['role'] === 'admin'): ?>
          <a class="user-card__button button"
            href="<?php echo HOST; ?>update-profile/<?php echo $user->id; ?>">Редактировать профиль</a>
          <?php elseif ($_SESSION['logged_user']['role'] === 'user'): ?>
          <?php if ($_SESSION['logged_user']['id'] === $user->id): ?>
          <a class="user-card__button button" href="<?php echo HOST; ?>update-profile">Редактировать профиль</a>
          <?php endif; ?>
          <?php endif; ?>
          <?php endif; ?>
        </div>

        <div class="user-card__avatar">
          <picture>
            <source width="482" height="428" type="image/webp"
              srcset="<?php echo HOST; ?>img/user-img-desktop@1x.webp 1x, <?php echo HOST; ?>img/user-img-desktop@2x.webp 2x">
            <img class="user-card__avatar-img" width="482" height="428" loading="lazy"
              src="<?php echo HOST; ?>img/user-img-desktop@1x.jpg"
              srcset="<?php echo HOST; ?>img/user-img-desktop@2x.jpg 2x" alt="Фото сотрудника">
          </picture>
        </div>
      </div>
    </div>
  </section>

  <section class="user-progress">
    <div class="user-progress__wrap">
      <h2 class="user-progress__title h2">Прогресс успеваемости</h2>

      <ul class="user-progress__list">
        <li class="user-progress__item">
          <p class="user-progress__item-date">01.10.2024</p>
          <p class="user-progress__item-name">Обучение осенне-зимняя навигация</p>
          <p class="user-progress__item-success">Зачет</p>
        </li>

        <li class="user-progress__item">
          <p class="user-progress__item-date">01.10.2024</p>
          <p class="user-progress__item-name">Обучение осенне-зимняя навигация</p>
          <p class="user-progress__item-unsuccess">Незачет</p>
        </li>

        <li class="user-progress__item">
          <p class="user-progress__item-date">01.10.2024</p>
          <p class="user-progress__item-name">Обучение осенне-зимняя навигация</p>
          <p class="user-progress__item-success">Зачет</p>
        </li>
      </ul>

      <button class="user-progress__button button" type="button">Смотреть еще</button>
    </div>
  </section>
  <?php endif; ?>
</main>
