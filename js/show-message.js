import { isEscapeKey } from './util.js';
import { onUploadEscKeydown } from './form.js';

const elementBody = document.querySelector('body');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const successElement = successMessage.cloneNode(true);
const errorElement = errorMessage.cloneNode(true);

const successButton = successElement.querySelector('.success__button');
const errorButton = errorElement.querySelector('.error__button');

const onSuccessAnywhereClick = (evt) => {
  if (evt.target === successElement) {
    document.querySelector('.success').remove();
    document.removeEventListener('click', onSuccessAnywhereClick);
    document.removeEventListener('keydown', onSuccessKeydown);
  }
};

const onErrorAnywhereClick = (evt) => {
  if (evt.target === errorElement) {
    document.querySelector('.error').remove();
    document.removeEventListener('click', onErrorAnywhereClick);
    document.removeEventListener('keydown', onErrorKeydown);
    document.addEventListener('keydown', onUploadEscKeydown);
  }
};

function onSuccessKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (successElement) {
      document.querySelector('.success').remove();
    }
  }
}
function onErrorKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (errorElement) {
      document.querySelector('.error').remove();
      document.addEventListener('keydown', onUploadEscKeydown);
    }
  }
}

const onSuccessButtonClick = () => {
  if (successElement) {
    document.querySelector('.success').remove();
  }
};

const onErrorButtonClick = () => {
  if (errorElement) {
    document.querySelector('.error').remove();
  }
};

const showSuccessMessage = () => {
  elementBody.append(successElement);
  document.addEventListener('keydown', onSuccessKeydown);
  document.addEventListener('click', onSuccessAnywhereClick);
};

const showErrorMessage = () => {
  elementBody.append(errorElement);
  document.removeEventListener('keydown', onUploadEscKeydown);
  document.addEventListener('keydown', onErrorKeydown);
  document.addEventListener('click', onErrorAnywhereClick);
};

successButton.addEventListener('click', onSuccessButtonClick);
errorButton.addEventListener('click', onErrorButtonClick);

export { showSuccessMessage, showErrorMessage };
