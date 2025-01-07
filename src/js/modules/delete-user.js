const usersListItem = document.querySelectorAll('.users-list__item');
const backgroundOverlay = document.querySelector('.overlay');

function deleteUser() {
  usersListItem.forEach((item) => {
    const buttonDelete = item.querySelector('.users-list__item-button-delete');
    const buttonQuite = item.querySelector('.users-list__item-button-quite');
    const popup = item.querySelector('.users-list__popup');

    buttonDelete.addEventListener('click', () => {
      popup.classList.remove('users-list__popup--none');
      backgroundOverlay.classList.remove('overlay--none');
    });

    buttonQuite.addEventListener('click', () => {
      popup.classList.add('users-list__popup--none');
      backgroundOverlay.classList.add('overlay--none');
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') { // код клавиши Escape, но можно использовать e.key
        popup.classList.add('users-list__popup--none');
        backgroundOverlay.classList.add('overlay--none');
      }
    });

    backgroundOverlay.addEventListener('click', () => {
      popup.classList.add('users-list__popup--none');
      backgroundOverlay.classList.add('overlay--none');
    });
  });
}

export {deleteUser}
