<?php
require('./config.php');

$title = 'Восстановление пароля | Транспит';

include ROOT . 'parts/header.php';
?>

<main>
  <section class="password-recovery">
    <div class="password-recovery__popup popup">
      <form class="popup__form" action="#" method="POST">
        <fieldset>
          <legend>Восстановление пароля</legend>

          <input class="popup__input" type="email" name="email" placeholder="Email">
          <button class="popup__submit button" type="submit" name="popup-submit">Восстановить пароль</button>

          <a class="popup__into" href="#">Войти в систему</a>
        </fieldset>
      </form>
    </div>
  </section>
</main>

<?php
include ROOT . 'parts/footer.php';
?>