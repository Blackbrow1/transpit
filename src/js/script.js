import { addClassItemActive } from './modules/add-class-item-active.js';
import { trainingPage } from './modules/training-page.js';
import { securityTrainingData, humanFactorTrainingData } from './modules/trainings-data.js';
import { getTrainingCounts } from './modules/get-training-counts.js';
import { showMoreUsers, showMoreUsersAndYears } from './modules/show-more-users.js';
import { showMoreProgressCards } from './modules/show-more-progress-cards.js';
import { setCursorInInput } from './modules/set-cursor-in-input.js';
import { removeSuccessMessage } from './modules/remove-success-message.js';
import { deleteUser } from './modules/delete-user.js';
import { addFileMessage } from './modules/add-file-message.js';

import {airsideSafetyRadioData, airsideSafetyCheckboxData, supervisorsRadioData, supervisorsCheckboxData, humanFactorRadioData, humanFactorCheckboxData} from './modules/testes-data.js';
import { showTestTime } from './modules/show-test-time.js';
import { getTestResult } from './modules/test-result.js';
import { getRandomAnswers } from './modules/get-random-answers.js';

window.addEventListener('DOMContentLoaded', () => {
  // Добавляю класс активному пункту меню
  addClassItemActive();

  // Результаты тестирования
  try {
    // Вывести рандомно 18 вопросов
    getRandomAnswers('#airside-safety', '.test__list', '.test__item', 18);

    const resultsTestSafetyAssess = getTestResult('#airside-safety', airsideSafetyRadioData, airsideSafetyCheckboxData, 18, 14);

    showTestTime('#airside-safety', resultsTestSafetyAssess, 1000 * 60 * 12);
  } catch {}

  try {
    // Вывести рандомно 20 вопросов
    getRandomAnswers('#basics-supervisor-job', '.test__list', '.test__item', 20);

    // Получить результаты теста
    const resultsTestSupervisors = getTestResult('#basics-supervisor-job', supervisorsRadioData, supervisorsCheckboxData, 20, 16);

    showTestTime('#basics-supervisor-job', resultsTestSupervisors, 1000 * 60 * 13); // 11
  } catch {}

  try {
    // Вывести рандомно 10 вопросов
    getRandomAnswers('#human-factor', '.test__list', '.test__item', 10);

    // Получить результаты теста
    const resultsTestHumanFactor = getTestResult('#human-factor', humanFactorRadioData, humanFactorCheckboxData, 10, 8);

    showTestTime('#human-factor', resultsTestHumanFactor, 1000 * 60 * 7); // 7
  } catch {}

  // Обучающая страница Безопасность на перроне
  try {
    trainingPage(securityTrainingData, '#training-security-safety');
  } catch {console.log('Ошибка Обучающая страница');}

  try {
    trainingPage(humanFactorTrainingData, '#training-human-factor');
  } catch {console.log('Ошибка Обучающая страница');}

  try {
    trainingPage(securityTrainingData, '#training-for-supervisors');
  } catch {console.log('Ошибка Обучающая страница');}

  // Кнопочка с количеством тренингов к прохождению
  try {
    getTrainingCounts('.header__training-list', '.header__training-item', '.header__menu-item--all-trainings', 'header__training-delete');
  } catch {}

  try {
    getTrainingCounts('.footer__training-list', '.footer__training-item', '.footer__menu-item--all-trainings', 'footer__training-delete');
  } catch {}

  // Фильтрация всех сотрудников
  try {
    showMoreUsers('.users-list__select', '.users-list__city-select', '.users-list__item', '.users-list__button');
  } catch {}

  try {
    showMoreUsersAndYears('.users-finished-test__select', '.users-finished-test__city-select', '.users-finished-test__year', '.users-finished-test__result', '.users-finished-test__item', '.users-finished-test__button');
  } catch {}

  // Показать следующие 3 результата теста в личном кабинете
  try {
    showMoreProgressCards('.user-progress__item', '.user-progress__button')
  } catch {}

  // Установить курсор по клику в поле
  try {
    setCursorInInput();
  } catch {console.log('Ошибка Установить курсор по клику в поле');}

  // Убрать сообщение об успехе
  try {
    removeSuccessMessage();
  } catch {console.log('Ошибка Убрать сообщение об успехе');}

  // Попап удаления записи о сотруднике
  try {
    deleteUser();
  } catch {
    console.log('Ошибка Попап удаления записи о сотруднике');
  }

  // Добавить надпись о том, что файл выбран
  try {
    addFileMessage();
  } catch {}


  //////////////////////////////////////

  document.getElementById('download-pdf').addEventListener('click', () => {
    const items = document.querySelectorAll('.users-finished-test__item');
    let results = [];

    items.forEach(item => {
        const post = item.dataset.post;
        const city = item.dataset.city;
        const year = item.dataset.year;
        const result = item.dataset.result;
        const userName = item.querySelector('.users-finished-test__user-name').textContent.trim();
        const tabNumber = item.querySelector('.users-finished-test__user-number span').textContent.trim();
        const testName = item.querySelector('.users-finished-test__program').textContent.trim();
        const date = item.querySelector('.users-finished-test__date').textContent.trim();

        results.push({
            userName,
            post,
            tabNumber,
            city,
            testName,
            date,
            result
        });
    });

    // Отправляем данные на сервер для генерации PDF
    sendDataToServer(results);
});

function sendDataToServer(data) {
    fetch('generate-pdf.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ results: data })
    }).then(response => response.blob())
      .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = 'results.pdf'; // Имя файла для скачивания
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
      });
}

});





//////////////////////////////////////
// Фильтрация по году
// function showMoreDate(select, item, button) {
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
//       const [, , year] = usersItems[i].querySelector('.users-finished-test__date').textContent.split('.')
//       console.log(year);
//       if (usersSelect.value === '' || usersSelect.value === year) {
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

// try {
//   showMoreDate('.users-finished-test__year', '.users-finished-test__item', '.users-finished-test__button')
// } catch {}
