<main>
  <section class="test-hero">
    <div class="test-hero__wrap">
      <h1 class="test-hero__title">Внутренний тест <span>ООО &laquo;Транспит
          С-З&raquo;</span> Человеческий фактор</h1>

      <p class="test-hero__description">Тест состоит из 32 вопросов. Для положительного прохождения теста нужно ответить
        правильно на 26 вопросов, что соответствует прогрессу 80%. На прохождение теста отводится 18 минут. Нажимая на
        кнопку, включится таймер</p>

      <?php
      // Создаем уникальный токен для каждой ссылки
      $_SESSION['token'] = bin2hex(random_bytes(16)); // Генерируем случайный токен длиной 32 символа

      $urlWithToken = "?token={$_SESSION['token']}";
      ?>

      <a class="test-hero__button button" href="<?php echo HOST; ?>test-2<?php echo $urlWithToken; ?>">Начать
        тестирование</a>
    </div>
  </section>
</main>