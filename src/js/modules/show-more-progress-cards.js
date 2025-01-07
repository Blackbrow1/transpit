// Показать следующие 3 результата теста в личном кабинете
function showMoreProgressCards(item, button) {
  const usersItems = document.querySelectorAll(item);
  const usersListButton = document.querySelector(button);

  let counter = 3;

  usersItems.forEach((item, index) => {
    if (index >= counter) {
      item.classList.add('remove-elem');
    }

    if (usersItems.length < counter) {
      usersListButton.classList.add('remove-elem');
    } else {
      usersListButton.classList.remove('remove-elem');
    }
  });

  usersListButton.addEventListener('click', () => {
    counter += 3;

    usersItems.forEach((item, index) => {
      if (index < counter) {
        item.classList.remove('remove-elem');
      }

      if (counter >= usersItems.length) {
        usersListButton.classList.add('remove-elem');
      }
    });
  });
}

export {showMoreProgressCards}
