import { generateUserPhotoDescription } from './data.js';

const PICTURES = document.querySelector('.pictures');
const PICTURE_USERS_TEMPLATE = document.querySelector('#picture').content.querySelector('.picture');
const SIMILAR_PICTURES = generateUserPhotoDescription(10);
const PICTURES_FRAGMENT = document.createDocumentFragment();

SIMILAR_PICTURES.forEach(({ url, comments, likes }) => {
  const PICTURE_ELEMENT = PICTURE_USERS_TEMPLATE.cloneNode(true);
  PICTURE_ELEMENT.querySelector('.picture__img').src = url;
  PICTURE_ELEMENT.querySelector('.picture__comments').textContent = comments.length;
  PICTURE_ELEMENT.querySelector('.picture__likes').textContent = likes;

  PICTURES_FRAGMENT.append(PICTURE_ELEMENT);
});
export const createPost = () => {
  PICTURES.appendChild(PICTURES_FRAGMENT);
};

