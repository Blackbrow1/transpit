function dateFilter(select, item, button) {
  const usersSelect = document.querySelector(select);
  const usersItems = document.querySelectorAll(item);
  const usersListButton = document.querySelector(button);

  let visibleUsers = [];
  let counter = 5;

  for (let i = 0; i < usersItems.length; i++) {
    visibleUsers.push(usersItems[i]);
  }

  usersItems.forEach((item, index) => {
    if (index >= counter) {
      item.classList.add('remove-elem');
    }
  });

  usersSelect.addEventListener('change', () => {
    usersListButton.classList.remove('remove-elem');
    visibleUsers = [];
    counter = 5;

    for (let i = 0; i < usersItems.length; i++) {
      if (usersSelect.value === '' || usersItems[i].dataset.post === usersSelect.value) {
        visibleUsers.push(usersItems[i]);

        if (visibleUsers.length <= counter) {
          usersItems[i].classList.remove('remove-elem');
        } else {
          usersItems[i].classList.add('remove-elem');
        }
      } else {
          usersItems[i].classList.add('remove-elem');
      }
    }

    if (visibleUsers.length < counter) {
      usersListButton.classList.add('remove-elem');
    } else {
      usersListButton.classList.remove('remove-elem');
    }
  });

  usersListButton.addEventListener('click', () => {
    counter += 5;

    visibleUsers.forEach((item, index) => {
      if (index < counter) {
        item.classList.remove('remove-elem');
      }

      if (counter >= visibleUsers.length) {
        usersListButton.classList.add('remove-elem');
      }
    });
  });
}

export {dateFilter}
