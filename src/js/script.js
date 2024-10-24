'use strict';

// const answer = document.querySelectorAll('.answer');
const answerCheckboxBlock = document.querySelectorAll('.test__answer-checkbox-block');
// const answerLabel = document.querySelectorAll('label');
const buttonStop = document.querySelector('.test__button-stop');
// const buttonBegin = document.querySelector('.test-hero__button');
// const blockDescription = document.querySelector('.block-description');
// const pageForm = document.querySelector('.page-form');
const testResult = document.querySelector('.test__result');
const testResultText = document.querySelector('.test__result-text');
const timeBlock = document.querySelector('.test__time-block');
const answerRadioBlock = document.querySelectorAll('.test__answer-radio-block');
const buttonClose = document.querySelector('.test__result-close');

const MAX_QUESTIONS = 32;
const MIN_QUESTIONS_ACCESS = 26;

const answersDataRadio = [
  'answer-2-2',
  'answer-4-2',
  'answer-5-2',
  'answer-6-3',
  'answer-7-2',
  'answer-9-2',
  'answer-10-1',
  'answer-11-3',
  'answer-12-1',
  'answer-13-3',
  'answer-14-1',
  'answer-15-3',
  'answer-16-1',
  'answer-17-1',
  'answer-19-1',
  'answer-20-1',
  'answer-21-1',
  'answer-23-3',
  'answer-24-1',
  'answer-26-1',
  'answer-27-2',
  'answer-28-1',
  'answer-31-2',
  'answer-32-3'
]

const answersData = [
  'Прочитать передачу по смене в папке ЕК',
  'Просмотреть почту за предыдущие 3 дня на наличие пропущенной важной информации',
  'Onboard item inventory',
  'Узнать время подъезда к ВС у начальника смены/диспетчера или посмотреть информацию о рейсе в "сетке"',
  'Написать в общий чат',
  'Написать в "передачу по смене"',
  'Подготовить рейс для следующей смены: проверить питание и оборудование, запломбировать телеги',
  'Накладная на питание, накладные для таможни, чек-лист для питания, чек-лист обмена БКО, перечень оборудования для обмена БКО, 2 экземпляра перечня оборудования для таможни, меню для первого и бизнес класса, распечатанное письмо по SPML, диаграмма загрузки',
  'Не более 32 минут',
  'Сдавать пропуск нужно на всех зарубежных рейсах',
  'Инженера',
  'Бортпроводников',
  '27 - 12 SPML = 15. Смотрим количество посуды на 15 человек и вычитаем из тотал на 42 человека. Из полученной суммы вычитаем 12 SPML',
  'Нужно. В момент, когда ВС встанет на стоянку',
  'Посмотреть количество питания на портале. Если по каким-то причинам этого сделать нельзя, то звонить представителям ЕК',
  'Лейблом вниз',
  'Узнать количество горячего можно на портале CAT360',
  'Нет, т.к. это еще не финальная корректировка, и питание может убавиться',
  'Манго - 2, Яблоко - 4, Томат - 1, Клюква - 1, Ананас - 1',
  'В чат нужно писать обо всем, что мешает загрузке и сдаче питания со стороны экипажа – начало загрузки, о готовности сдавать питание, о прекращении приёма питания экипажем в связи с началом секьюрити чека и другие важные таймпоинты',
  'Да, нужно забирать накладные из таможни и отдавать на борт',
  'И то, и другое',
  'Когда мы просим каждого отвечающего за определенную кухню бортпроводника начать принимать питание без нас, по подготовленному заранее меню',
  'При последовательной сдаче питания один супервайзер сдает все кухни по очереди',
  'Нельзя присутствовать во время секьюрити чека',
  'Нельзя ни в каких случаях',
  'Снять пополнение с борта, на базе передать кладовщику или оставить под пломбами в телеге на складе, отправить скан подписанного письма по соответствующим адресам',
  'Ни в каких. Нужно собрать корзинки по количеству пассажиров в первом классе',
  'Проверить перечень на корректность заполнения на базе',
  'Проверить перечень на корректность заполнения на борту',
  'Отметить недостачу в акте, который находится внизу перечня и подписать у экипажа',
  'Трапезничать на территории производства и цехов запрещено',
  'Трапезничать на борту воздушного судна во время загрузки или в автолифте запрещено',
  'Нахождение без светоотражающей жилетки на перроне строго запрещено',
  'Ставить контейнеры на телеги во время погрузки и разгрузки рейса нельзя',
  'Прикасаться выдвижной платформой к ВС запрещено',
  'Автолифт останавливается у красного восьмиугольника. Затем совершается торможение на полпути от восьмиугольника до ВС. Далее, автолифт подгоняется к дверям ВС. Устанавливаются противооткатные колодки под правое колесо. Совершается обход вокруг автолифта и осмотр на наличие протекания жидкости',
  'answer-1-1',
  'answer-1-3',
  'answer-30-4'

];

// buttonBegin.addEventListener('click', function() {
//   getTime(1000 * 60 * 18);
// });


getTime(1000 * 60 * 18);

let sum = 0;

function getResult() {
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
      } else if (answerInput.checked && answerInput.value !== answersData) {
        answerAccData.push(false);
      }

      if (answersData.includes(answerInput.value) && answerInput.checked === false) {
        answerAccData.push(false);
      }
    });

    // const answerTrueSet = new Set(answerAccData);
    // const answerTrueSetToArr = [...answerTrueSet];

    // if (answerTrueSetToArr.some(item => item === false)) {
    //   sum += 0;
    // } else {
    //   sum += 1;
    // }

    console.log(answerAccData);
  });

  // answerCheckboxBlock.forEach(item => {
  //   const answerCheckbox = item.querySelectorAll('.test__answer-checkbox');
  //   const answerTrueArr = [];

  //   answerCheckbox.forEach(j => {
  //     const answerInput = j.querySelector('input');
  //     let label = j.querySelector('label');

  //     if (answersData.includes(answerInput.checked && label.textContent)) {
  //       answerTrueArr.push(true);
  //       // label.style.color = '#477346';
  //       // label.style.fontWeight = '700';
  //     } else if (answerInput.checked && label.textContent !== answersData) {
  //       answerTrueArr.push(false);
  //       // label.style.color = '#D91C0B';
  //       // label.style.fontWeight = '700';
  //     }

  //     if (answersData.includes(answerInput.checked === false && label.textContent)) {
  //       answerTrueArr.push(false);
  //       // label.style.color = '#477346';
  //       // label.style.fontWeight = '700';
  //     }
  //   });

  //   const answerTrueSet = new Set(answerTrueArr);
  //   const answerTrueSetToArr = [...answerTrueSet];

  //   if (answerTrueSetToArr.some(item => item === false)) {
  //     sum += 0;
  //   } else {
  //     sum += 1;
  //   }
  // });

  const progress = Math.round((sum / MAX_QUESTIONS) * 100);

  // if (sum >= MIN_QUESTIONS_ACCESS) {
  //   testResultText.textContent = 'Поздравляем! Тест успешно пройден. ' + sum + ' верных ответа. ' + 'Прогресс ' + progress + '%';
  //   testResult.classList.add('test__result--access');
  //   testResult.classList.remove('test__result--hidden');
  //   timeBlock.classList.add('test__result--hidden');

  //   answerRadioBlock.forEach(item => {
  //     const answerRadio = item.querySelectorAll('.test__answer-radio');

  //     answerRadio.forEach(j => {
  //       const answerInput = j.querySelector('input');
  //       let label = j.querySelector('label');

  //       if (answersData.includes(answerInput.checked && label.textContent)) {
  //         label.style.color = '#477346';
  //         label.style.fontWeight = '700';
  //       } else if (answerInput.checked && label.textContent !== answersData) {
  //         label.style.color = '#D91C0B';
  //         label.style.fontWeight = '700';
  //       }

  //       if (answersData.includes(answerInput.checked === false && label.textContent)) {
  //         label.style.color = '#477346';
  //         label.style.fontWeight = '700';
  //       }
  //     });
  //   });

  //   answerCheckboxBlock.forEach(item => {
  //     const answerCheckbox = item.querySelectorAll('.test__answer-checkbox');

  //     answerCheckbox.forEach(j => {
  //       const answerInput = j.querySelector('input');
  //       let label = j.querySelector('label');

  //       if (answersData.includes(answerInput.checked && label.textContent)) {
  //         label.style.color = '#477346';
  //         label.style.fontWeight = '700';
  //       } else if (answerInput.checked && label.textContent !== answersData) {
  //         label.style.color = '#D91C0B';
  //         label.style.fontWeight = '700';
  //       }

  //       if (answersData.includes(answerInput.checked === false && label.textContent)) {
  //         label.style.color = '#477346';
  //         label.style.fontWeight = '700';
  //       }
  //     });
  //   });
  // }

  if (sum < MIN_QUESTIONS_ACCESS) {
    testResultText.textContent = 'Тест не пройден. ' + sum + ' верных ответа.' + ' Прогресс ' + progress + '%';
    testResult.classList.add('test__result--fail');
    testResult.classList.remove('test__result--hidden');
    timeBlock.classList.add('test__result--hidden');
  }

  buttonStop.classList.add('test__result--hidden');

  buttonClose.addEventListener('click', () => {
    testResult.classList.add('test__result--hidden');
  });

  console.log(sum);
}

buttonStop.addEventListener('click', getResult);

// time block
function getTime(time) {
  const end = new Date().getTime() + time;
  const interval = setInterval(() => {
    timeBlock.textContent = new Intl.DateTimeFormat('ru-RU', {
      minute: 'numeric',
      second: 'numeric'
    }).format(end + 100 - new Date())
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    getResult();
  }, time);
}
