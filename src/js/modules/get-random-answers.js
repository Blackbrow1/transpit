// Функция для перемешивания массива
function getRandomAnswers(nameTest, testList, testItem, respNumbers) {
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  // Получаем все элементы списка
  const testName = document.querySelector(nameTest);
  const listItems = Array.from(testName.querySelectorAll(testItem));

  // Перемешиваем их порядок
  const shuffledListItems = shuffleArray(listItems);

  // Очищаем список от существующих элементов
  const list = document.querySelector(testList);
  list.innerHTML = '';

  // Добавляем перемешанные элементы обратно в список
  shuffledListItems.forEach(item => list.appendChild(item));

  for (let i = 0; i < respNumbers; i++) {
    listItems[i].style.display = 'block';

    listItems[i].querySelector('.test__answer-number').textContent = i + 1;
  }

  // Скрываем остальные элементы
  for (let i = respNumbers; i < listItems.length; i++) {
    listItems[i].style.display = 'none';
  }
}

export {getRandomAnswers}
