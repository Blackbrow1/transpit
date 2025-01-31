// function showMoreUsers(select, item, button) {
//   const usersSelect = document.querySelector(select);
//   const usersItems = document.querySelectorAll(item);
//   const usersListButton = document.querySelector(button);

//   let visibleUsers = [];
//   let counter = 5;

//   for (let i = 0; i < usersItems.length; i++) {
//     visibleUsers.push(usersItems[i]);
//   }

//   usersItems.forEach((item, index) => {
//     if (index >= counter) {
//       item.classList.add('remove-elem');
//     }
//   });

//   usersSelect.addEventListener('change', () => {
//     usersListButton.classList.remove('remove-elem');
//     visibleUsers = [];
//     counter = 5;

//     for (let i = 0; i < usersItems.length; i++) {
//       if (usersSelect.value === '' || usersItems[i].dataset.post === usersSelect.value) {
//         visibleUsers.push(usersItems[i]);

//         if (visibleUsers.length <= counter) {
//           usersItems[i].classList.remove('remove-elem');
//         } else {
//           usersItems[i].classList.add('remove-elem');
//         }
//       } else {
//           usersItems[i].classList.add('remove-elem');
//       }
//     }

//     if (visibleUsers.length < counter) {
//       usersListButton.classList.add('remove-elem');
//     } else {
//       usersListButton.classList.remove('remove-elem');
//     }
//   });

//   usersListButton.addEventListener('click', () => {
//     counter += 5;

//     visibleUsers.forEach((item, index) => {
//       if (index < counter) {
//         item.classList.remove('remove-elem');
//       }

//       if (counter >= visibleUsers.length) {
//         usersListButton.classList.add('remove-elem');
//       }
//     });
//   });
// }

// function showMoreUsers(selectUsers, selectCities, item, button) {
//   const usersSelect = document.querySelector(selectUsers);
//   const citiesSelect = document.querySelector(selectCities);
//   const usersItems = document.querySelectorAll(item);
//   const usersListButton = document.querySelector(button);

//   let visibleUsers = [];
//   let counter = 5;

//   for (let i = 0; i < usersItems.length; i++) {
//     visibleUsers.push(usersItems[i]);
//   }

//   usersItems.forEach((item, index) => {
//     if (index >= counter) {
//       item.classList.add('remove-elem');
//     }
//   });

//   usersSelect.addEventListener('change', () => {
//     usersListButton.classList.remove('remove-elem');
//     visibleUsers = [];
//     counter = 5;

//     for (let i = 0; i < usersItems.length; i++) {
//       if (usersSelect.value === '' || usersItems[i].dataset.post === usersSelect.value) {
//         visibleUsers.push(usersItems[i]);

//         if (visibleUsers.length <= counter) {
//           usersItems[i].classList.remove('remove-elem');
//         } else {
//           usersItems[i].classList.add('remove-elem');
//         }
//       } else {
//           usersItems[i].classList.add('remove-elem');
//       }
//     }

//     if (visibleUsers.length < counter) {
//       usersListButton.classList.add('remove-elem');
//     } else {
//       usersListButton.classList.remove('remove-elem');
//     }
//   });

//   citiesSelect.addEventListener('change', () => {
//     usersListButton.classList.remove('remove-elem');
//     visibleUsers = [];
//     counter = 5;

//     for (let i = 0; i < usersItems.length; i++) {
//       if (citiesSelect.value === '' || usersItems[i].dataset.city === citiesSelect.value) {
//         visibleUsers.push(usersItems[i]);

//         if (visibleUsers.length <= counter) {
//           usersItems[i].classList.remove('remove-elem');
//         } else {
//           usersItems[i].classList.add('remove-elem');
//         }
//       } else {
//           usersItems[i].classList.add('remove-elem');
//       }
//     }

//     if (visibleUsers.length < counter) {
//       usersListButton.classList.add('remove-elem');
//     } else {
//       usersListButton.classList.remove('remove-elem');
//     }
//   });

//   usersListButton.addEventListener('click', () => {
//     counter += 5;

//     visibleUsers.forEach((item, index) => {
//       if (index < counter) {
//         item.classList.remove('remove-elem');
//       }

//       if (counter >= visibleUsers.length) {
//         usersListButton.classList.add('remove-elem');
//       }
//     });
//   });
// }

function showMoreUsers(selectUsers, selectCities, item, button) {
  const usersSelect = document.querySelector(selectUsers);
  const citiesSelect = document.querySelector(selectCities);
  const usersItems = document.querySelectorAll(item);
  const usersListButton = document.querySelector(button);

  let visibleUsers = [];
  let counter = 5;

  function applyFilters() {
    visibleUsers = Array.from(usersItems).filter(userItem => {
      const postMatches = usersSelect.value === '' || userItem.dataset.post === usersSelect.value;
      const cityMatches = citiesSelect.value === '' || userItem.dataset.city === citiesSelect.value;
      return postMatches && cityMatches;
    });

    renderVisibleUsers(visibleUsers.slice(0, counter));
    toggleShowMoreButton(visibleUsers.length > counter);

    // if (visibleUsers.length === 0) {
    //   const usersList = document.querySelector('.users-list__list');
    //   const emptyLi = document.createElement('li');
    //   emptyLi.classList.add('users-list__item', 'users-list__item-empty');
    //   emptyLi.textContent = 'Таких сотрудников нет';
    //   usersList.append(emptyLi);

    //   console.log('Таких сотрудников нет');
    // }
  }

  function renderVisibleUsers(usersToDisplay) {
    usersItems.forEach(userItem => {
      userItem.classList.toggle('remove-elem', !usersToDisplay.includes(userItem));
    });
  }

  function toggleShowMoreButton(showButton) {
    usersListButton.classList.toggle('remove-elem', !showButton);
  }

  function showMore() {
    counter += 5;
    renderVisibleUsers(visibleUsers.slice(0, counter));
    toggleShowMoreButton(counter < visibleUsers.length);
  }

  usersSelect.addEventListener('change', applyFilters);
  citiesSelect.addEventListener('change', applyFilters);
  usersListButton.addEventListener('click', showMore);

  // Начальная инициализация
  applyFilters();
}

function showMoreUsersAndYears(selectUsers, selectCities, selectYears, selectResult, item, button) {
  const usersSelect = document.querySelector(selectUsers);
  const citiesSelect = document.querySelector(selectCities);
  const yearsSelect = document.querySelector(selectYears);
  const resultSelect = document.querySelector(selectResult);
  const usersItems = document.querySelectorAll(item);
  const usersListButton = document.querySelector(button);

  let visibleUsers = [];
  let counter = 5;

  function applyFilters() {
    visibleUsers = Array.from(usersItems).filter(userItem => {
      const postMatches = usersSelect.value === '' || userItem.dataset.post === usersSelect.value;
      const cityMatches = citiesSelect.value === '' || userItem.dataset.city === citiesSelect.value;
      const yearMatches = yearsSelect.value === '' || userItem.dataset.year === yearsSelect.value;
      const resultMatches = resultSelect.value === '' || userItem.dataset.result === resultSelect.value;
      return postMatches && cityMatches && yearMatches && resultMatches;
    });

    renderVisibleUsers(visibleUsers.slice(0, counter));
    toggleShowMoreButton(visibleUsers.length > counter);
  }

  function renderVisibleUsers(usersToDisplay) {
    usersItems.forEach(userItem => {
      userItem.classList.toggle('remove-elem', !usersToDisplay.includes(userItem));
    });
  }

  function toggleShowMoreButton(showButton) {
    usersListButton.classList.toggle('remove-elem', !showButton);
  }

  function showMore() {
    counter += 5;
    renderVisibleUsers(visibleUsers.slice(0, counter));
    toggleShowMoreButton(counter < visibleUsers.length);
  }

  usersSelect.addEventListener('change', applyFilters);
  citiesSelect.addEventListener('change', applyFilters);
  yearsSelect.addEventListener('change', applyFilters);
  resultSelect.addEventListener('change', applyFilters);
  usersListButton.addEventListener('click', showMore);

  // Начальная инициализация
  applyFilters();
}

export {showMoreUsers, showMoreUsersAndYears}
