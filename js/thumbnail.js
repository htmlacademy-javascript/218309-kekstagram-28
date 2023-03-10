import { generateUserPhotoDescription } from './data.js';

const pictures = document.querySelector('.pictures');
const pictureUsersTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarPictures = generateUserPhotoDescription(10);
const picturesFragment = document.createDocumentFragment();

similarPictures.forEach(({ url, comments, likes }) => {
  const pictureElement = pictureUsersTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = 'Случайная фотография';
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  picturesFragment.append(pictureElement);
});
export const createPost = () => {
  pictures.append(picturesFragment);
};

