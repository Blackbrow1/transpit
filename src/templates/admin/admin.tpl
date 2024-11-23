<main>
  <section class="add-user">
    <div class="add-user__wrap">

      <?php include ROOT . "templates/components/errors.tpl"; ?>
      <?php include ROOT . "templates/components/success.tpl"; ?>

      <h1 class="add-user__title h1">Добавить нового сотрудника</h1>

      <div class="add-user__container">
        <form class="add-user__form" action="<?php echo HOST; ?>admin" method="POST">
          <fieldset>
            <legend class="visually-hidden">Добавить нового сотрудника</legend>

            <div class="add-user__inputs">
              <input
                class="add-user__input add-user__input--surname<?php if (!empty($_POST)): ?><?php if (empty($_POST['surname'])): ?> error-message<?php endif; ?><?php endif; ?>"
                type="text" name="surname" placeholder="Фамилия">
              <input
                class="add-user__input add-user__input--name<?php if (!empty($_POST)): ?><?php if (empty($_POST['name'])): ?> error-message<?php endif; ?><?php endif; ?>"
                type="text" name="name" placeholder="Имя">
              <input
                class="add-user__input add-user__input--patronymic<?php if (!empty($_POST)): ?><?php if (empty($_POST['patronymic'])): ?> error-message<?php endif; ?><?php endif; ?>"
                type="text" name="patronymic" placeholder="Отчество">
              <div class="add-user__menu add-user__filter">
                <select class="add-user__select add-user__select--post" name="post">
                  <option value="Должность" selected>Должность</option>
                  <option value="Водитель">Водитель</option>
                  <option value="Экспедитор">Экспедитор</option>
                  <option value="Супервайзер">Супервайзер</option>
                  <option value="Начальник смены">Начальник смены</option>
                </select>

                <img class="add-user__filter-img" width="19" height="10" src="./img/icons/user-menu-btn.svg"
                  alt="Открыть меню">
              </div>
              <input
                class="add-user__input add-user__input--tub-number<?php if (!empty($_POST)): ?><?php if (empty($_POST['tab-number'])): ?> error-message<?php endif; ?><?php endif; ?>"
                type="text" name="tab-number" placeholder="Табельный номер">
              <input
                class="add-user__input add-user__input--password<?php if (!empty($_POST)): ?><?php if (empty($_POST['password'])): ?> error-message<?php endif; ?><?php endif; ?>"
                type="password" name="password" placeholder="Пароль">

              <button class="add-user__submit button" type="submit" name="add-user" value="add-user">Добавить</button>
            </div>
          </fieldset>
        </form>

        <div class="add-user__standart-pass">
          <p>Пароль для нового сотрудника</p>
          <span>123</span>
        </div>
      </div>
    </div>
  </section>

  <section class="users-list">
    <div class="users-list__wrap">
      <h2 class="users-list__title h2">Список всех сотрудников</h2>

      <div class="users-list__menu filter">
        <form class="users-list__all-users" action="admin.php" method="GET">
          <select class="users-list__select" name="users-list-post">
            <option value="Все" selected>Все</option>
            <option value="Водитель">Водитель</option>
            <option value="Экспедитор">Экспедитор</option>
            <option value="Супервайзер">Супервайзер</option>
            <option value="Начальник смены">Начальник смены</option>
          </select>
        </form>

        <img class="filter__img" width="19" height="10" src="./img/icons/user-menu-btn.svg" alt="Открыть меню">
      </div>

      <ul class="users-list__list">
        <li class="users-list__item">
          <p class="users-list__item-user">Константинопольский Е.С.</p>
          <div class="users-list__item-info">
            <p>Должность: <span class="users-list__item-post">Водитель</span></p>
            <p>Табельный номер: <span class="users-list__tab-namber">4556</span></p>
          </div>

          <div class="users-list__item-buttons">
            <a class="users-list__item-button-edit" href="#">Редактировать</a>
            <button class="users-list__item-button-delete" type="button">Удалить</button>
          </div>
        </li>

        <li class="users-list__item">
          <p class="users-list__item-user">Константинопольский Е.С.</p>
          <div class="users-list__item-info">
            <p>Должность: <span class="users-list__item-post">Начальник смены</span></p>
            <p>Табельный номер: <span class="users-list__tab-namber">4556</span></p>
          </div>

          <div class="users-list__item-buttons">
            <a class="users-list__item-button-edit" href="#">Редактировать</a>
            <button class="users-list__item-button-delete" type="button">Удалить</button>
          </div>
        </li>

        <li class="users-list__item">
          <p class="users-list__item-user">Константинопольский Е.С.</p>
          <div class="users-list__item-info">
            <p>Должность: <span class="users-list__item-post">Супервайзер</span></p>
            <p>Табельный номер: <span class="users-list__tab-namber">4556</span></p>
          </div>

          <div class="users-list__item-buttons">
            <a class="users-list__item-button-edit" href="#">Редактировать</a>
            <button class="users-list__item-button-delete" type="button">Удалить</button>
          </div>
        </li>

        <li class="users-list__item">
          <p class="users-list__item-user">Константинопольский Е.С.</p>
          <div class="users-list__item-info">
            <p>Должность: <span class="users-list__item-post">Водитель</span></p>
            <p>Табельный номер: <span class="users-list__tab-namber">4556</span></p>
          </div>

          <div class="users-list__item-buttons">
            <a class="users-list__item-button-edit" href="#">Редактировать</a>
            <button class="users-list__item-button-delete" type="button">Удалить</button>
          </div>
        </li>

        <li class="users-list__item">
          <p class="users-list__item-user">Константинопольский Е.С.</p>
          <div class="users-list__item-info">
            <p>Должность: <span class="users-list__item-post">Водитель</span></p>
            <p>Табельный номер: <span class="users-list__tab-namber">4556</span></p>
          </div>

          <div class="users-list__item-buttons">
            <a class="users-list__item-button-edit" href="#">Редактировать</a>
            <button class="users-list__item-button-delete" type="button">Удалить</button>
          </div>
        </li>

        <li class="users-list__item">
          <p class="users-list__item-user">Константинопольский Е.С.</p>
          <div class="users-list__item-info">
            <p>Должность: <span class="users-list__item-post">Водитель</span></p>
            <p>Табельный номер: <span class="users-list__tab-namber">4556</span></p>
          </div>

          <div class="users-list__item-buttons">
            <a class="users-list__item-button-edit" href="#">Редактировать</a>
            <button class="users-list__item-button-delete" type="button">Удалить</button>
          </div>
        </li>

        <li class="users-list__item">
          <p class="users-list__item-user">Константинопольский Е.С.</p>
          <div class="users-list__item-info">
            <p>Должность: <span class="users-list__item-post">Водитель</span></p>
            <p>Табельный номер: <span class="users-list__tab-namber">4556</span></p>
          </div>

          <div class="users-list__item-buttons">
            <a class="users-list__item-button-edit" href="#">Редактировать</a>
            <button class="users-list__item-button-delete" type="button">Удалить</button>
          </div>
        </li>

        <li class="users-list__item">
          <p class="users-list__item-user">Константинопольский Е.С.</p>
          <div class="users-list__item-info">
            <p>Должность: <span class="users-list__item-post">Водитель</span></p>
            <p>Табельный номер: <span class="users-list__tab-namber">4556</span></p>
          </div>

          <div class="users-list__item-buttons">
            <a class="users-list__item-button-edit" href="#">Редактировать</a>
            <button class="users-list__item-button-delete" type="button">Удалить</button>
          </div>
        </li>

        <li class="users-list__item">
          <p class="users-list__item-user">Константинопольский Е.С.</p>
          <div class="users-list__item-info">
            <p>Должность: <span class="users-list__item-post">Водитель</span></p>
            <p>Табельный номер: <span class="users-list__tab-namber">4556</span></p>
          </div>

          <div class="users-list__item-buttons">
            <a class="users-list__item-button-edit" href="#">Редактировать</a>
            <button class="users-list__item-button-delete" type="button">Удалить</button>
          </div>
        </li>

        <li class="users-list__item">
          <p class="users-list__item-user">Константинопольский Е.С.</p>
          <div class="users-list__item-info">
            <p>Должность: <span class="users-list__item-post">Экспедитор</span></p>
            <p>Табельный номер: <span class="users-list__tab-namber">4556</span></p>
          </div>

          <div class="users-list__item-buttons">
            <a class="users-list__item-button-edit" href="#">Редактировать</a>
            <button class="users-list__item-button-delete" type="button">Удалить</button>
          </div>
        </li>
      </ul>

      <button class="users-list__button button button--all" type="button">Показать всех</button>
    </div>
  </section>

  <section class="users-finished-test">
    <div class="users-finished-test__wrap">
      <h2 class="users-finished-test__title h2">Сотрудники, сдавшие тест</h2>

      <div class="users-finished-test__menu filter">
        <select class="users-finished-test__select" name="users-finished-test" id="post">
          <option value="post" selected>Должность</option>
          <option value="driver">Водитель</option>
          <option value="expeditor">Экспедитор</option>
          <option value="supervisor">Супервайзер</option>
        </select>

        <img class="filter__img" width="19" height="10" src="./img/icons/user-menu-btn.svg" alt="Открыть меню">
      </div>

      <div class="users-finished-test__menu filter">
        <select class="users-finished-test__year" name="users-finished-test" id="post">
          <option value="year" selected>Год</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>

        <img class="filter__img" width="19" height="10" src="./img/icons/user-menu-btn.svg" alt="Открыть меню">
      </div>

      <ul class="users-finished-test__list">
        <li class="users-finished-test__item">
          <div class="users-finished-test__user">
            <p class="users-finished-test__user-name">Константинопольский Е.С.</p>
            <p class="users-finished-test__user-post">Должность: <span>Водитель</span></p>
            <p class="users-finished-test__user-number">Табельный номер: <span>4556</span></p>
          </div>

          <p class="users-finished-test__program">Обучение осенне-зимняя навигация</p>

          <p class="users-finished-test__date">01.10.2024</p>

          <p class="users-finished-test__progress success">Зачет</p>
        </li>

        <li class="users-finished-test__item">
          <div class="users-finished-test__user">
            <p class="users-finished-test__user-name">Константинопольский Е.С.</p>
            <p class="users-finished-test__user-post">Должность: <span>Водитель</span></p>
            <p class="users-finished-test__user-number">Табельный номер: <span>4556</span></p>
          </div>

          <p class="users-finished-test__program">Обучение осенне-зимняя навигация</p>

          <p class="users-finished-test__date">01.10.2024</p>

          <p class="users-finished-test__progress success">Зачет</p>
        </li>

        <li class="users-finished-test__item">
          <div class="users-finished-test__user">
            <p class="users-finished-test__user-name">Константинопольский Е.С.</p>
            <p class="users-finished-test__user-post">Должность: <span>Водитель</span></p>
            <p class="users-finished-test__user-number">Табельный номер: <span>4556</span></p>
          </div>

          <p class="users-finished-test__program">Обучение осенне-зимняя навигация</p>

          <p class="users-finished-test__date">01.10.2024</p>

          <p class="users-finished-test__progress unsuccess">Незачет</p>
        </li>

        <li class="users-finished-test__item">
          <div class="users-finished-test__user">
            <p class="users-finished-test__user-name">Константинопольский Е.С.</p>
            <p class="users-finished-test__user-post">Должность: <span>Водитель</span></p>
            <p class="users-finished-test__user-number">Табельный номер: <span>4556</span></p>
          </div>

          <p class="users-finished-test__program">Обучение осенне-зимняя навигация</p>

          <p class="users-finished-test__date">01.10.2024</p>

          <p class="users-finished-test__progress success">Зачет</p>
        </li>

        <li class="users-finished-test__item">
          <div class="users-finished-test__user">
            <p class="users-finished-test__user-name">Константинопольский Е.С.</p>
            <p class="users-finished-test__user-post">Должность: <span>Водитель</span></p>
            <p class="users-finished-test__user-number">Табельный номер: <span>4556</span></p>
          </div>

          <p class="users-finished-test__program">Обучение осенне-зимняя навигация</p>

          <p class="users-finished-test__date">01.10.2024</p>

          <p class="users-finished-test__progress success">Зачет</p>
        </li>

        <li class="users-finished-test__item">
          <div class="users-finished-test__user">
            <p class="users-finished-test__user-name">Константинопольский Е.С.</p>
            <p class="users-finished-test__user-post">Должность: <span>Водитель</span></p>
            <p class="users-finished-test__user-number">Табельный номер: <span>4556</span></p>
          </div>

          <p class="users-finished-test__program">Обучение осенне-зимняя навигация</p>

          <p class="users-finished-test__date">01.10.2024</p>

          <p class="users-finished-test__progress success">Зачет</p>
        </li>

        <li class="users-finished-test__item">
          <div class="users-finished-test__user">
            <p class="users-finished-test__user-name">Константинопольский Е.С.</p>
            <p class="users-finished-test__user-post">Должность: <span>Водитель</span></p>
            <p class="users-finished-test__user-number">Табельный номер: <span>4556</span></p>
          </div>

          <p class="users-finished-test__program">Обучение осенне-зимняя навигация</p>

          <p class="users-finished-test__date">01.10.2024</p>

          <p class="users-finished-test__progress success">Зачет</p>
        </li>

        <li class="users-finished-test__item">
          <div class="users-finished-test__user">
            <p class="users-finished-test__user-name">Константинопольский Е.С.</p>
            <p class="users-finished-test__user-post">Должность: <span>Водитель</span></p>
            <p class="users-finished-test__user-number">Табельный номер: <span>4556</span></p>
          </div>

          <p class="users-finished-test__program">Обучение осенне-зимняя навигация</p>

          <p class="users-finished-test__date">01.10.2024</p>

          <p class="users-finished-test__progress success">Зачет</p>
        </li>

        <li class="users-finished-test__item">
          <div class="users-finished-test__user">
            <p class="users-finished-test__user-name">Константинопольский Е.С.</p>
            <p class="users-finished-test__user-post">Должность: <span>Водитель</span></p>
            <p class="users-finished-test__user-number">Табельный номер: <span>4556</span></p>
          </div>

          <p class="users-finished-test__program">Обучение осенне-зимняя навигация</p>

          <p class="users-finished-test__date">01.10.2024</p>

          <p class="users-finished-test__progress success">Зачет</p>
        </li>

        <li class="users-finished-test__item">
          <div class="users-finished-test__user">
            <p class="users-finished-test__user-name">Константинопольский Е.С.</p>
            <p class="users-finished-test__user-post">Должность: <span>Водитель</span></p>
            <p class="users-finished-test__user-number">Табельный номер: <span>4556</span></p>
          </div>

          <p class="users-finished-test__program">Обучение осенне-зимняя навигация</p>

          <p class="users-finished-test__date">01.10.2024</p>

          <p class="users-finished-test__progress success">Зачет</p>
        </li>
      </ul>

      <button class="users-finished-test__button button button--all" type="button">Показать всех</button>
    </div>
  </section>
</main>