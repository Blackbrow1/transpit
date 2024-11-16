<main>
  <section class="set-new-pass">
    <div class="set-new-pass__popup popup">
      <form class="popup__form" action="<?php echo HOST; ?>set-new-password" method="POST">
        <fieldset>
          <?php include ROOT . "templates/components/errors.tpl"; ?>
          <?php include ROOT . "templates/components/success.tpl"; ?>

          <legend>Установить новый пароль</legend>

          <?php if (!isset($newPasswordReady)): ?>
          <input class="popup__input" type="password" name="password" placeholder="Новый пароль">

          <input type="hidden" name="email" value="<?php echo $_GET['email']; ?>">
          <input type="hidden" name="reset-code" value="<?php echo $_GET['code']; ?>">
          <button class="popup__submit button" type="submit" name="popup-submit" value="Установить пароль">Установить
            пароль</button>
          <?php endif; ?>

          <a class="popup__into" href="<?php echo HOST; ?>">Войти в систему</a>
        </fieldset>
      </form>
    </div>
  </section>
</main>
