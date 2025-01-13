<main>
  <section class="hero">
    <div class="hero__wrap">

      <h1 class="hero__title">Внутренняя система обучения <span>ООО “Транспит Северо-Запад”</span></h1>

      <div class="hero__description">
        <p class="hero__text">Получите ваш логин и пароль от личного кабинета у непосредственного руководителя. Когда
          войдете в личный кабинет - обязательно
          поменяйте ваш пароль на более сложный, состоящий не менее, чем из 8 символов.</p>

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

          <input class="hero__input hero__input--tab" type="text" name="tab-number" placeholder="Логин"
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

        <button class="information__button button">Начать пользоваться</button>

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
</main>