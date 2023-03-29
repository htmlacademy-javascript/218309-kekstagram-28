import { isEscapeKey, showAlert } from './util.js';
import { resetScale } from './scale.js';
import './slider.js';
import { sendData } from './api.js';

const imgUploadFile = document.querySelector('#upload-file');
const imgUploadOpen = document.querySelector('.img-upload__overlay');
const imgUploadClose = document.querySelector('.img-upload__cancel');
const elBody = document.querySelector('body');
const uploadForm = document.querySelector('#upload-select-image');
const textDescription = uploadForm.querySelector('.text__description');
const textHashtags = uploadForm.querySelector('.text__hashtags');
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const ERROR_TEXT_TAG = 'Хэш-теги записаны неверно';

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text',
});

const onUploadEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadPicture();
  }
};

export function closeUploadPicture() {
  resetScale();
  // resetEffects();
  uploadForm.reset();
  pristine.reset();
  imgUploadOpen.classList.add('hidden');
  document.removeEventListener('keydown', onUploadEscKeydown);
  elBody.classList.remove('modal-open');
}

export function openUpLoadPicture() {
  imgUploadOpen.classList.remove('hidden');
  elBody.classList.add('modal-open');
  document.addEventListener('keydown', onUploadEscKeydown);
}

export const validateForm = () => {

  imgUploadClose.addEventListener('click', closeUploadPicture);
  imgUploadFile.addEventListener('change', openUpLoadPicture);

  const onKeyPressListener = (evt) => {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  };

  textDescription.addEventListener('keydown', onKeyPressListener);
  textHashtags.addEventListener('keydown', onKeyPressListener);

  const isValidTag = (tag) => VALID_HASHTAG.test(tag);

  const hasValidCount = (tags) => tags.length <= 5;

  const hasUniqueTags = (tags) => {
    const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
    return lowerCaseTags.length === new Set(lowerCaseTags).size;
  };

  const validateTags = (value) => {
    const tags = value
      .trim()
      .split(' ')
      .filter((tag) => tag.trim().length);
    return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
  };

  pristine.addValidator(
    textHashtags,
    validateTags,
    ERROR_TEXT_TAG,
  );
};

// const onFormSubmit = (evt) => {
//   evt.preventDefault();
//   const isValid = pristine.validate();
//   if (isValid) {
//     const formData = new FormData(evt.target);

//     fetch(
//       'https://28.javascript.pages.academy/kekstagram',
//       {
//         method: 'POST',
//         body: formData,
//       },
//     ).then(() => onSuccess());
//     // uploadForm.submit();
//     // console.log('Можно отправлять');
//   } else {
//     // console.log(' Не Можно отправлять');
//   }
// };

// uploadForm.addEventListener('submit', onFormSubmit);

// ------Отправка формы------

export const setUploadFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {

    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      sendData(
        () => onSuccess(),
        () => showAlert(),
        new FormData(evt.target),
      );

      // uploadForm.submit();
    // } else {
    //   // console.log(' Не Можно отправлять');
    }
  });
};
