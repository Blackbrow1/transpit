let sum = 0;

function getTestResult(testId, answersDataRadio, answersData, MAX_QUESTIONS, MIN_QUESTIONS_ACCESS) {
  // Получение результатов теста
  const testIdData = document.querySelector(testId);
  const answerCheckboxBlock = testIdData.querySelectorAll('.test__answer-checkbox-block');
  const buttonStop = testIdData.querySelector('.test__button-stop');
  const testForm = testIdData.querySelector('.test__form');
  const buttonCabinet = testIdData.querySelector('.test__button-cabinet');
  const timeBlock = testIdData.querySelector('.test__time-block');
  const answerRadioBlock = testIdData.querySelectorAll('.test__answer-radio-block');

  const testResult = document.querySelector('.test__result');
  const testResultText = document.querySelector('.test__result-text');
  const buttonClose = document.querySelector('.test__result-close');


  // Отправление результатов в БД без перезагрузки страницы
  testForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    answerRadioBlock.forEach(item => {
      const answerRadio = item.querySelectorAll('.test__answer-radio');

      answerRadio.forEach(j => {
        const answerInput = j.querySelector('input');

        answersDataRadio.forEach(elem => {
          if (answerInput.checked && answerInput.value === elem) {
            sum += 1;
          }
        });
      });
    });

    answerCheckboxBlock.forEach(item => {
      const answerCheckbox = item.querySelectorAll('.test__answer-checkbox');
      const answerAccData = [];

      answerCheckbox.forEach(j => {
        const answerInput = j.querySelector('input');

        if (answersData.includes(answerInput.checked && answerInput.value)) {
          answerAccData.push(true);
        } else if (answerInput.checked && !answersData.includes(answerInput.value)) {
          answerAccData.push(false);
        }

        if (answersData.includes(answerInput.value) && !answerInput.checked) {
          answerAccData.push(false);
        }
      });

      const answerTrueSet = new Set(answerAccData);
      const answerTrueSetToArr = [...answerTrueSet];

      if (answerTrueSetToArr.some(item => item === false) || answerTrueSetToArr.length === 0) {
        sum += 0;
      } else {
        sum += 1;
      }
    });

    const progress = Math.round((sum / MAX_QUESTIONS) * 100);

    if (sum >= MIN_QUESTIONS_ACCESS) {
      testResultText.textContent = 'Поздравляем! Тест успешно пройден. ' + sum + ' верных ответа. ' + 'Прогресс ' + progress + '%';
      testResult.classList.add('test__result--access');
      testResult.classList.remove('test__result--hidden');
      timeBlock.classList.add('test__result--hidden');

      // resultName.value = 'Зачет';

      answerRadioBlock.forEach(item => {
        const answerRadio = item.querySelectorAll('.test__answer-radio');

        answerRadio.forEach(j => {
          const answerInput = j.querySelector('input');
          let label = j.querySelector('label');

          if (answersDataRadio.includes(answerInput.value) && answerInput.checked) {
            label.style.color = '#477346';
            label.style.fontWeight = '500';
          } else if (answerInput.checked && !answersDataRadio.includes(answerInput.value)) {
            label.style.color = '#d91C0b';
            label.style.fontWeight = '500';
          }

          if (answersDataRadio.includes(answerInput.value) && !answerInput.checked) {
            label.style.color = '#477346';
            label.style.fontWeight = '500';
          }
        });
      });

      answerCheckboxBlock.forEach(item => {
        const answerCheckbox = item.querySelectorAll('.test__answer-checkbox');

        answerCheckbox.forEach(j => {
          const answerInput = j.querySelector('input');
          let label = j.querySelector('label');

          if (answersData.includes(answerInput.checked && answerInput.value)) {
            label.style.color = '#477346';
            label.style.fontWeight = '500';
          } else if (answerInput.checked && !answersData.includes(answerInput.value)) {
            label.style.color = '#d91C0b';
            label.style.fontWeight = '500';
          }

          if (answersData.includes(answerInput.value) && !answerInput.checked) {
            label.style.color = '#477346';
            label.style.fontWeight = '500';
          }
        });
      });
    }

    if (sum < MIN_QUESTIONS_ACCESS) {
      testResultText.textContent = 'Тест не пройден. ' + sum + ' верных ответа.' + ' Прогресс ' + progress + '%';
      testResult.classList.add('test__result--fail');
      testResult.classList.remove('test__result--hidden');
      timeBlock.classList.add('test__result--hidden');

      // resultName.value = 'Незачет';
    }

    buttonStop.remove();
    buttonCabinet.classList.remove('test__button-cabinet--none');

    buttonClose.addEventListener('click', () => {
      testResult.classList.add('test__result--hidden');
    });

    const formData = new FormData(); // собираем данные из формы

    formData.append('test_name', document.querySelector('.test__main-title').textContent);
    formData.append('answ_count', sum);
    formData.append('percent', Math.round((sum / MAX_QUESTIONS) * 100));
    formData.append('result_name', sum < MIN_QUESTIONS_ACCESS ? 'Незачет' : 'Зачет');

    // /modules/test/submit_results.php
    fetch('submit-results', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      console.log('Ответ с сервера получен'); // выводим ответ от сервера
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
  });
}

export {getTestResult}
