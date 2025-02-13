function downloadTestResults() {
  document.getElementById('downloadCsvButton').addEventListener('click', function() {
    // Находим все элементы .users-finished-test__item
    const listItems = document.querySelectorAll('.users-finished-test__item');

    // Массив для хранения данных
    let rows = [['ФИО', 'Должность', 'Город', 'Дата', 'Программа', 'Процент', 'Результат']];

    // Проходимся по каждому элементу
    listItems.forEach(item => {
        if (!item.classList.contains('remove-elem')) { // Проверяем отсутствие класса remove-elem
            // Извлекаем данные из атрибута data
            const post = item.dataset.post;
            const city = item.dataset.city;
            const name = item.dataset.name;
            const resPercent = item.dataset.percent;
            const result = item.dataset.result;

            // Извлекаем текст из параграфов
            const programText = item.querySelector('.users-finished-test__program').textContent.trim();
            const dateText = item.querySelector('.users-finished-test__date').textContent.trim();

            // Добавляем данные в массив
            rows.push([name, post, city , dateText, programText, resPercent, result]);
        }
    });

    // Формируем строку CSV
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += rows.map(e => e.join(",")).join("\n");

    // Создаем ссылку для скачивания
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "test-results.csv"); // Имя файла

    // Программная эмуляция клика для скачивания
    link.click();
  });
}

export {downloadTestResults}
