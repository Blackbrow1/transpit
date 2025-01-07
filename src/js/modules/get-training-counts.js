// Кнопочка с количеством тренингов к прохождению
function getTrainingCounts(list, item, allTrainings, deleteItem) {
  const headerTrainingList = document.querySelector(list);
  const headerTrainingItem = document.querySelectorAll(item);
  const headerTrainingSticker = document.querySelector(allTrainings);

  let trainingsCount = 0;

  headerTrainingItem.forEach(item => {
    if (item) {
      trainingsCount++;
    }
  });

  if (trainingsCount === 0) {
    headerTrainingSticker.classList.add(deleteItem);
    headerTrainingList.remove();
  }

  headerTrainingSticker.textContent = trainingsCount;
}

export {getTrainingCounts}
