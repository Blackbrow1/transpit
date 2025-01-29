<main>
  <?php if ($user['id'] === 0): ?>
  <section class="user-card">
    <div class="user-card__wrap">
      <h1 class="user-card__title">Такого пользователя не существует</h1>

      <a href="<?php echo HOST; ?>user-card" class="user-card__back">Вернуться в личный кабинет</a>
    </div>
  </section>
  <?php else: ?>
  <section class="update-profile">
    <div class="update-profile__wrap">
      <?php include ROOT . "templates/components/errors.tpl"; ?>
      <?php include ROOT . "templates/components/success.tpl"; ?>

      <h1 class="update-profile__title">Редактировать профиль</h1>

      <div class="update-profile__content">

        <?php if (isset($uriArray[1])): ?>
        <form class="update-profile__form" action="<?php echo HOST; ?>update-profile/<?php echo $uriArray[1]; ?>"
          method="POST" enctype="multipart/form-data">
          <?php else: ?>
          <form class="update-profile__form" action="<?php echo HOST; ?>update-profile" method="POST"
            enctype="multipart/form-data">
            <?php endif; ?>

            <fieldset class="update-profile__inputs">
              <legend class="visually-hidden">Обновить данные пользователя</legend>

              <input class="update-profile__input" type="text" name="surname"
                value="<?php echo isset($_POST['surname']) ? $_POST['surname'] : $user->surname; ?>"
                placeholder="Фамилия">
              <input class="update-profile__input" type="text" name="name"
                value="<?php echo isset($_POST['name']) ? $_POST['name'] : $user->name; ?>" placeholder="Имя">
              <input class="update-profile__input" type="text" name="patronymic"
                value="<?php echo isset($_POST['patronymic']) ? $_POST['patronymic'] : $user->patronymic; ?>"
                placeholder="Отчество">

              <?php if (isset($_SESSION['login']) && $_SESSION['login'] === 1): ?>
              <?php if ($_SESSION['logged_user']['role'] === 'admin'): ?>
              <div class="update-profile__menu update-profile__filter">
                <select class="update-profile__select update-profile__select--post" name="post">
                  <?php
                  $user_post = ['Водитель спецмашины', 'Водитель-экспедитор', 'Водитель автомобиля', 'Водитель автопогрузчика', 'Экспедитор', 'Супервайзер', 'Начальник смены', 'Начальник службы CCT', 'Начальник службы логистики', 'Диспетчер по управлению ресурсами', 'Инспектор службы логистики', 'Механик', 'Главный механик', 'Руководитель группы', 'Руководитель логистического комплекса', 'Аккаунт-менеджер'];

                  foreach($user_post as $item): ?>
                  <option value="<?php echo $item; ?>" <?php if($item == $user->post): ?>selected<?php endif; ?>>
                    <?php echo $item; ?></option>
                  <? endforeach; ?>
                </select>

                <img class="update-profile__filter-img" width="19" height="10" src="../img/icons/user-menu-btn.svg"
                  alt="Открыть меню">
              </div>

              <div class="update-profile__menu update-profile__filter">
                <select class="update-profile__select update-profile__select--role" name="update-role">
                  <?php $user_role = ['user', 'watcher', 'admin'];

                  foreach($user_role as $item): ?><option value="<?php echo $item; ?>"
                    <?php if($item == $user->role): ?>selected<?php endif; ?>>
                    <?php echo $item; ?></option>
                  <? endforeach; ?>
                </select>

                <img class="update-profile__filter-img" width="19" height="10" src="../img/icons/user-menu-btn.svg"
                  alt="Открыть меню">
              </div>
              <?php endif; ?>
              <?php endif; ?>

              <input class="update-profile__input" type="email" name="email"
                value="<?php echo isset($_POST['email']) ? $_POST['email'] : $user->email; ?>" placeholder="Email">
              <input class="update-profile__input" type="password" name="password" placeholder="Пароль">

              <button class="update-profile__submit button" type="submit" name="update"
                value="Обновить профиль">Обновить
                профиль</button>

              <a href="<?php echo HOST; ?>user-card" class="update-profile__back">Перейти в кабинет</a>
            </fieldset>

            <div class="update-profile__update-img">
              <div class="update-profile__update-img-info">
                <p>Изображение в формате jpg или png. Рекомендуемая ширина от 277 пикселей, высота от 277 пикселей. Вес
                  не
                  более 4 мб.</p>

                <div class="update-profile__buttons">
                  <p class="update-profile__file-name"></p>
                  <label class="update-profile__button-choose" for="update-profile__button-choose">Выбрать файл</label>
                  <input class="visually-hidden" id="update-profile__button-choose" type="file" name="avatar"
                    value="Выбрать файл">

                  <?php if(!empty($user->avatar)): ?>
                  <div class="update-profile__checkbox">
                    <label class="update-profile__delete-avatar" for="update-profile__delete-avatar">Удалить
                      фото</label>
                    <input class="update-profile__button-checkbox visually-hidden" type="checkbox" name="delete-avatar"
                      id="update-profile__delete-avatar">
                  </div>
                  <?php endif; ?>
                </div>
              </div>

              <div class="update-profile__img-block">
                <?php if(!empty($user->avatar)): ?>
                <img class="user-card__avatar-img" width="482" height="428" loading="lazy"
                  src="<?php echo HOST; ?>user-content/avatars/<?php echo $user->avatar; ?>" alt="Фото сотрудника">
                <?php else: ?>
                <img class="user-card__avatar-img" width="482" height="428" loading="lazy"
                  src="<?php echo HOST; ?>img/icons/user.svg" alt="Фото сотрудника">
                <?php endif; ?>
              </div>
            </div>
          </form>
      </div>
    </div>
  </section>
  <?php
 endif;
 ?>


</main>
