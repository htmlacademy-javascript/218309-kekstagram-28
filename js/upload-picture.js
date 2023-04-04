const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('#upload-file');
const previewElement = document.querySelector('.img-upload__preview img');

const effectsPreviewBg = document.querySelectorAll('.effects__preview');

function selectedFile() {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((el) => fileName.endsWith(el));

  if (matches) {
    previewElement.src = URL.createObjectURL(file);

    for (const el of effectsPreviewBg) {
      el.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    }
  }
}

fileChooser.addEventListener('change', selectedFile);

export const showSelectedFile = () => fileChooser.addEventListener('change', selectedFile);
