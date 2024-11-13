<main>
  <section class="password-recovery">
    <div class="password-recovery__popup popup">
      <form class="popup__form" action="<?php echo HOST; ?>password-recovery" method="POST">
        <fieldset>
          <?php include ROOT . "templates/components/errors.tpl"; ?>
          <?php include ROOT . "templates/components/success.tpl"; ?>

          <legend>Восстановление пароля</legend>

          <input class="popup__input" type="email" name="email" placeholder="Email">
          <button class="popup__submit button" type="submit" name="popup-submit"
            value="Восстановить пароль">Восстановить пароль</button>

          <a class="popup__into" href="<?php echo HOST; ?>">Войти в систему</a>
        </fieldset>
      </form>
    </div>
  </section>
</main>