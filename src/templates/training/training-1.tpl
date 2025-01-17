<main>
  <?php if (isset($userNotLoggedIn)): ?>
  <section class="user-card">
    <div class="user-card__wrap">
      <h1 class="user-card__title">Войдите в личный кабинет</h1>

      <a href="<?php echo HOST; ?>main" class="user-card__back">Войти в кабинет</a>
    </div>
  </section>
  <?php else: ?>
  <section class="training">
    <div class="training__wrap">
      <h1 class="training__title">Основы работы супервайзера</h1>

      <div class="training__block">
        <h2 class="visually-hidden">Обучающий блок</h2>

        <div class="training__text">
          <h3 class="training__block-title h3">Тема первого урока</h3>

          <div class="training__info">
            <!-- <p>Lorem ipsum dolor sit amet consectetur. Eu donec sit lobortis metus odio nulla dui. Aenean mauris egestas
              posuere porttitor id enim. Libero volutpat ultricies quis commodo ut interdum. At facilisis in tortor
              massa
              est.</p>

            <p>Dolor augue leo eget pretium adipiscing convallis odio. Ultrices non mattis viverra eu. Consequat aliquam
              urna ut pellentesque lorem. Tortor elit volutpat penatibus et facilisis volutpat orci massa.</p>

            <p>Dolor augue leo eget pretium adipiscing convallis odio. Ultrices non mattis viverra eu. Consequat aliquam
              urna ut pellentesque lorem. Tortor elit volutpat penatibus et facilisis volutpat orci massa.</p>

            <p>Dolor augue leo eget pretium adipiscing convallis odio. Ultrices non mattis viverra eu.</p> -->
          </div>
        </div>

        <div class="training__visual">
          <div class="training__visual-count">
            <span class="training__visual-count-number"></span> / <span class="training__visual-count-lenght"></span>
          </div>

          <div class="training__visual-buttons">
            <button class="training__btn training__btn--prev" type="button">
              <span class="visually-hidden">Назад</span>

              <svg viewBox="0 0 21 21" width="21" height="21">
                <use class="training__btn-prev-svg" href="img/icons/stack.svg#arrow-prev"></use>
              </svg>
            </button>
            <button class="training__btn training__btn--next" type="button">
              <span class="visually-hidden">Вперед</span>

              <svg viewBox="0 0 21 21" width="21" height="21">
                <use class="training__btn-next-svg" href="img/icons/stack.svg#arrow-next"></use>
              </svg>
            </button>
          </div>

          <div class="training__img-block">
            <!-- <picture>
              <source width="555" height="487" type="image/webp"
                srcset="img/training/training-img-1-desktop@1x.webp 1x, img/training/training-img-1-desktop@2x.webp 2x">
              <img class="training__img" width="555" height="487" loading="lazy"
                src="img/training/training-img-1-desktop@1x.jpg" srcset="img/training/training-img-1-desktop@2x.jpg 2x"
                alt="Изображение к теме урока">
            </picture> -->
          </div>
        </div>
      </div>

      <?php
      // Создаем уникальный токен для каждой ссылки
      $_SESSION['token'] = bin2hex(random_bytes(16)); // Генерируем случайный токен длиной 32 символа

      $urlWithToken = "?token={$_SESSION['token']}";
      ?>

      <a href="<?php echo HOST; ?>test-hero-1<?php echo $urlWithToken; ?>"
        class="training__button button training__button--disable">Сдать тест</a>
    </div>
  </section>
  <?php endif; ?>
</main>