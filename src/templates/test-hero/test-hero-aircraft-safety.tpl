<main>
  <section class="test-hero">
    <div class="test-hero__wrap">
      <h1 class="test-hero__title">Внутренний тест <span>ООО &laquo;Транспит
          С-З&raquo;</span> Безопасность на перроне</h1>

      <p class="test-hero__description">Тест состоит из 18 вопросов. Для положительного прохождения теста нужно ответить
        правильно на 14 вопросов, что соответствует прогрессу 80%. На прохождение теста отводится 12 минут. Нажимая на
        кнопку, включится таймер</p>

      <?php
      // Создаем уникальный токен для каждой ссылки
      $_SESSION['token'] = bin2hex(random_bytes(16)); // Генерируем случайный токен длиной 32 символа

      if (isset($_SESSION['token'])) {
        $urlWithToken = "?token={$_SESSION['token']}";
      }
      ?>

      <a class="test-hero__button button"
        href="<?php echo HOST; ?>test-aircraft-safety<?php echo $urlWithToken; ?>">Начать
        тестирование</a>
    </div>
  </section>
</main>