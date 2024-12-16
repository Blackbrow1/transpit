<main>
  <?php if (isset($userNotLoggedIn)): ?>
  <section class="hero" id="hero">
    <div class="hero__wrap">

      <h1 class="hero__title">Войдите в <span>свой профиль</span></h1>

      <div class="hero__description">
        <p class="hero__text">Получите ваш логин от личного кабинета у непосредственного руководителя.
          Логин равен табельному номеру, пароль - 123, по умолчанию. Когда войдете в личный кабинет, то обязательно
          поменяйте ваш пароль на более сложный.</p>

        <p class="hero__text">Добавьте адрес электронной почты в личном кабинете для восстановления пароля, в случае,
          если
          будет утерян старый
          пароль. Изучите учебные материалы, которые появятся во вкладке "Обучение" и сдавайте тесты. Приятного и
          продуктивного вам обучения!</p>
      </div>

      <form class="hero__form" action="<?php echo HOST; ?>" method="POST">
        <fieldset>
          <?php include ROOT . "templates/components/errors.tpl"; ?>
          <?php include ROOT . "templates/components/success.tpl"; ?>

          <legend>Войти в личный кабинет</legend>

          <input class="hero__input hero__input--tab" type="text" name="tab-number" placeholder="Табельный номер"
            <?php echo isset($_POST['tab-number']) ? 'value="' . $_POST['tab-number'] . '"' : ''; ?>>
          <input class="hero__input" type="password" name="password" placeholder="Пароль">

          <button class="hero__submit button" type="submit" name="send-form" value="Войти">Войти</button>

          <a class="hero__form-remember-pass" href="<?php echo HOST; ?>password-recovery">Забыли пароль?</a>
        </fieldset>
      </form>
    </div>
  </section>

  <section class="information">
    <div class="information__wrap">
      <h2 class="information__title">Об онлайн-школе ООО "Транспит С-З"</h2>

      <div class="information__content">
        <p class="information__text">Система обучения создана с целью предоставления сотрудникам ООО "Транспит
          Северо-Запад" актуальных знаний и информации. Обучение проходит как на рабочем месте, так и вне отрыва от
          работы.</p>

        <p class="information__text">Система пополняется актуальными дисциплинами, призванными помочь сотрудникам в
          выполенинии рабочих задач. А так же, дисциплинами, отвечающими за введение в аэропортовую деятельность новых
          сотрудников.</p>

        <a class="information__button button" href="#hero">Начать пользоваться</a>

        <div class="information__img">
          <picture>
            <source width="545" height="408" type="image/webp"
              srcset="img/inform-img-desktop@1x.webp 1x, img/inform-img-desktop@2x.webp 2x">
            <img width="545" height="408" loading="lazy" src="img/inform-img-desktop@1x.jpg"
              srcset="img/inform-img-desktop@2x.jpg 2x" alt="Блюдо от шефа на столе">
          </picture>
        </div>
      </div>
    </div>
  </section>
  <?php else: ?>
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
                  <option value="Водитель спецмашины">Водитель спецмашины</option>
                  <option value="Водитель-экспедитор">Водитель-экспедитор</option>
                  <option value="Водитель автомобиля">Водитель автомобиля</option>
                  <option value="Водитель автопогрузчика">Водитель автопогрузчика</option>
                  <option value="Экспедитор">Экспедитор</option>
                  <option value="Супервайзер">Супервайзер</option>
                  <option value="Начальник смены">Начальник смены</option>
                  <option value="Начальник службы">Начальник службы</option>
                  <option value="Диспетчер по управлению ресурсами">Диспетчер по управлению ресурсами</option>
                  <option value="Инспектор службы логистики">Инспектор службы логистики</option>
                  <option value="Механик">Механик</option>
                  <option value="Руководитель группы">Руководитель группы</option>
                  <option value="Руководитель логистического комплекса">Руководитель логистического комплекса</option>
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
            <option value="Водитель спецмашины">Водитель спецмашины</option>
            <option value="Водитель-экспедитор">Водитель-экспедитор</option>
            <option value="Водитель автомобиля">Водитель автомобиля</option>
            <option value="Водитель автопогрузчика">Водитель автопогрузчика</option>
            <option value="Экспедитор">Экспедитор</option>
            <option value="Супервайзер">Супервайзер</option>
            <option value="Начальник смены">Начальник смены</option>
            <option value="Начальник службы">Начальник службы</option>
            <option value="Диспетчер по управлению ресурсами">Диспетчер по управлению ресурсами</option>
            <option value="Инспектор службы логистики">Инспектор службы логистики</option>
            <option value="Механик">Механик</option>
            <option value="Руководитель группы">Руководитель группы</option>
            <option value="Руководитель логистического комплекса">Руководитель логистического комплекса</option>
          </select>
        </form>

        <img class="filter__img" width="19" height="10" src="./img/icons/user-menu-btn.svg" alt="Открыть меню">
      </div>

      <ul class="users-list__list">
        <?php
        $users = R::findAll('users');
        foreach(array_reverse($users) as $item): ?>
        <li class="users-list__item">
          <p class="users-list__item-user"><?php echo $item->surname; ?>
            <?php echo mb_substr($item->name, 0, 1); ?>. <?php echo mb_substr($item->patronymic, 0, 1); ?>.
          </p>
          <div class="users-list__item-info">
            <p>Должность: <span class="users-list__item-post"><?php echo $item->post; ?></span></p>
            <p>Табельный номер: <span class="users-list__tab-namber"><?php echo $item->tab_number; ?></span></p>
          </div>

          <div class="users-list__item-buttons">
            <a class="users-list__item-button-edit"
              href="<?php echo HOST; ?>update-profile/<?php echo $item->id; ?>">Редактировать</a>

            <button type="button" class="users-list__item-button-delete">Удалить</button>
          </div>

          <div class="users-list__popup users-list__popup--none">
            <p class="users-list__popup-text">Вы точно хотите удалить сотрудника?</p>
            <a href="<?php echo HOST; ?>admin?id=<?php echo $item->id; ?>" class="users-list__item-delete-user">Да</a>
            <button type="button" class="users-list__item-button-quite">Нет</button>
          </div>
        </li>
        <?php endforeach; ?>
      </ul>

      <button class="users-list__button button button--all" type="button">Показать еще</button>
    </div>
  </section>

  <section class="users-finished-test">
    <div class="users-finished-test__wrap">
      <h2 class="users-finished-test__title h2">Сотрудники, сдавшие тест</h2>

      <div class="users-finished-test__menu filter">
        <select class="users-finished-test__select" name="users-finished-test" id="post">
          <option value="post" selected>Должность</option>
          <option value="Водитель спецмашины">Водитель спецмашины</option>
          <option value="Водитель-экспедитор">Водитель-экспедитор</option>
          <option value="Водитель автомобиля">Водитель автомобиля</option>
          <option value="Водитель автопогрузчика">Водитель автопогрузчика</option>
          <option value="Экспедитор">Экспедитор</option>
          <option value="Супервайзер">Супервайзер</option>
          <option value="Начальник смены">Начальник смены</option>
          <option value="Начальник службы">Начальник службы</option>
          <option value="Диспетчер по управлению ресурсами">Диспетчер по управлению ресурсами</option>
          <option value="Инспектор службы логистики">Инспектор службы логистики</option>
          <option value="Механик">Механик</option>
          <option value="Руководитель группы">Руководитель группы</option>
          <option value="Руководитель логистического комплекса">Руководитель логистического комплекса</option>
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
        <?php
        $results = R::findAll('results');
        foreach(array_reverse($results) as $item): ?>
        <li class="users-finished-test__item">
          <div class="users-finished-test__user">
            <p class="users-finished-test__user-name"><?php echo $item->surname; ?>
              <?php echo mb_substr($item->name, 0, 1); ?>. <?php echo mb_substr($item->patronymic, 0, 1); ?>.</p>
            <p class="users-finished-test__user-post">Должность: <span><?php echo $item->post; ?></span></p>
            <p class="users-finished-test__user-number">Табельный номер: <span><?php echo $item->tab_number; ?></span>
            </p>
          </div>

          <p class="users-finished-test__program"><?php echo $item->test_name; ?></p>

          <p class="users-finished-test__date"><?php echo $item->date; ?></p>

          <p
            class="users-finished-test__progress <?php echo $item->result_name == 'Зачет' ? 'success' : 'unsuccess'; ?>">
            <?php echo $item->result_name; ?></p>
        </li>
        <?php endforeach; ?>
      </ul>

      <button class="users-finished-test__button button button--all" type="button">Показать еще</button>
    </div>
  </section>
  <?php endif; ?>
</main>