function setCursorInInput() {
  const loginLink = document.querySelector('.header__login-link');
  const informationButton = document.querySelector('.information__button');
  const heroInputTab = document.querySelector('.hero__input--tab');

  loginLink.addEventListener('click', () => {
    heroInputTab.focus();
  });

  informationButton.addEventListener('click', () => {
    heroInputTab.focus();
  });
}

export {setCursorInInput}
