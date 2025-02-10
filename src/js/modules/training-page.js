// Обучающая страница
function trainingPage(trainListData, id) {
  const trainingID = document.querySelector(id);
  const trainingInfo = trainingID.querySelector('.training__info');
  const trainingImgBlock = trainingID.querySelector('.training__img-block');
  const btnNext = trainingID.querySelector('.training__btn--next');
  const btnPrev = trainingID.querySelector('.training__btn--prev');
  const visualCountLenght = trainingID.querySelector('.training__visual-count-lenght');
  const visualCountNum = trainingID.querySelector('.training__visual-count-number');
  const trainingButton = trainingID.querySelector('.training__button');
  const trainingBlockTitle = trainingID.querySelector('.training__block-title');

  let currentActiveIndex = 0;
  let currentNum = 1;

  visualCountLenght.textContent = trainListData.length;

  if (currentActiveIndex === 0) {
    btnPrev.classList.add('training__button--disable');
    btnPrev.disabled = true;

    if (trainListData[currentActiveIndex].theme) {
      trainingBlockTitle.style.display = 'block';
      trainingBlockTitle.textContent = trainListData[currentActiveIndex].theme;
    } else {
      trainingBlockTitle.style.display = 'none';
    }

    // trainingBlockTitle.textContent = trainListData[currentActiveIndex].theme;

    trainListData[currentActiveIndex].paragraph.forEach(item => {
      let par = document.createElement('p');
      par.innerHTML = item;
      trainingInfo.append(par);
    });

    let container = `
      <picture>
        <source width="555" height="487" type="image/webp"
          srcset="${trainListData[currentActiveIndex].imgWebp1} 1x, ${trainListData[currentActiveIndex].imgWebp2} 2x">
        <img class="training__img" width="555" height="487" loading="lazy"
          src="${trainListData[currentActiveIndex].imgJpg1}" srcset="${trainListData[currentActiveIndex].imgJpg2} 2x"
          alt="Изображение к теме урока">
      </picture>
    `;

    trainingImgBlock.innerHTML = container;
    visualCountNum.textContent = currentNum;
  }

  // Заблокировал кнопку перехода к тесту
  trainingButton.style.pointerEvents = 'none';

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

      if (currentActiveIndex === trainListData.length - 1) {
        btnNext.classList.add('training__button--disable');
        btnNext.disabled = true;
        btnNext.style.cursor = 'default';
      }
    }, );

    if (currentActiveIndex < trainListData.length) {
      trainingInfo.innerHTML = '';
      trainingImgBlock.innerHTML = '';

      if (trainListData[currentActiveIndex].theme) {
        trainingBlockTitle.style.display = 'block';
        trainingBlockTitle.textContent = trainListData[currentActiveIndex].theme;
      } else {
        trainingBlockTitle.style.display = 'none';
      }

      // trainingBlockTitle.textContent = trainListData[currentActiveIndex].theme;

      trainListData[currentActiveIndex].paragraph.forEach(item => {
        let par = document.createElement('p');
        par.innerHTML = item;
        trainingInfo.append(par);
      });

      let container = `
        <picture>
          <source width="555" height="487" type="image/webp"
            srcset="${trainListData[currentActiveIndex].imgWebp1} 1x, ${trainListData[currentActiveIndex].imgWebp2} 2x">
          <img class="training__img" width="555" height="487" loading="lazy"
            src="${trainListData[currentActiveIndex].imgJpg1}" srcset="${trainListData[currentActiveIndex].imgJpg2} 2x"
            alt="Изображение к теме урока">
        </picture>
      `;

      trainingImgBlock.innerHTML = container;
    }

    // if (currentActiveIndex === trainListData.length - 1) {
    //   btnNext.classList.add('training__button--disable');
    //   btnNext.disabled = true;
    // }

    if (currentActiveIndex > 0) {
      btnPrev.classList.remove('training__button--disable');
      btnPrev.disabled = false;
      btnPrev.style.cursor = 'pointer';
    }

    visualCountNum.textContent = currentNum;

    if (currentActiveIndex === trainListData.length - 1) {
      trainingButton.classList.remove('training__button--disable');
      trainingButton.style.pointerEvents = 'auto';
    }
  });

  btnPrev.style.cursor = 'default';

  btnPrev.addEventListener('click', () => {
    currentActiveIndex--;
    currentNum--;

    if (currentActiveIndex >= 0) {
      trainingInfo.innerHTML = '';
      trainingImgBlock.innerHTML = '';

      if (trainListData[currentActiveIndex].theme) {
        trainingBlockTitle.style.display = 'block';
        trainingBlockTitle.textContent = trainListData[currentActiveIndex].theme;
      } else {
        trainingBlockTitle.style.display = 'none';
      }

      // trainingBlockTitle.textContent = trainListData[currentActiveIndex].theme;

      trainListData[currentActiveIndex].paragraph.forEach(item => {
        let par = document.createElement('p');
        par.innerHTML = item;
        trainingInfo.append(par);
      });

      let container = `
        <picture>
          <source width="555" height="487" type="image/webp"
            srcset="${trainListData[currentActiveIndex].imgWebp1} 1x, ${trainListData[currentActiveIndex].imgWebp2} 2x">
          <img class="training__img" width="555" height="487" loading="lazy"
            src="${trainListData[currentActiveIndex].imgJpg1}" srcset="${trainListData[currentActiveIndex].imgJpg2} 2x"
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

    if (currentActiveIndex < trainListData.length - 1) {
      trainingButton.classList.add('training__button--disable');
      // trainingButton.removeAttribute('href');
    }
  });
}

export {trainingPage}


