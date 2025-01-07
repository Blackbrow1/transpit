function removeSuccessMessage() {
  const messageContainers = document.querySelectorAll('.message-container');

  messageContainers.forEach((item) => {
    setTimeout(() => {
      item.remove();
    }, 5000);
  });
}

export {removeSuccessMessage}
