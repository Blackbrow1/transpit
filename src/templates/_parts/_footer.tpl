<footer class="footer">
  <div class="footer__wrap">
    <div class="footer__content">
      <?php if (isset($_SESSION['login']) && $_SESSION['login'] === 1): ?>
      <a href="<?php echo HOST; ?>user-card" class="footer__logo">
        <svg viewBox="0 0 184 35" width="184" height="35">
          <use class="footer__svg" href="<?php echo HOST; ?>img/icons/stack.svg#logo-desktop"></use>
        </svg>
      </a>
      <?php else: ?>
      <a href="#" class="header__logo">
        <svg viewBox="0 0 184 35" width="184" height="35">
          <use class="footer__svg" href="<?php echo HOST; ?>img/icons/stack.svg#logo-desktop"></use>
        </svg>
      </a>
      <?php endif; ?>

      <?php if (isset($_SESSION['login']) && $_SESSION['login'] === 1): ?>
      <ul class="footer__menu-list">
        <?php if ($_SESSION['role'] === 'admin'): ?>
        <li class="footer__menu-item">
          <a class="footer__menu-link" href="<?php echo HOST; ?>admin">
            Админ
          </a>
        </li>
        <?php endif; ?>
        <li class="footer__menu-item"><a class="footer__menu-link" href="<?php echo HOST; ?>user-card">Кабинет</a></li>
        <li class="footer__menu-item footer__menu-item--training">
          <a class="footer__menu-link">Обучение</a>
          <span class="footer__menu-item--all-trainings"></span>

          <ul class="footer__training-list">
            <?php
              $user_results = R::findAll('results', 'tab_number = ?', [$user->tab_number]);
              ?>

            <?php if ($user->post === 'Водитель-экспедитор' || $user->post === 'Водитель автомобиля' || $user->post === 'Водитель автопогрузчика'):
              $found = false;

              foreach ($user_results as $test) {
                  if ($test['test_name'] === 'Тест для водителей (осень 2024)' && $test['result_name'] === 'Зачет') {
                      $found = true;
                      break;
                  }
              }

              if (!$found): ?>
            <li class="footer__training-item">
              <a class="footer__training-link" href="<?php echo HOST; ?>training-1">Обучение водителей (осень
                2024)</a>
            </li>
            <?php endif; ?>
            <?php endif; ?>

            <?php if ($user->post === 'Супервайзер'):
              $found = false;

              foreach ($user_results as $test) {
                  if ($test['test_name'] === 'Тест для супервайзеров' && $test['result_name'] === 'Зачет') {
                      $found = true;
                      break;
                  }
              }

              if (!$found): ?>
            <li class="footer__training-item">
              <a class="footer__training-link" href="<?php echo HOST; ?>training-2">Тест для супервайзеров</a>
            </li>
            <?php endif; ?>
            <?php endif; ?>

            <?php
              $found = false;
              foreach ($user_results as $test) {
                  if ($test['test_name'] === 'Тест для всех' && $test['result_name'] === 'Зачет') {
                      $found = true;
                      break;
                  }
              }

              if (!$found): ?>
            <li class="footer__training-item">
              <a class="footer__training-link" href="<?php echo HOST; ?>training-3">Тест для всех</a>
            </li>
            <?php endif; ?>
          </ul>
        </li>
      </ul>
      <?php endif; ?>

      <div class="footer__contacts">
        <span>По вопросам обучения:</span>
        <a href="tel:+79995555555">+7 (999) 555-55-55</a>
        <span>По вопросам работы платформы:</span>
        <a href="tel:+79500158171">+7 (950) 015-81-71</a>
      </div>
    </div>

    <div class="footer__tech-info">
      <a class="footer__policy" href="<?php echo HOST; ?>policy.pdf" download>Политика конфиденциальности</a>

      <div class="footer__prasaim">
        <span>Разработано в</span>
        <a href="https://prasaim.ru" target="_blank">
          <svg viewBox="0 0 105 21" width="105" height="21">
            <use class="footer__svg" href="<?php echo HOST; ?>img/icons/stack.svg#logo-prasaim"></use>
          </svg>
        </a>
      </div>
    </div>
  </div>

  <div class="test__result test__result--hidden">
    <p class="test__result-text">Тест пройден успешно</p>

    <button class="test__result-close"><span class="visually-hidden">Закрыть окно</span></button>
  </div>
</footer>

<div id="overlay" class="overlay overlay--none"></div>

<script src="<?php echo HOST; ?>js/index.bundle.js" type="module"></script>
</body>

</html>
