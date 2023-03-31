import { isEscapeKey } from './util.js';

const elementBody = document.querySelector('body');
const successMessage = document.querySelector('#success').content.querySelector('.success');

const successButton = successMessage.querySelector('.success__button');

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

export const showSuccessMessage = () => {
  elementBody.append(successMessage);
  document.addEventListener('keydown', onMessageEscKeydown);

  document.addEventListener('click', (evt) => {
    const clickTarget = evt.target;
    if (!clickTarget.closest('.success__inner') && !clickTarget.closest('.error__inner')) {
      closeMessage();
    }
  });

};


function closeMessage() {
  elementBody.removeChild(successMessage);
  document.removeEventListener('keydown', onMessageEscKeydown);
}

successButton.addEventListener('click', closeMessage);

// document.addEventListener('click', (evt) =>{
//   const clickTarget = evt.target;
//   if(!clickTarget.closest('.success') && !clickTarget.closest('.success__button')){
//     closeMessage();
//   }
// });
