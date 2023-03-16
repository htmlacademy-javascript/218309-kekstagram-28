import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const usersPicture = document.querySelectorAll('.picture');
const bigPictureCloseElement = document.querySelector('.big-picture__cancel');

const onBigPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function openBigPicture() {
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onBigPictureEscKeydown);
}

usersPicture.forEach((item) => {
  item.addEventListener('click', (evt) => {
    console.log(item);
    evt.preventDefault();
    if (evt.target.closest('.picture')) {
      openBigPicture();
      bigPicture.querySelector('.big-picture__img img').src = evt.target.src;
      bigPicture.querySelector('.likes-count').textContent = evt.target.closest('.picture').querySelector('.picture__likes').textContent;
      bigPicture.querySelector('.comments-count').textContent = evt.target.closest('.picture').querySelector('.picture__comments').textContent;
      bigPicture.querySelector('.social__caption').textContent = evt.target.alt;
      console.log(bigPicture);
    }
  });
});

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
}

bigPictureCloseElement.addEventListener('click', () => {
  closeBigPicture();
});
