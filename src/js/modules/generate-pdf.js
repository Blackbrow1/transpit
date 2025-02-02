function generatePdf() {
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
}

export {generatePdf}
