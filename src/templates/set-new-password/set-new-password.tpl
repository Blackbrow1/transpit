<main>
  <section class="set-new-pass">
    <div class="set-new-pass__popup popup">
      <form class="popup__form" action="<?php echo HOST; ?>set-new-password" method="POST">
        <fieldset>
          <legend>Установить новый пароль</legend>

          <input class="popup__input" type="password" name="password" placeholder="Новый пароль">
          <button class="popup__submit button" type="submit" name="popup-submit" value="Установить пароль">Установить
            пароль</button>

          <a class="popup__into" href="#">Войти в систему</a>
        </fieldset>
      </form>
    </div>
  </section>
</main>