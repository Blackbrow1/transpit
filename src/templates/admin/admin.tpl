<main>
  <?php if (isset($userNotLoggedIn)): ?>
  <section class="user-card">
    <div class="user-card__wrap">
      <h1 class="user-card__title">Войдите в личный кабинет</h1>

      <a href="<?php echo HOST; ?>main" class="user-card__back">Войти в кабинет</a>
    </div>
  </section>
  <?php elseif (isset($_SESSION['login']) && $_SESSION['login'] === 1): ?>
  <?php if($_SESSION['logged_user']['role'] === 'admin'): ?>
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
                type="text" name="surname" value="<?php if (isset($_POST['surname'])) {echo $_POST['surname'];} ?>"
                placeholder="Фамилия">
              <input
                class="add-user__input add-user__input--name<?php if (!empty($_POST)): ?><?php if (empty($_POST['name'])): ?> error-message<?php endif; ?><?php endif; ?>"
                type="text" name="name" value="<?php if (isset($_POST['name'])) {echo $_POST['name'];} ?>"
                placeholder="Имя">
              <input
                class="add-user__input add-user__input--patronymic<?php if (!empty($_POST)): ?><?php if (empty($_POST['patronymic'])): ?> error-message<?php endif; ?><?php endif; ?>"
                type="text" name="patronymic"
                value="<?php if (isset($_POST['patronymic'])) {echo $_POST['patronymic'];} ?>" placeholder="Отчество">

              <div class="add-user__city add-user__city--city big-filter">
                <select class="big-filter__select add-user__select--city" name="user-city">
                  <option value="" selected>Город</option>
                  <option value="Санкт-Петербург">Санкт-Петербург</option>
                  <option value="Москва">Москва</option>
                </select>

                <img class="big-filter__img" width="19" height="10" src="./img/icons/user-menu-btn.svg"
                  alt="Открыть меню">
              </div>

              <div class="add-user__city add-user__city--post big-filter">
                <select class="big-filter__select add-user__select--post" name="post">
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
                  <option value="Аккаунт-менеджер">Аккаунт-менеджер</option>
                </select>

                <img class="big-filter__img" width="19" height="10" src="./img/icons/user-menu-btn.svg"
                  alt="Открыть меню">
              </div>

              <input
                class="add-user__input add-user__input--tub-number<?php if (!empty($_POST)): ?><?php if (empty($_POST['tab-number'])): ?> error-message<?php endif; ?><?php endif; ?>"
                type="text" name="tab-number"
                value="<?php if (isset($_POST['tab-number'])) {echo $_POST['tab-number'];} ?>"
                placeholder="Табельный номер">

              <input
                class="add-user__input add-user__input--password<?php if (!empty($_POST)): ?><?php if (empty($_POST['password'])): ?> error-message<?php endif; ?><?php endif; ?>"
                type="password" name="password"
                value="<?php if (isset($_POST['password'])) {echo $_POST['password'];} ?>" placeholder="Пароль">

              <div class="add-user__city add-user__city--role big-filter">
                <select class="big-filter__select add-user__select--role" name="user-role">
                  <option value="" selected>Роль</option>
                  <option value="Обычный пользователь">Обычный пользователь</option>
                  <option value="Наблюдатель">Наблюдатель</option>
                  <option value="Администратор">Администратор</option>
                </select>

                <img class="big-filter__img" width="19" height="10" src="./img/icons/user-menu-btn.svg"
                  alt="Открыть меню">
              </div>

              <button class="add-user__submit button" type="submit" name="add-user" value="add-user">Добавить</button>
            </div>
          </fieldset>
        </form>

        <div class="add-user__standart-pass">
          <p>Пароль для нового сотрудника</p>
          <span>123</span>
          <p>(но можно сразу задать и более сложный)</p>
        </div>
      </div>
    </div>
  </section>

  <section class="users-list">
    <div class="users-list__wrap">
      <h2 class="users-list__title h2">Список всех сотрудников</h2>

      <div class="users-list__menu filter">
        <div class="users-list__city filter">
          <select class="users-list__city-select" name="users-list-city">
            <option value="" selected>Город</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
            <option value="Москва">Москва</option>
          </select>

          <img class="filter__img" width="19" height="10" src="../../img/icons/user-menu-btn.svg" alt="Открыть меню">
        </div>

        <div class="users-list__all-users filter">
          <select class="users-list__select" name="users-list-post">
            <option value="" selected>Все сотрудники</option>
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
            <option value="Аккаунт-менеджер">Аккаунт-менеджер</option>
          </select>

          <img class="filter__img" width="19" height="10" src="../../img/icons/user-menu-btn.svg" alt="Открыть меню">
        </div>
      </div>

      <ul class="users-list__list">
        <?php
        $users = R::findAll('users');
        foreach(array_reverse($users) as $item): ?>
        <li data-post="<?php echo $item->post; ?>" data-city="<?php echo $item->city; ?>" class="users-list__item">
          <p class="users-list__item-user"><?php echo $item->surname; ?>
            <?php echo mb_substr($item->name, 0, 1); ?>. <?php echo mb_substr($item->patronymic, 0, 1); ?>.
          </p>
          <div class="users-list__item-info">
            <p>Должность: <span class="users-list__item-post"><?php echo $item->post; ?></span></p>
            <p>Табельный номер: <span class="users-list__tab-namber"><?php echo $item->tab_number; ?></span></p>
            <p class="users-list__light-color">Город: <span><?php echo $item->city; ?></span>
            </p>
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
  <?php else: header("Location: " . HOST . 'user-card'); ?>

  <?php endif; ?>

  <?php if($_SESSION['logged_user']['role'] === 'admin' || $_SESSION['logged_user']['role'] === 'watcher'): ?>
  <section class="users-finished-test">
    <div class="users-finished-test__wrap">
      <h2 class="users-finished-test__title h2">Сотрудники, прошедшие обучение</h2>

      <div class="users-finished-test__filter">
        <div class="users-finished-test__city filter">
          <select class="users-finished-test__city-select" name="users-finished-test-city">
            <option value="" selected>Город</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
            <option value="Москва">Москва</option>
          </select>

          <img class="filter__img" width="19" height="10" src="../../img/icons/user-menu-btn.svg" alt="Открыть меню">
        </div>

        <div class="users-finished-test__menu filter">
          <select class="users-finished-test__select" name="users-finished-test" id="post">
            <option value="" selected>Все сотрудники</option>
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
            <option value="Аккаунт-менеджер">Аккаунт-менеджер</option>
          </select>

          <img class="filter__img" width="19" height="10" src="./img/icons/user-menu-btn.svg" alt="Открыть меню">
        </div>

        <div class="users-finished-test__menu filter">
          <select class="users-finished-test__year" name="users-finished-test" id="post">
            <option value="" selected>Год</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>

          <img class="filter__img" width="19" height="10" src="./img/icons/user-menu-btn.svg" alt="Открыть меню">
        </div>
      </div>

      <ul class="users-finished-test__list">
        <?php
        $results = R::findAll('results');
        foreach(array_reverse($results) as $item): ?>
        <?php $result = R::findOne('users', 'tab_number = ?', [$item->tab_number]);
        $year = date('Y', strtotime($item->date));
        ?>

        <li data-post="<?php echo $item->post; ?>" data-city="<?php echo $result->city; ?>"
          data-year="<?php echo $year; ?>" class="users-finished-test__item">
          <div class="users-finished-test__user">
            <p class="users-finished-test__user-name"><?php echo $item->surname; ?>
              <?php echo mb_substr($item->name, 0, 1); ?>. <?php echo mb_substr($item->patronymic, 0, 1); ?>.</p>
            <p class="users-finished-test__user-post">Должность: <span><?php echo $item->post; ?></span></p>
            <p class="users-finished-test__user-number">Табельный номер: <span><?php echo $item->tab_number; ?></span>
            <p class="users-finished-test__user-city">Город: <span><?php echo $result->city; ?></span>
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
  <?php else: ?>
  <section class="user-card">
    <div class="user-card__wrap">
      <h1 class="user-card__title">У вас нет прав администратора</h1>

      <a href="<?php echo HOST; ?>user-card" class="user-card__back">Вернуться в личный кабинет</a>
    </div>
  </section>
  <?php
 endif; ?>
</main>
