const navItems = document.querySelectorAll('.header__menu-item');
const navItemsTraining = document.querySelectorAll('.header__training-item');

function addClassItemActive() {
  // Добавляю класс активному пункту меню
  navItems.forEach((item) => {
    let navLink = item.querySelector('.header__menu-link');

    if (navLink.href == window.location.href) {
      navLink.classList.add('header__menu-link--active');
    }

    navItemsTraining.forEach(train => {
      let link = train.querySelector('.header__training-link');

      if (link.href == window.location.href) {
        document.querySelector('.header__menu-item--training span').classList.add('header__menu-link--active');
      }
    });
  })
}

export {addClassItemActive};
