<?php
require('./config.php');

$title = 'Редактировать профиль | Транспит';

include ROOT . 'parts/header.php';

?>

<main>
  <section class="update-profile">
    <div class="update-profile__wrap">
      <h1 class="update-profile__title">Редактировать профиль</h1>

      <div class="update-profile__content">
        <form class="update-profile__form" action="" method="POST">
          <fieldset>
            <legend class="visually-hidden">Обновить данные пользователя</legend>

            <input class="update-profile__input" type="text" name="surname" placeholder="Жабников">
            <input class="update-profile__input" type="text" name="name" placeholder="Сигизмунд">
            <input class="update-profile__input" type="text" name="patronymic" placeholder="Харитонович">
            <input class="update-profile__input" type="email" name="email" placeholder="Email">
            <input class="update-profile__input" type="password" name="password" placeholder="Пароль">

            <button class="update-profile__submit button" type="submit" name="update">Обновить профиль</button>
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
                srcset="img/user-img-desktop@1x.webp 1x, img/user-img-desktop@2x.webp 2x">
              <img class="update-profile__img" width="482" height="428" loading="lazy" src="img/user-img-desktop@1x.jpg"
                srcset="img/user-img-desktop@2x.jpg 2x" alt="Фото сотрудника">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<?php
include ROOT . 'parts/footer.php';
?>