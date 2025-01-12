<main>
  <?php if (isset($userNotLoggedIn)): ?>
  <section class="user-card">
    <div class="user-card__wrap">
      <h1 class="user-card__title">Войдите в свой кабинет</h1>

      <a href="<?php echo HOST; ?>main" class="user-card__back">Войти в кабинет</a>
    </div>
  </section>
  <?php elseif(isset($_SESSION['login']) && $_SESSION['login'] === 1 && $user['id'] === 0): ?>
  <section class="user-card">
    <div class="user-card__wrap">
      <h1 class="user-card__title">Такого пользователя не существует</h1>

      <a href="<?php echo HOST; ?>user-card" class="user-card__back">Вернуться в личный кабинет</a>
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
              <?php if($user->email !== NULL && $user->email !== ''): ?>
              <span>Email</span>
              <?php endif; ?>
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
          <?php if(!empty($user->avatar)): ?>
          <img class="user-card__avatar-img" width="482" height="428" loading="lazy"
            src="<?php echo HOST; ?>user-content/avatars/<?php echo $user->avatar; ?>" alt="Фото сотрудника">
          <?php else: ?>
          <img class="user-card__avatar-img" width="482" height="428" loading="lazy"
            src="<?php echo HOST; ?>img/icons/user.svg" alt="Фото сотрудника">
          <?php endif; ?>
        </div>
      </div>
    </div>
  </section>

  <?php
  $user_results = R::findAll('results', 'tab_number = ?', [$user->tab_number]);
  if (count($user_results) > 0): ?>
  <section class="user-progress">
    <div class="user-progress__wrap">
      <h2 class="user-progress__title h2">Прогресс успеваемости</h2>

      <ul class="user-progress__list">
        <?php foreach(array_reverse($user_results) as $item): ?>
        <li class="user-progress__item">
          <p class="user-progress__item-date"><?php echo $item->date; ?></p>
          <p class="user-progress__item-name"><?php echo $item->test_name; ?></p>
          <p><?php echo $item->percent; ?>%</p>
          <p class="<?php echo $item->result_name == 'Зачет' ? 'success' : 'unsuccess'; ?>">
            <?php echo $item->result_name; ?></p>
        </li>
        <?php endforeach; ?>
      </ul>

      <?php if (count($user_results) > 3): ?>
      <button class="user-progress__button button" type="button">Смотреть еще</button>
      <?php endif; ?>
    </div>
  </section>
  <?php endif; ?>
  <?php endif; ?>
</main>