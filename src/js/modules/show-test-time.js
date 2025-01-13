function showTestTime(testId, res, time) {
  const testIdData = document.querySelector(testId);
  const timeBlock = testIdData.querySelector('.test__time-block');

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
      res;
    }, time);
  }
}

export {showTestTime}
