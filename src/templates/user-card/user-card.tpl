<main>
  <section class="user-card">
    <div class="user-card__wrap">
      <h1 class="user-card__title">Личная карточка сотрудника</h1>

      <div class="user-card__content">
        <div class="user-card__info">
          <ul class="user-card__list">
            <li class="user-card__item">
              <span>ФИО</span>
              <p>Жабников Сигизмунд Харитонович</p>
            </li>

            <li class="user-card__item">
              <span>Табельный номер</span>
              <p>7685</p>
            </li>

            <li class="user-card__item">
              <span>Должность</span>
              <p>Водитель спецмашины</p>
            </li>

            <li class="user-card__item">
              <span>Email</span>
              <p>alexeev@mail.ru</p>
            </li>
          </ul>

          <a class="user-card__button button" href="<?php echo HOST; ?>update-profile.php">Редактировать профиль</a>
        </div>

        <div class="user-card__avatar">
          <picture>
            <source width="482" height="428" type="image/webp"
              srcset="img/user-img-desktop@1x.webp 1x, img/user-img-desktop@2x.webp 2x">
            <img class="user-card__avatar-img" width="482" height="428" loading="lazy" src="img/user-img-desktop@1x.jpg"
              srcset="img/user-img-desktop@2x.jpg 2x" alt="Фото сотрудника">
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
</main>