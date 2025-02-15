// function downloadTestResults() {
//   document.getElementById('downloadCsvButton').addEventListener('click', function() {
//     // Находим все элементы .users-finished-test__item
//     const listItems = document.querySelectorAll('.users-finished-test__item');

//     // Массив для хранения данных
//     let rows = [['ФИО', 'Должность', 'Город', 'Дата', 'Программа', 'Процент', 'Результат']];

//     // Проходимся по каждому элементу
//     listItems.forEach(item => {
//       if (!item.classList.contains('remove-elem')) { // Проверяем отсутствие класса remove-elem
//           // Извлекаем данные из атрибута data
//           const post = item.dataset.post;
//           const city = item.dataset.city;
//           const name = item.dataset.name;
//           const resPercent = item.dataset.percent;
//           const result = item.dataset.result;

//           // Извлекаем текст из параграфов
//           const programText = item.querySelector('.users-finished-test__program').textContent.trim();
//           const dateText = item.querySelector('.users-finished-test__date').textContent.trim();

//           // Добавляем данные в массив
//           rows.push([name, post, city , dateText, programText, resPercent, result]);
//       }
//     });

//     // Формируем строку CSV
//     let csvContent = "data:text/csv;charset=utf-8,";
//     csvContent += rows.map(e => e.join(",")).join("\n");

//     // Создаем ссылку для скачивания
//     let encodedUri = encodeURI(csvContent);
//     let link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", "test-results.csv"); // Имя файла

//     // Программная эмуляция клика для скачивания
//     link.click();
//   });
// }

// function downloadTestResults() {
//   document.getElementById('downloadCsvButton').addEventListener('click', function() {
//      // Находим все элементы .users-finished-test__item
//      const listItems = document.querySelectorAll('.users-finished-test__item');

//      // Массив для хранения данных
//      let rows = [['Пост', 'Город', 'ФИО', 'Год', 'Результат', 'Программа', 'Дата']];

//      // Проходимся по каждому элементу
//      listItems.forEach(item => {
//          // Извлекаем данные из атрибута data
//          const post = item.dataset.post;
//          const city = item.dataset.city;
//          const name = item.dataset.name;
//          const year = item.dataset.year;
//          const result = item.dataset.result;

//          // Извлекаем текст из параграфов
//          const programText = item.querySelector('.users-finished-test__program').textContent.trim();
//          const dateText = item.querySelector('.users-finished-test__date').textContent.trim();

//          // Добавляем данные в массив
//          rows.push([post, city, name, year, result, programText, dateText]);
//      });

//      // Формируем строку CSV
//      let csvContent = "data:text/csv;charset=utf-8,";
//      csvContent += rows.map(e => e.join(",")).join("\n");

//      // Создаем ссылку для скачивания
//      var encodedUri = encodeURI(csvContent);
//      var link = document.createElement("a");
//      link.setAttribute("href", encodedUri);
//      link.setAttribute("download", "data.csv"); // Имя файла

//      // Программная эмуляция клика для скачивания
//      link.click();
//   });
// }


function downloadTestResults(selectUsers, selectCities, selectNames, selectYears, selectResult, item, button) {
  const btn = document.querySelector(button);
  btn.addEventListener('click', () => {
    const usersSelect = document.querySelector(selectUsers);
    const citiesSelect = document.querySelector(selectCities);
    const namesSelect = document.querySelector(selectNames);
    const yearsSelect = document.querySelector(selectYears);
    const resultSelect = document.querySelector(selectResult);
    const usersItems = document.querySelectorAll(item);

    let visibleUsers = [];

    function applyFilters() {
      visibleUsers = Array.from(usersItems).filter(userItem => {
        const postMatches = usersSelect.value === '' || userItem.dataset.post === usersSelect.value;
        const cityMatches = citiesSelect.value === '' || userItem.dataset.city === citiesSelect.value;
        const namesMatches = namesSelect.value === '' || userItem.dataset.name === namesSelect.value;
        const yearMatches = yearsSelect.value === '' || userItem.dataset.year === yearsSelect.value;
        const resultMatches = resultSelect.value === '' || userItem.dataset.result === resultSelect.value;
        return postMatches && cityMatches && namesMatches && yearMatches && resultMatches;
      });
    }

    usersSelect.addEventListener('change', applyFilters);
    citiesSelect.addEventListener('change', applyFilters);
    namesSelect.addEventListener('change', applyFilters);
    yearsSelect.addEventListener('change', applyFilters);
    resultSelect.addEventListener('change', applyFilters);

    // Начальная инициализация
    applyFilters();

    let rows = [['ФИО', 'Должность', 'Город', 'Дата', 'Программа', 'Процент', 'Результат']];

    visibleUsers.forEach(item => {
         const post = item.dataset.post;
         const city = item.dataset.city;
         const name = item.dataset.name;
         const resPercent = item.dataset.percent;
         const result = item.dataset.result;

         // Извлекаем текст из параграфов
         const programText = item.querySelector('.users-finished-test__program').textContent.trim();
         const dateText = item.querySelector('.users-finished-test__date').textContent.trim();

         // Добавляем данные в массив
         rows.push([name, post, city, dateText, programText, resPercent, result]);
     });

     // Формируем строку CSV
     let csvContent = "data:text/csv;charset=utf-8,";
     csvContent += rows.map(e => e.join(",")).join("\n");

     // Создаем ссылку для скачивания
     let encodedUri = encodeURI(csvContent);
     let link = document.createElement("a");
     link.setAttribute("href", encodedUri);
     link.setAttribute("download", "test-results.csv"); // Имя файла

     // Программная эмуляция клика для скачивания
     link.click();
  });
}

export {downloadTestResults}
