'use strict';

const answerCheckboxBlock = document.querySelectorAll('.test__answer-checkbox-block');
const buttonStop = document.querySelector('.test__button-stop');
const testForm = document.querySelector('.test__form');
const buttonCabinet = document.querySelector('.test__button-cabinet');
const testResult = document.querySelector('.test__result');
const testResultText = document.querySelector('.test__result-text');
const timeBlock = document.querySelector('.test__time-block');
const answerRadioBlock = document.querySelectorAll('.test__answer-radio-block');
const buttonClose = document.querySelector('.test__result-close');
const navItems = document.querySelectorAll('.header__menu-item');
const navItemsTraining = document.querySelectorAll('.header__training-item');

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
];

const answersData = [
  'answer-1-1',
  'answer-1-3',
  'answer-3-2',
  'answer-3-4',
  'answer-3-5',
  'answer-8-2',
  'answer-8-4',
  'answer-18-3',
  'answer-22-4',
  'answer-25-2',
  'answer-25-4',
  'answer-29-3',
  'answer-30-4',
  'answer-30-4'
];

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

// buttonBegin.addEventListener('click', function() {
//   getTime(1000 * 60 * 18);
// });

let sum = 0;

function getResult(evt) {
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
  }

  buttonStop.remove();
  buttonCabinet.classList.remove('test__button-cabinet--none');

  buttonClose.addEventListener('click', () => {
    testResult.classList.add('test__result--hidden');
  });
}

try {
  testForm.addEventListener('submit', getResult);
} catch {
  console.log('На этой странице нет обработчика теста');
}

const trainList = [
  {
    theme: 'Тема урока 1',
    imgJpg1: 'img/user-img-desktop@1x.jpg',
    imgJpg2: 'img/user-img-desktop@2x.jpg',
    imgWebp1: 'img/user-img-desktop@1x.webp',
    imgWebp2: 'img/user-img-desktop@2x.webp',
    paragraph: [
      'Lorem ipsum dolor sit amet consectetur. Eu donec sit lobortis metus odio nulla dui. Aenean mauris egestas posuere porttitor id enim. Libero volutpat ultricies quis commodo ut interdum. At facilisis in tortor massa est.',
      'Dolor augue leo eget pretium adipiscing convallis odio. Ultrices non mattis viverra eu. Consequat aliquam urna ut pellentesque lorem. Tortor elit volutpat penatibus et facilisis volutpat orci massa.',
      'Dolor augue leo eget pretium adipiscing convallis odio. Ultrices non mattis viverra eu. Consequat aliquam urna ut pellentesque lorem. Tortor elit volutpat penatibus et facilisis volutpat orci massa.',
      'Dolor augue leo eget pretium adipiscing convallis odio. Ultrices non mattis viverra eu.'
    ]
  },
  {
    theme: 'Тема урока 2',
    imgJpg1: 'img/training/training-img-1-desktop@1x.jpg',
    imgJpg2: 'img/training/training-img-1-desktop@2x.jpg',
    imgWebp1: 'img/training/training-img-1-desktop@1x.webp',
    imgWebp2: 'img/training/training-img-1-desktop@2x.webp',
    paragraph: [
      'Сверстаем первый экран сайта с учетом всех тонкостей дизайна Figma. Освоим основные инструменты верстки: тексты, изображения, векторные объекты, кнопки. Сделаем наш дизайн отзывчивым с помощью Grid и Window Container',
      'Подготовим Tilda к работе: подключим шрифты с библиотеки шрифтов Google Fonts, оглядимся в стандартных блоках, сделаем первые шаги в Zero block',
      'Dolor augue leo eget pretium adipiscing convallis odio. Ultrices non mattis viverra eu. Consequat aliquam urna ut pellentesque lorem. Tortor elit volutpat penatibus et facilisis volutpat orci massa.',
      'Dolor augue leo eget pretium adipiscing convallis odio. Ultrices non mattis viverra eu.'
    ]
  },
  {
    theme: 'Тема урока 3',
    imgJpg1: 'img/user-img-desktop@1x.jpg',
    imgJpg2: 'img/user-img-desktop@2x.jpg',
    imgWebp1: 'img/user-img-desktop@1x.webp',
    imgWebp2: 'img/user-img-desktop@2x.webp',
    paragraph: [
      'Тильда, он помогает реализовать любую творческую идею во всех деталях и с анимацией. Осваиваем Zero Block на полную: верстаем, анимируем и адаптируем под мобильные. От запуска до сбора заявок!',
      'Подготовим Tilda к работе: подключим шрифты с библиотеки шрифтов Google Fonts, оглядимся в стандартных блоках, сделаем первые шаги в Zero block',
      'Тильда, он помогает реализовать любую творческую идею во всех деталях и с анимацией. Осваиваем Zero Block на полную: верстаем, анимируем и адаптируем под мобильные. От запуска до сбора заявок!',
      'Dolor augue leo eget pretium adipiscing convallis odio. Ultrices non mattis viverra eu.'
    ]
  },
  {
    theme: 'Тема урока 4',
    imgJpg1: 'img/training/training-img-1-desktop@1x.jpg',
    imgJpg2: 'img/training/training-img-1-desktop@2x.jpg',
    imgWebp1: 'img/training/training-img-1-desktop@1x.webp',
    imgWebp2: 'img/training/training-img-1-desktop@2x.webp',
    paragraph: [
      'Сначала вы освоитесь в Tilda, а затем возьметесь превращать макеты из Figma в полноценные сайты и настраивать продвинутые анимации. Вас ждет практика по верстке нестандартных композиций, работа с пошаговой анимацией и адаптация дизайна под мобильные.',
      'Подготовим Tilda к работе: подключим шрифты с библиотеки шрифтов Google Fonts, оглядимся в стандартных блоках, сделаем первые шаги в Zero block',
    ]
  },
  {
    theme: 'Тема урока 5',
    imgJpg1: 'img/user-img-desktop@1x.jpg',
    imgJpg2: 'img/user-img-desktop@2x.jpg',
    imgWebp1: 'img/user-img-desktop@1x.webp',
    imgWebp2: 'img/user-img-desktop@2x.webp',
    paragraph: [
      'Тильда, он помогает реализовать любую творческую идею во всех деталях и с анимацией. Осваиваем Zero Block на полную: верстаем, анимируем и адаптируем под мобильные. От запуска до сбора заявок!',
      'Подготовим Tilda к работе: подключим шрифты с библиотеки шрифтов Google Fonts, оглядимся в стандартных блоках, сделаем первые шаги в Zero block',
      'Тильда, он помогает реализовать любую творческую идею во всех деталях и с анимацией. Осваиваем Zero Block на полную: верстаем, анимируем и адаптируем под мобильные. От запуска до сбора заявок!',
      'Dolor augue leo eget pretium adipiscing convallis odio. Ultrices non mattis viverra eu.'
    ]
  },
  {
    theme: 'Тема урока 6',
    imgJpg1: 'img/training/training-img-1-desktop@1x.jpg',
    imgJpg2: 'img/training/training-img-1-desktop@2x.jpg',
    imgWebp1: 'img/training/training-img-1-desktop@1x.webp',
    imgWebp2: 'img/training/training-img-1-desktop@2x.webp',
    paragraph: [
      'Сначала вы освоитесь в Tilda, а затем возьметесь превращать макеты из Figma в полноценные сайты и настраивать продвинутые анимации. Вас ждет практика по верстке нестандартных композиций, работа с пошаговой анимацией и адаптация дизайна под мобильные.',
      'Подготовим Tilda к работе: подключим шрифты с библиотеки шрифтов Google Fonts, оглядимся в стандартных блоках, сделаем первые шаги в Zero block',
    ]
  },
  {
    theme: 'Тема урока 7',
    imgJpg1: 'img/user-img-desktop@1x.jpg',
    imgJpg2: 'img/user-img-desktop@2x.jpg',
    imgWebp1: 'img/user-img-desktop@1x.webp',
    imgWebp2: 'img/user-img-desktop@2x.webp',
    paragraph: [
      'Тильда, он помогает реализовать любую творческую идею во всех деталях и с анимацией. Осваиваем Zero Block на полную: верстаем, анимируем и адаптируем под мобильные. От запуска до сбора заявок!',
      'Подготовим Tilda к работе: подключим шрифты с библиотеки шрифтов Google Fonts, оглядимся в стандартных блоках, сделаем первые шаги в Zero block',
      'Тильда, он помогает реализовать любую творческую идею во всех деталях и с анимацией. Осваиваем Zero Block на полную: верстаем, анимируем и адаптируем под мобильные. От запуска до сбора заявок!',
      'Dolor augue leo eget pretium adipiscing convallis odio. Ultrices non mattis viverra eu.'
    ]
  },
  {
    theme: 'Тема урока 8',
    imgJpg1: 'img/training/training-img-1-desktop@1x.jpg',
    imgJpg2: 'img/training/training-img-1-desktop@2x.jpg',
    imgWebp1: 'img/training/training-img-1-desktop@1x.webp',
    imgWebp2: 'img/training/training-img-1-desktop@2x.webp',
    paragraph: [
      'Сначала вы освоитесь в Tilda, а затем возьметесь превращать макеты из Figma в полноценные сайты и настраивать продвинутые анимации. Вас ждет практика по верстке нестандартных композиций, работа с пошаговой анимацией и адаптация дизайна под мобильные.',
      'Подготовим Tilda к работе: подключим шрифты с библиотеки шрифтов Google Fonts, оглядимся в стандартных блоках, сделаем первые шаги в Zero block',
      'Сначала вы освоитесь в Tilda, а затем возьметесь превращать макеты из Figma в полноценные сайты и настраивать продвинутые анимации. Вас ждет практика по верстке нестандартных композиций, работа с пошаговой анимацией и адаптация дизайна под мобильные.',
      'Подготовим Tilda к работе: подключим шрифты с библиотеки шрифтов Google Fonts, оглядимся в стандартных блоках, сделаем первые шаги в Zero block',
    ]
  },
];

// Обучающая страница

const trainingInfo = document.querySelector('.training__info');
const trainingImgBlock = document.querySelector('.training__img-block');
const btnNext = document.querySelector('.training__btn--next');
const btnPrev = document.querySelector('.training__btn--prev');
const visualCountLenght = document.querySelector('.training__visual-count-lenght');
const visualCountNum = document.querySelector('.training__visual-count-number');
const trainingButton = document.querySelector('.training__button');
const trainingBlockTitle = document.querySelector('.training__block-title');

let currentActiveIndex = 0;
let currentNum = 1;

try {
  visualCountLenght.textContent = trainList.length;

  if (currentActiveIndex === 0) {
    btnPrev.classList.add('training__button--disable');
    btnPrev.disabled = true;

    trainingBlockTitle.textContent = trainList[currentActiveIndex].theme;

    trainList[currentActiveIndex].paragraph.forEach(item => {
      let par = document.createElement('p');
      par.textContent = item;
      trainingInfo.append(par);
    });

    let container = `
      <picture>
        <source width="555" height="487" type="image/webp"
          srcset="${trainList[currentActiveIndex].imgWebp1} 1x, ${trainList[currentActiveIndex].imgWebp2} 2x">
        <img class="training__img" width="555" height="487" loading="lazy"
          src="${trainList[currentActiveIndex].imgJpg1}" srcset="${trainList[currentActiveIndex].imgJpg2} 2x"
          alt="Изображение к теме урока">
      </picture>
    `;

    trainingImgBlock.innerHTML = container;
    visualCountNum.textContent = currentNum;
  }
} catch {}

try {
  btnNext.addEventListener('click', () => {
    currentActiveIndex++;
    currentNum++;

    if (currentActiveIndex < trainList.length) {
      trainingInfo.innerHTML = '';
      trainingImgBlock.innerHTML = '';

      trainingBlockTitle.textContent = trainList[currentActiveIndex].theme;

      trainList[currentActiveIndex].paragraph.forEach(item => {
        let par = document.createElement('p');
        par.textContent = item;
        trainingInfo.append(par);
      });

      let container = `
        <picture>
          <source width="555" height="487" type="image/webp"
            srcset="${trainList[currentActiveIndex].imgWebp1} 1x, ${trainList[currentActiveIndex].imgWebp2} 2x">
          <img class="training__img" width="555" height="487" loading="lazy"
            src="${trainList[currentActiveIndex].imgJpg1}" srcset="${trainList[currentActiveIndex].imgJpg2} 2x"
            alt="Изображение к теме урока">
        </picture>
      `;

      trainingImgBlock.innerHTML = container;
    }

    if (currentActiveIndex === trainList.length - 1) {
      btnNext.classList.add('training__button--disable');
      btnNext.disabled = true;
    }

    if (currentActiveIndex > 0) {
      btnPrev.classList.remove('training__button--disable');
      btnPrev.disabled = false;
    }

    visualCountNum.textContent = currentNum;

    if (currentActiveIndex === trainList.length - 1) {
      trainingButton.classList.remove('training__button--disable');
      trainingButton.setAttribute('href', 'test-hero.php');
    }
  });
} catch {}

try {
  btnPrev.addEventListener('click', () => {
    currentActiveIndex--;
    currentNum--;

    if (currentActiveIndex >= 0) {
      trainingInfo.innerHTML = '';
      trainingImgBlock.innerHTML = '';

      trainingBlockTitle.textContent = trainList[currentActiveIndex].theme;

      trainList[currentActiveIndex].paragraph.forEach(item => {
        let par = document.createElement('p');
        par.textContent = item;
        trainingInfo.append(par);
      });

      let container = `
        <picture>
          <source width="555" height="487" type="image/webp"
            srcset="${trainList[currentActiveIndex].imgWebp1} 1x, ${trainList[currentActiveIndex].imgWebp2} 2x">
          <img class="training__img" width="555" height="487" loading="lazy"
            src="${trainList[currentActiveIndex].imgJpg1}" srcset="${trainList[currentActiveIndex].imgJpg2} 2x"
            alt="Изображение к теме урока">
        </picture>
      `;

      trainingImgBlock.innerHTML = container;
    }

    if (currentActiveIndex === 0) {
      btnPrev.classList.add('training__button--disable');
      btnPrev.disabled = true;
    }

    if (currentActiveIndex >= 0) {
      btnNext.classList.remove('training__button--disable');
      btnNext.disabled = false;
    }

    visualCountNum.textContent = currentNum;

    if (currentActiveIndex < answersData.length) {
      trainingButton.classList.add('training__button--disable');
      trainingButton.removeAttribute('href');
    }
  });
} catch {}

// Кнопочка с количеством тренингов к прохождению

const headerTrainingList = document.querySelector('.header__training-list');
const headerTrainingItem = document.querySelectorAll('.header__training-item');
const headerTrainingSticker = document.querySelector('.header__menu-item--all-trainings');

let trainingsCount = 0;

headerTrainingItem.forEach(item => {
  if (item) {
    trainingsCount++;
  }
});

if (trainingsCount === 0) {
  headerTrainingSticker.classList.add('header__training-delete');
  headerTrainingList.remove();
}

headerTrainingSticker.textContent = trainingsCount;

// Показать следующие 3 элемента при клике

const usersListButton = document.querySelector('.users-list__button');
const usersListItems = document.querySelectorAll('.users-list__item');

let visibleItemCount = 5;
let hiddenItemCount = usersListItems.length - visibleItemCount;

for (let i = visibleItemCount; i < usersListItems.length; i++) {
  usersListItems[i].style.display = 'none';
}

usersListButton.addEventListener('click', () => {
  for (let i = visibleItemCount; i < visibleItemCount + hiddenItemCount; i++) {
    if (usersListItems[i]) {
      usersListItems[i].style.display = '';
    }
  }

  if (visibleItemCount + hiddenItemCount >= usersListItems.length) {
    usersListButton.style.display = 'none';
  }

  visibleItemCount += hiddenItemCount;
});
