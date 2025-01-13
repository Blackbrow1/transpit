import { addClassItemActive } from './modules/add-class-item-active.js';
import { trainingPage } from './modules/training-page.js';
import { securityTrainingData } from './modules/trainings-data.js';
import { getTrainingCounts } from './modules/get-training-counts.js';
import { showMoreUsers } from './modules/show-more-users.js';
import { showMoreProgressCards } from './modules/show-more-progress-cards.js';
import { setCursorInInput } from './modules/set-cursor-in-input.js';
import { removeSuccessMessage } from './modules/remove-success-message.js';
import { deleteUser } from './modules/delete-user.js';
import { addFileMessage } from './modules/add-file-message.js';

// const answerCheckboxBlock = document.querySelectorAll('.test__answer-checkbox-block');
// const buttonStop = document.querySelector('.test__button-stop');
// const testForm = document.querySelector('.test__form');
// const buttonCabinet = document.querySelector('.test__button-cabinet');
// const testResult = document.querySelector('.test__result');
// const testResultText = document.querySelector('.test__result-text');
//const timeBlock = document.querySelector('.test__time-block');
// const answerRadioBlock = document.querySelectorAll('.test__answer-radio-block');
// const buttonClose = document.querySelector('.test__result-close');

import {airsideSafetyRadioData, airsideSafetyCheckboxData, supervisorsRadioData, supervisorsCheckboxData} from './modules/testes-data.js';
import { showTestTime } from './modules/show-test-time.js';
import { getTestResult } from './modules/test-result.js';

// const MAX_QUESTIONS = 32;
// const MIN_QUESTIONS_ACCESS = 26;

// const answersDataRadio = [
//   'answer-2-2',
//   'answer-4-2',
//   'answer-5-2',
//   'answer-6-3',
//   'answer-7-2',
//   'answer-9-2',
//   'answer-10-1',
//   'answer-11-3',
//   'answer-12-1',
//   'answer-13-3',
//   'answer-14-1',
//   'answer-15-3',
//   'answer-16-1',
//   'answer-17-1',
//   'answer-19-1',
//   'answer-20-1',
//   'answer-21-1',
//   'answer-23-3',
//   'answer-24-1',
//   'answer-26-1',
//   'answer-27-2',
//   'answer-28-1',
//   'answer-31-2',
//   'answer-32-3'
// ];

// const answersData = [
//   'answer-1-1',
//   'answer-1-3',
//   'answer-3-2',
//   'answer-3-4',
//   'answer-3-5',
//   'answer-8-2',
//   'answer-8-4',
//   'answer-18-3',
//   'answer-22-4',
//   'answer-25-2',
//   'answer-25-4',
//   'answer-29-3',
//   'answer-30-4',
//   'answer-30-4'
// ];

window.addEventListener('DOMContentLoaded', () => {
  // Добавляю класс активному пункту меню
  addClassItemActive();

  // Результаты тестирования
  try {
    const resultsTestSafetyAssess = getTestResult('#airside-safety', airsideSafetyRadioData, airsideSafetyCheckboxData, 18, 14);
    showTestTime('#airside-safety', resultsTestSafetyAssess, 1000 * 60 * 10);
  } catch {}

  try {
    const resultsTestSupervisors = getTestResult('#basics-supervisor-job', supervisorsRadioData, supervisorsCheckboxData, 32, 26);
    showTestTime('#basics-supervisor-job', resultsTestSupervisors, 1000 * 60 * 18);
  } catch {}

  //try {
    // function getTime(time) {
    //   const end = new Date().getTime() + time;
    //   if (timeBlock) {
    //     const interval = setInterval(() => {
    //       timeBlock.textContent = new Intl.DateTimeFormat('ru-RU', {
    //         minute: 'numeric',
    //         second: 'numeric'
    //       }).format(end + 100 - new Date())
    //     }, 1000);

    //     setTimeout(() => {
    //       clearInterval(interval);
    //       resultsTest
    //     }, time);
    //   }
    // }

    // getTime(1000 * 60 * 18);
  //} catch {}

  // Таймер работы кнопки Далее
  // try {
  //   function getTime(time) {
  //     const end = new Date().getTime() + time;
  //     if (timeBlock) {
  //       const interval = setInterval(() => {
  //         timeBlock.textContent = new Intl.DateTimeFormat('ru-RU', {
  //           minute: 'numeric',
  //           second: 'numeric'
  //         }).format(end + 100 - new Date())
  //       }, 1000);

  //       setTimeout(() => {
  //         clearInterval(interval);
  //         getResult();
  //       }, time);
  //     }
  //   }

  //   getTime(1000 * 60 * 18);
  // } catch {}

  // // Получение результатов теста
  // let sum = 0;

  // function getResult() {
  //   answerRadioBlock.forEach(item => {
  //     const answerRadio = item.querySelectorAll('.test__answer-radio');

  //     answerRadio.forEach(j => {
  //       const answerInput = j.querySelector('input');

  //       answersDataRadio.forEach(elem => {
  //         if (answerInput.checked && answerInput.value === elem) {
  //           sum += 1;
  //         }
  //       });
  //     });
  //   });

  //   answerCheckboxBlock.forEach(item => {
  //     const answerCheckbox = item.querySelectorAll('.test__answer-checkbox');
  //     const answerAccData = [];

  //     answerCheckbox.forEach(j => {
  //       const answerInput = j.querySelector('input');

  //       if (answersData.includes(answerInput.checked && answerInput.value)) {
  //         answerAccData.push(true);
  //       } else if (answerInput.checked && !answersData.includes(answerInput.value)) {
  //         answerAccData.push(false);
  //       }

  //       if (answersData.includes(answerInput.value) && !answerInput.checked) {
  //         answerAccData.push(false);
  //       }
  //     });

  //     const answerTrueSet = new Set(answerAccData);
  //     const answerTrueSetToArr = [...answerTrueSet];

  //     if (answerTrueSetToArr.some(item => item === false) || answerTrueSetToArr.length === 0) {
  //       sum += 0;
  //     } else {
  //       sum += 1;
  //     }
  //   });

  //   const progress = Math.round((sum / MAX_QUESTIONS) * 100);

  //   // answCount.value = sum;
  //   // percent.value = progress;

  //   if (sum >= MIN_QUESTIONS_ACCESS) {
  //     testResultText.textContent = 'Поздравляем! Тест успешно пройден. ' + sum + ' верных ответа. ' + 'Прогресс ' + progress + '%';
  //     testResult.classList.add('test__result--access');
  //     testResult.classList.remove('test__result--hidden');
  //     timeBlock.classList.add('test__result--hidden');

  //     // resultName.value = 'Зачет';

  //     answerRadioBlock.forEach(item => {
  //       const answerRadio = item.querySelectorAll('.test__answer-radio');

  //       answerRadio.forEach(j => {
  //         const answerInput = j.querySelector('input');
  //         let label = j.querySelector('label');

  //         if (answersDataRadio.includes(answerInput.value) && answerInput.checked) {
  //           label.style.color = '#477346';
  //           label.style.fontWeight = '500';
  //         } else if (answerInput.checked && !answersDataRadio.includes(answerInput.value)) {
  //           label.style.color = '#d91C0b';
  //           label.style.fontWeight = '500';
  //         }

  //         if (answersDataRadio.includes(answerInput.value) && !answerInput.checked) {
  //           label.style.color = '#477346';
  //           label.style.fontWeight = '500';
  //         }
  //       });
  //     });

  //     answerCheckboxBlock.forEach(item => {
  //       const answerCheckbox = item.querySelectorAll('.test__answer-checkbox');

  //       answerCheckbox.forEach(j => {
  //         const answerInput = j.querySelector('input');
  //         let label = j.querySelector('label');

  //         if (answersData.includes(answerInput.checked && answerInput.value)) {
  //           label.style.color = '#477346';
  //           label.style.fontWeight = '500';
  //         } else if (answerInput.checked && !answersData.includes(answerInput.value)) {
  //           label.style.color = '#d91C0b';
  //           label.style.fontWeight = '500';
  //         }

  //         if (answersData.includes(answerInput.value) && !answerInput.checked) {
  //           label.style.color = '#477346';
  //           label.style.fontWeight = '500';
  //         }
  //       });
  //     });
  //   }

  //   if (sum < MIN_QUESTIONS_ACCESS) {
  //     testResultText.textContent = 'Тест не пройден. ' + sum + ' верных ответа.' + ' Прогресс ' + progress + '%';
  //     testResult.classList.add('test__result--fail');
  //     testResult.classList.remove('test__result--hidden');
  //     timeBlock.classList.add('test__result--hidden');

  //     // resultName.value = 'Незачет';
  //   }

  //   buttonStop.remove();
  //   buttonCabinet.classList.remove('test__button-cabinet--none');

  //   buttonClose.addEventListener('click', () => {
  //     testResult.classList.add('test__result--hidden');
  //   });
  // }

  // Отправление результатов в БД без перезагрузки страницы
  // try {
  //   testForm.addEventListener('submit', function(evt) {
  //     evt.preventDefault();
  //     getResult();

  //     const formData = new FormData(); // собираем данные из формы

  //     formData.append('test_name', document.querySelector('.test__main-title').textContent);
  //     formData.append('answ_count', sum);
  //     formData.append('percent', Math.round((sum / MAX_QUESTIONS) * 100));
  //     formData.append('result_name', sum < MIN_QUESTIONS_ACCESS ? 'Незачет' : 'Зачет');

  //     // /modules/test/submit_results.php
  //     fetch('submit-results', {
  //       method: 'POST',
  //       body: formData
  //     })
  //     .then(response => response.text())
  //     .then(data => {
  //       console.log('Ответ с сервера получен'); // выводим ответ от сервера
  //     })
  //     .catch(error => {
  //       console.error('Ошибка:', error);
  //     });
  //   });
  // } catch {
  //   console.log('Произошла ошибка');
  // }

  // Обучающая страница
  try {
    trainingPage(securityTrainingData);
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
    showMoreUsers('.users-list__select', '.users-list__item', '.users-list__button');
  } catch {}

  try {
    showMoreUsers('.users-finished-test__select', '.users-finished-test__item', '.users-finished-test__button');
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
});





//////////////////////////////////////

function showMoreDate(select, item, button) {
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
      const [, , year] = usersItems[i].querySelector('.users-finished-test__date').textContent.split('.')
      console.log(year);
      if (usersSelect.value === '' || usersSelect.value === year) {
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

try {
  showMoreDate('.users-finished-test__year', '.users-finished-test__item', '.users-finished-test__button')
} catch {}
