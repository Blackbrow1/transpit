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
          method="POST">
          <?php else: ?>
          <form class="update-profile__form" action="<?php echo HOST; ?>update-profile" method="POST">
            <?php endif; ?>

            <fieldset>
              <legend class="visually-hidden">Обновить данные пользователя</legend>

              <input class="update-profile__input" type="text" name="surname"
                value="<?php echo isset($_POST['surname']) ? $_POST['surname'] : $user->surname; ?>"
                placeholder="Фамилия">
              <input class="update-profile__input" type="text" name="name"
                value="<?php echo isset($_POST['name']) ? $_POST['name'] : $user->name; ?>" placeholder="Имя">
              <input class="update-profile__input" type="text" name="patronymic"
                value="<?php echo isset($_POST['patronymic']) ? $_POST['patronymic'] : $user->patronymic; ?>"
                placeholder="Отчество">
              <input class="update-profile__input" type="email" name="email"
                value="<?php echo isset($_POST['email']) ? $_POST['email'] : $user->email; ?>" placeholder="Email">
              <input class="update-profile__input" type="password" name="password" placeholder="Пароль">

              <button class="update-profile__submit button" type="submit" name="update"
                value="Обновить профиль">Обновить
                профиль</button>

              <a href="<?php echo HOST; ?>user-card" class="update-profile__back">Перейти в кабинет</a>
            </fieldset>
          </form>

          <div class="update-profile__update-img">
            <div class="update-profile__update-img-info">
              <p>Изображение в формате jpg или png. Рекомендуемая ширина от 945 пикселей, высота от 400 пикселей. Вес не
                более 2 мб.</p>

              <div class="update-profile__buttons">
                <button class="update-profile__button-choose" type="button">Выбрать файл</button>
                <button class="update-profile__button-delete" type="button">Удалить</button>
              </div>
            </div>

            <div class="update-profile__img-block">
              <picture>
                <source width="482" height="428" type="image/webp"
                  srcset="<?php echo HOST; ?>img/user-img-desktop@1x.webp 1x, <?php echo HOST; ?>img/user-img-desktop@2x.webp 2x">
                <img class="update-profile__img" width="482" height="428" loading="lazy"
                  src="<?php echo HOST; ?>img/user-img-desktop@1x.jpg"
                  srcset="<?php echo HOST; ?>img/user-img-desktop@2x.jpg 2x" alt="Фото сотрудника">
              </picture>
            </div>
          </div>
      </div>
    </div>
  </section>
  <?php
 endif;
 ?>

</main>
