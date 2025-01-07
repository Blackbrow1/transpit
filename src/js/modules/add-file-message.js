const fileInput = document.getElementById('update-profile__button-choose');
const fileName = document.querySelector('.update-profile__file-name');

function addFileMessage() {
  fileInput.addEventListener('change', () => {
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
        fileName.textContent = selectedFile.name.length > 15 ? '...' + selectedFile.name.slice(-12) : selectedFile.name.slice(-15)
    } else {
        fileName.textContent = '';
    }
  });
}

export {addFileMessage}
