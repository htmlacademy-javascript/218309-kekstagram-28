import { isEscapeKey, } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './slider.js';
import { sendData } from './api.js';
import { showSuccessMessage, showErrorMessage } from './show-message.js';

const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const ERROR_TEXT_TAG = 'Хэш-теги записаны неверно';

const uploadFileImg = document.querySelector('#upload-file');
const uploadOpenImgElement = document.querySelector('.img-upload__overlay');
const uploadCloseImgElement = document.querySelector('.img-upload__cancel');
const bodyElement = document.querySelector('body');
const uploadForm = document.querySelector('#upload-select-image');
const textDescriptionElement = uploadForm.querySelector('.text__description');
const textHashtagsElement = uploadForm.querySelector('.text__hashtags');
const submitButtonElement = document.querySelector('#upload-submit');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text',
});

export const onUploadEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadPicture();
  }
};

export function closeUploadPicture() {
  resetScale();
  resetEffects();
  uploadForm.reset();
  pristine.reset();
  uploadOpenImgElement.classList.add('hidden');
  document.removeEventListener('keydown', onUploadEscKeydown);
  bodyElement.classList.remove('modal-open');
}

export function openUpLoadPicture() {
  uploadOpenImgElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onUploadEscKeydown);
}

export const validateForm = () => {

  uploadCloseImgElement.addEventListener('click', closeUploadPicture);
  uploadFileImg.addEventListener('change', openUpLoadPicture);

  const onKeyPressListener = (evt) => {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  };

  textDescriptionElement.addEventListener('keydown', onKeyPressListener);
  textHashtagsElement.addEventListener('keydown', onKeyPressListener);

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
    textHashtagsElement,
    validateTags,
    ERROR_TEXT_TAG,
  );
};

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Опубликовываю...';
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Опубликовать';
};

// ------Отправка формы------

export const setUploadFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          showSuccessMessage();
        },
        () => {
          unblockSubmitButton();
          showErrorMessage();
        },
        new FormData(evt.target),
      );
    }
  });
};
