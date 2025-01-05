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


try {
  function getTime(time) {
    const end = new Date().getTime() + time;
    if (timeBlock) {
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
  }

  getTime(1000 * 60 * 18);
} catch {}



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

const answCount = document.querySelector('[name="answ_count"]');
const percent = document.querySelector('[name="percent"]');
const resultName = document.querySelector('[name="result_name"]');

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

  // answCount.value = sum;
  // percent.value = progress;

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
}

try {
  testForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    getResult();

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
} catch {
  console.log('Произошла ошибка');
}

// Страница обучения

const trainList = [
  {
    theme: 'Мусор на перроне',
    imgJpg1: 'img/trainings/sequrity/img-1-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-1-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-1-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-1-desktop@2x.webp',
    paragraph: [
      'Любые посторонние предметы, находящиеся вблизи перрона, могут привести к повреждению ВС или оборудования, или же к серьезным инцидентам.',
      'Всегда поднимайте и утилизируйте посторонние предметы на перроне. Для посторонних предметов на перроне определены специальные контейнеры с маркировкой FOD'
    ]
  },
  {
    theme: 'Области маневрирования',
    imgJpg1: 'img/trainings/sequrity/img-2-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-2-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-2-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-2-desktop@2x.webp',
    paragraph: [
      'Область маневрирования – исключительно для воздушных судов. ',
      'Транспортным средствам предоставлен ограниченный вход (въезд), в то время как пешеходам (наземным службам) проход строго воспрещен.'
    ]
  },
  {
    theme: 'Когда подходить к ВС',
    imgJpg1: 'img/trainings/sequrity/img-3-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-3-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-3-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-3-desktop@2x.webp',
    paragraph: [
      'Дождитесь сигнала «большой палец вверх» от механика или инженера, прежде чем подходить к ВС'
    ]
  },
  {
    theme: 'Использование СИЗ',
    imgJpg1: 'img/trainings/sequrity/img-4-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-4-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-4-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-4-desktop@2x.webp',
    paragraph: [
      'Всегда носите специальную одежду и средства персональной защиты при работе на перроне. Это необходимо для вашей безопасности'
    ]
  },
  {
    theme: '',
    imgJpg1: 'img/trainings/sequrity/img-5-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-5-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-5-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-5-desktop@2x.webp',
    paragraph: [
      'Сообщите инженеру или представителю авиакомпании, если вы обнаружили какое-либо повреждение ВС'
    ]
  },
  {
    theme: 'Ответственность за безопасность',
    imgJpg1: 'img/trainings/sequrity/img-6-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-6-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-6-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-6-desktop@2x.webp',
    paragraph: [
      'Вне зависимости от того, какую должность вы занимаете или какие обязанности исполняете при обслуживании ВС…',
      'Если вы работаете на перроне, ВЫ несете ответственность за безопасность!'
    ]
  },
  {
    theme: 'Нормативно-правовые документы',
    imgJpg1: 'img/trainings/sequrity/img-7-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-7-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-7-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-7-desktop@2x.webp',
    paragraph: [
      'Все действия в Гражданской Авиации регламентируются правилами и положениями.'
    ]
  },
  {
    theme: 'Международный уровень',
    imgJpg1: 'img/trainings/sequrity/img-8-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-8-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-8-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-8-desktop@2x.webp',
    paragraph: [
      'ICAO - Международная организация гражданской авиации, которая разрабатывает стандарты и рекомендации таких сфер авиаиндустрии, как:',
      '- аэронавигация',
      '- инфраструктура',
      '- Полетная инспекция',
      '- разработка мер по предупреждению незаконных вмешательств',
      '- процедуры пересечения границы для международной гражданской авиации ОАЭ являются участником ИКАО и ее специализированных подразделений.'
    ]
  },
  {
    theme: 'Государственный уровень',
    imgJpg1: 'img/trainings/sequrity/img-9-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-9-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-9-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-9-desktop@2x.webp',
    paragraph: [
      'Главное управление гражданской авиацией ОАЭ (GCAA) контролирует и регулирует гражданскую авиацию в Объединённых Арабских Эмиратах. GCAA несет ответственность за навигацию воздушного транспорта и безопасность полетов.   GCAA представляет ОЭА в ИКАО и ее специализированных подразделениях.',
      'В РФ эту роль выполняет «Федеральное агентство воздушного транспорта».'
    ]
  },
  {
    theme: 'Управление гражданской авиацией Дубая',
    imgJpg1: 'img/trainings/sequrity/img-10-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-10-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-10-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-10-desktop@2x.webp',
    paragraph: [
      'Управление гражданской авиацией Дубая (DCAA) – внутренний регулирующий орган Аэропортов Эмирата Дубай, включающий в себя Международный Аэропорт Дубая  и Международный Аэропорт Аль-Мактум.',
      'Контролирует развитие воздушной индустрии в эмирате и является связующим звеном различных сфер деятельности гражданских аэропортов в Дубае. Регламентирует работу сотрудников в соответствии с правовыми документами, разрабатывает и утверждает нормативно-правовые акты по эксплуатации аэропорта; нормативно-правовые акты – охране труда, безопасность полетов и охране окружающей среды; по обслуживанию на перроне – рекомендации и уведомления.',
      'В РФ эту функцию исполняет СЕВЕРО-ЗАПАДНОЕ МЕЖРЕГИОНАЛЬНОЕ ТЕРРИТОРИАЛЬНОЕ УПРАВЛЕНИЕ ВОЗДУШНОГО ТРАНСПОРТА ФЕДЕРАЛЬНОГО АГЕНТСТВА ВОЗДУШНОГО ТРАНСПОРТА'
    ]
  },
  {
    theme: 'Перрон - режимный объект',
    imgJpg1: 'img/trainings/sequrity/img-11-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-11-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-11-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-11-desktop@2x.webp',
    paragraph: [
      'Перрон является режимной территорией и все процессы и нахождение персонала контролируется и строго регламентировано.',
      'Выявите необычные или подозрительные факторы на картинки.'
    ]
  },
  {
    theme: '',
    imgJpg1: 'img/trainings/sequrity/img-12-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-12-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-12-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-12-desktop@2x.webp',
    paragraph: [
      'Помните видео и фотосьемка на перроне регламентируется и для того, чтоб ее проводить необходимо получить разрешение от контролирующих органов.'
    ]
  },
  {
    theme: '',
    imgJpg1: 'img/trainings/sequrity/img-13-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-13-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-13-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-13-desktop@2x.webp',
    paragraph: [
      'По правилам безопасности, сотрудникам не разрешается курить, а так же находиться под воздействием или принимать алкоголь или запрещенные медикаменты во время выполнения служебных обязанностей и нахождения в аэропорту.',
      'Если вы чувствуете себя нездоровым, сообщите своему супервайзеру или руководству. Ваше плохое самочувствие может сказаться на результатах вашей работы.'
    ]
  },
  {
    theme: '',
    imgJpg1: 'img/trainings/sequrity/img-14-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-14-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-14-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-14-desktop@2x.webp',
    paragraph: [
      'При использовании специального оборудования или средств передвижения на перроне, необходимо удостовериться в следующем:',
      '- Водитель должен иметь водительское удостоверение, талон на право управление ТС, путёвку.',
      '- Должно быть пройдено обучение управлению и работе с соответствующим оборудованием/средством передвижения.',
      'Средства передвижения на перроне работают по принципу «нет места-нет поездки» (No seat – No ride).'
    ]
  },
  {
    theme: 'Обеспечение своевременной и безопасной работы аэропорта',
    imgJpg1: 'img/trainings/sequrity/img-15-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-15-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-15-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-15-desktop@2x.webp',
    paragraph: [
      'Аэропорт управляет передвижениями пассажиров, багажа и груза и оборудования между терминалами, стоянками и производственными объектами.  Аэропорт также обеспечивает разворот воздушных судов с помощью служб наземного обслуживания. Для обеспечения своевременной и безопасной работы, необходимо четкое понимание назначений и наименований различных зон аэропорта:',
      '- Взлетная полоса',
      '- Рулежная дорожка',
      '- Перрон'
    ]
  },
  {
    theme: 'Зона общего доступа',
    imgJpg1: 'img/trainings/sequrity/img-16-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-16-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-16-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-16-desktop@2x.webp',
    paragraph: [
      'Зона общего доступа – зона аэропорта, находящаяся до прохождения каких-либо пунктов безопасности/досмотра ,  таких как таможня или пограничный контроль',
      'Воздушная зона – является контролируемой зоной аэропорта, которая включает в себя:',
      '- любую режимную зону ФТС, ФСБ, САБ, например, зал отправления или прибытия',
      '- зона перрона, или зона стоянки, где идет обслуживание ВС вплоть до момента его отправления'
    ]
  },
  {
    theme: 'Разметка на перроне',
    imgJpg1: 'img/trainings/sequrity/img-17-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-17-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-17-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-17-desktop@2x.webp',
    paragraph: [
      'Разметка на перроне может отличаться в разных странах, но основные правила таковы:',
      'Разметка желтого цвета - для воздушного судна. Во время движения самолёта, по таким линям не должно быть никаких преград.',
      'Белые лини используются для маркировки движения наземного оборудования и транспортных средств. Запрещено пересекать двойную сплошную белую линию.',
      'Красная линия (иногда) с белыми границами – Equipment Restraint Line (ERL) – границы стоянки ВС. Весь персонал и оборудование должны находиться за пределами этой зоны в момент движения ВС, работы двигателей и до выключения проблесковых маячков ВС.'
    ]
  },
  {
    theme: '',
    imgJpg1: 'img/trainings/sequrity/img-18-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-18-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-18-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-18-desktop@2x.webp',
    paragraph: [
      'Разметка «красная штриховка» - стоянка и движение транспортных средств запрещены.'
    ]
  },
  {
    theme: '',
    imgJpg1: 'img/trainings/sequrity/img-19-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-19-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-19-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-19-desktop@2x.webp',
    paragraph: [
      'Разметка «желтая штриховка» – стоянка и движение транспортных средств запрещены, размещение оборудования запрещено.'
    ]
  },
  {
    theme: '',
    imgJpg1: 'img/trainings/sequrity/img-20-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-20-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-20-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-20-desktop@2x.webp',
    paragraph: [
      'Запрещается пересечение рулежных дорожек вне транспортных средств.'
    ]
  },
  {
    theme: '',
    imgJpg1: 'img/trainings/sequrity/img-21-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-21-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-21-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-21-desktop@2x.webp',
    paragraph: [
      'Персонал имеет право пересекать данную зону только на транспортном средстве. Транспортное средство должно полностью остановиться, прежде чем пересекать рулежную дорожку. Соблюдайте правила дорожного движения при пересечении рулежной дорожки.'
    ]
  },
  {
    theme: '',
    imgJpg1: 'img/trainings/sequrity/img-22-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-22-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-22-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-22-desktop@2x.webp',
    paragraph: [
      'Сотрудники наземной службы устанавливают колодки только после выключения  двигателей и «проблесковых маячков» и сигнала «большой палец вверх» от инженера или механика.',
      'Проблесковые маячки расположены в сверху и под фюзеляжем. Они указывают на то, что двигатели самолета включены, или будут включены в ближайшее время.'
    ]
  },
  {
    theme: '',
    imgJpg1: 'img/trainings/sequrity/img-23-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-23-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-23-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-23-desktop@2x.webp',
    paragraph: [
      'Колодки устанавливаются в передней и задней частях стойки шасси, когда самолёт находится на стоянке. Колодки предотвращают движение ВС из-за сильного ветра или неровной поверхности.'
    ]
  },
  {
    theme: '',
    imgJpg1: 'img/trainings/sequrity/img-24-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-24-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-24-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-24-desktop@2x.webp',
    paragraph: [
      'Сигнальные конусы ставятся вокруг ВС, чтобы выделить зону двигателей и крыльев'
    ]
  },
  {
    theme: '',
    imgJpg1: 'img/trainings/sequrity/img-25-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-25-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-25-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-25-desktop@2x.webp',
    paragraph: [
      'Во избежание любого повреждения, персонал служб наземного обслуживания должен быть крайне острожен при подъезде и при подсоединении  оборудования к ВС'
    ]
  },
  {
    theme: 'Служба наземного обслуживания',
    imgJpg1: 'img/trainings/sequrity/img-26-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-26-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-26-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-26-desktop@2x.webp',
    paragraph: [
      'Служба наземного обслуживания устанавливает и подсоединяет трапп к самолету. Для отдаленных стоянок предусмотрены автобусы, чтобы доставлять пассажиров к зданию терминала аэропорта.',
      'Далее следует процедура разгрузки багажа и груза, и доставка его в соответствующий терминал (пассажирский ли карго-терминал).'
    ]
  },
  {
    theme: 'Когда все пассажиры вышли из самолета',
    imgJpg1: 'img/trainings/sequrity/img-27-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-27-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-27-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-27-desktop@2x.webp',
    paragraph: [
      'Когда все пассажиры вышли из самолета, начинают работы следующие службы:',
      '- Происходит заправка самолета',
      '- Уборка самолета',
      '- Загрузка бортового питания'
    ]
  },
  {
    theme: '',
    imgJpg1: 'img/trainings/sequrity/img-28-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-28-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-28-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-28-desktop@2x.webp',
    paragraph: [
      'В то время как идет посадка пассажиров, происходит загрузка багажа в грузовой отсек. Экипаж рейса забирает необходимые полетные документы, включающие в себя пассажирский манифест, сводно-загрузочную ведомость и какие-либо инструкции для экипажа.'
    ]
  },
  {
    theme: '',
    imgJpg1: 'img/trainings/sequrity/img-29-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-29-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-29-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-29-desktop@2x.webp',
    paragraph: [
      'После получения разрешения на взлет, закрываются пассажирские и багажные двери. Отгоняется трап.'
    ]
  },
  {
    theme: '',
    imgJpg1: 'img/trainings/sequrity/img-30-desktop@1x.jpg',
    imgJpg2: 'img/trainings/sequrity/img-30-desktop@2x.jpg',
    imgWebp1: 'img/trainings/sequrity/img-30-desktop@1x.webp',
    imgWebp2: 'img/trainings/sequrity/img-30-desktop@2x.webp',
    paragraph: [
      'Инженер или механик должен удостовериться, что на ВС нет видимых повреждений, и еще раз удостовериться, что на стоянке нет мусора или посторонних предметов.'
    ]
  }
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

// Заблокировал кнопку перехода к тесту
try {
  trainingButton.style.pointerEvents = 'none';
} catch {}

try {
  btnNext.addEventListener('click', () => {
    currentActiveIndex++;
    currentNum++;

    btnNext.classList.add('training__button--disable');
    btnNext.disabled = true;
    btnNext.style.cursor = 'default';

    setTimeout(() => {
      btnNext.classList.remove('training__button--disable');
      btnNext.disabled = false;
      btnNext.style.cursor = 'pointer';

      if (currentActiveIndex === trainList.length - 1) {
        btnNext.classList.add('training__button--disable');
        btnNext.disabled = true;
        btnNext.style.cursor = 'default';
      }
    }, );

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

    // if (currentActiveIndex === trainList.length - 1) {
    //   btnNext.classList.add('training__button--disable');
    //   btnNext.disabled = true;
    // }

    if (currentActiveIndex > 0) {
      btnPrev.classList.remove('training__button--disable');
      btnPrev.disabled = false;
      btnPrev.style.cursor = 'pointer';
    }

    visualCountNum.textContent = currentNum;

    if (currentActiveIndex === trainList.length - 1) {
      trainingButton.classList.remove('training__button--disable');
      trainingButton.style.pointerEvents = 'auto';
    }
  });
} catch {}

try {
  btnPrev.style.cursor = 'default';
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
      btnPrev.style.cursor = 'default';
    }

    if (currentActiveIndex >= 0) {
      btnNext.classList.remove('training__button--disable');
      btnNext.disabled = false;
      btnNext.style.cursor = 'pointer';
    }

    visualCountNum.textContent = currentNum;

    if (currentActiveIndex < trainList.length - 1) {
      trainingButton.classList.add('training__button--disable');
      // trainingButton.removeAttribute('href');
    }
  });
} catch {}

// Кнопочка с количеством тренингов к прохождению
try {
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
} catch {}

// Показать следующие 3 элемента при клике
// function showMoreCounts(list, button) {
//   let visibleItemCount = 5;
//   let hiddenItemCount = list.length - visibleItemCount;

//   for (let i = visibleItemCount; i < list.length; i++) {
//     list[i].style.display = 'none';
//   }

//   button.addEventListener('click', () => {
//     for (let i = visibleItemCount; i < visibleItemCount + hiddenItemCount; i++) {
//       if (list[i]) {
//         list[i].style.display = '';
//       }
//     }

//     if (visibleItemCount + hiddenItemCount >= list.length) {
//       button.style.display = 'none';
//     }

//     visibleItemCount += hiddenItemCount;
//   });
// }

// const usersListButton = document.querySelector('.users-list__button');
// const usersListItems = document.querySelectorAll('.users-list__item');

// showMoreCounts(usersListItems, usersListButton);


// Фильтрация всех сотрудников

const usersSelect = document.querySelector('.users-list__select');
const usersItems = document.querySelectorAll('.users-list__item');
const usersListButton = document.querySelector('.users-list__button');

let currentIndex = 0;
let itemsPerPage = 5;

usersItems.forEach((item, index) => {
  if (index >= itemsPerPage) {
    item.classList.add('remove-elem');
  }
});

// usersListButton.addEventListener('click', () => {
//   usersItems.forEach((item, index) => {
//     console.log(item, index);
//     if (index <= itemsPerPage + 5) {
//       item.classList.remove('remove-elem');
//     }
//   });

//   itemsPerPage += 5;
// });


try {
  usersSelect.addEventListener('change', () => {
    usersListButton.classList.remove('remove-elem');
    let visibleUsers = [];
    let counter = 5;


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

    usersListButton.addEventListener('click', () => {
      counter += 5;

      visibleUsers.forEach((item, index) => {
        // console.log(item, index);
        if (index < counter) {
          item.classList.remove('remove-elem');
        }

        if (counter >= visibleUsers.length) {
          usersListButton.classList.add('remove-elem');
          // visibleUsers = []
        }
      });
    });


    console.log(visibleUsers);
  });

} catch {}

console.log(itemsPerPage);


// for (let i = 0; i < usersItems.length; i++) {
//   // usersItems[i].classList.add('remove-elem');
//   console.log(usersItems[i]);
//   if (i >= countUsers) {
//     usersItems[i].classList.add('remove-elem');
//   }
// }

// Установить курсор по клику в поле
try {
  const loginLink = document.querySelector('.header__login-link');
  const informationButton = document.querySelector('.information__button');
  const heroInputTab = document.querySelector('.hero__input--tab');

  loginLink.addEventListener('click', () => {
    heroInputTab.focus();
  });

  informationButton.addEventListener('click', () => {
    heroInputTab.focus();
  });
} catch {}

// Убрать сообщение об успехе
const messageContainers = document.querySelectorAll('.message-container');

try {
  messageContainers.forEach((item) => {
    setTimeout(() => {
      item.remove();
    }, 5000);
  });
} catch {}

// Попап удаления записи о сотруднике
const usersListItem = document.querySelectorAll('.users-list__item');
const backgroundOverlay = document.querySelector('.overlay');

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

// Добавить надпись о том, что файл выбран
const fileInput = document.getElementById('update-profile__button-choose');
const fileName = document.querySelector('.update-profile__file-name');

try {
  fileInput.addEventListener('change', () => {
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
        fileName.textContent = selectedFile.name.length > 15 ? '...' + selectedFile.name.slice(-12) : selectedFile.name.slice(-15)
    } else {
        fileName.textContent = '';
    }
  });
} catch {}

// // // Показать следующие 5
// let index = 5; // Начальный индекс для отображаемых элементов

// function getNextElements(list, button) {
//   // Скрыть все элементы, кроме первых пяти
//   const allItems = list.querySelectorAll('li');
//   allItems.forEach((item, i) => {
//     if (i >= 5) {
//         item.classList.add('remove-elem');
//     }
//   });

//   button.addEventListener('click', () => {
//     // Показать следующие 5 элементов
//     for (let i = index; i < index + 5 && i < allItems.length; i++) {
//       allItems[i].classList.remove('remove-elem');
//     }

//     index += 5;

//     // Если больше нет элементов для отображения, скрыть кнопку
//     if (index >= allItems.length) {
//         button.style.display = 'none';
//     }
//   });
// }

// const usersFinishedTestList = document.querySelector('.users-finished-test__list');
// const usersFinishedTestButton = document.querySelector('.users-finished-test__button');

// try {
//   getNextElements(usersFinishedTestList, usersFinishedTestButton);
// } catch {}

// const usersListItems = document.querySelector('.users-list__list');
// const usersListButton = document.querySelector('.users-list__button');

// try {
//   getNextElements(usersListItems, usersListButton);
// } catch {}

// const userProgressList = document.querySelector('.user-progress__list');
// const userProgressButton = document.querySelector('.user-progress__button');

// try {
//   getNextElements(userProgressList, userProgressButton);
// } catch {}




// // Фильтрация сотрудников сдавших тест
// const filterSelect = document.querySelector('.users-finished-test__select');
// const finishedTestList = document.querySelector('.users-finished-test__list');
// const loadMoreButton = document.querySelector('.users-finished-test__button');


// function filterEmployees() {
//   // Получаем значение выбранного элемента в select
//   const selectedProfession = document.querySelector('.users-finished-test__select').value;

//   // Находим все элементы списка сотрудников
//   const employeesList = document.querySelectorAll('.users-finished-test__list li');

//   // Проходимся по каждому сотруднику и добавляем/удаляем класс hidden в зависимости от выбранной профессии
//   employeesList.forEach(employee => {
//       if (selectedProfession === '' || employee.dataset.post === selectedProfession) {
//           employee.classList.remove('remove-elem'); // Показываем сотрудника
//       } else if (selectedProfession === 'all') {
//         employee.classList.remove('remove-elem'); // Показываем всех
//     } else {
//           employee.classList.add('remove-elem'); // Скрываем сотрудника
//       }
//   });
// }

// // Привязка обработчика события к select
// const professionSelect = document.querySelector('.users-finished-test__select');
// professionSelect.addEventListener('change', filterEmployees);

// filterEmployees();









// // // Показать следующие 5
// let index = 5; // Начальный индекс для отображаемых элементов

// function getNextElements(list, button) {
//   // Скрыть все элементы, кроме первых пяти
//   const allItems = list.querySelectorAll('li');
//   allItems.forEach((item, i) => {
//     if (i >= 5) {
//         item.classList.add('remove-elem');
//     }
//   });

//   button.addEventListener('click', () => {
//     // Показать следующие 5 элементов
//     for (let i = index; i < index + 5 && i < allItems.length; i++) {
//       allItems[i].classList.remove('remove-elem');
//     }

//     index += 5;

//     // Если больше нет элементов для отображения, скрыть кнопку
//     if (index >= allItems.length) {
//         button.style.display = 'none';
//     }
//   });
// }

// const usersFinishedTestList = document.querySelector('.users-finished-test__list');
// const usersFinishedTestButton = document.querySelector('.users-finished-test__button');

// try {
//   getNextElements(usersFinishedTestList, usersFinishedTestButton);
// } catch {}

// const usersListItems = document.querySelector('.users-list__list');
// const usersListButton = document.querySelector('.users-list__button');

// try {
//   getNextElements(usersListItems, usersListButton);
// } catch {}
