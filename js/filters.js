import { renderPosts } from './thumbnail.js';
import { debounce } from './util.js';

const MAX_RANDOM_POSTS = 10;
const RERENDER_DELAY = 500;

const filtersElement = document.querySelector('.img-filters');

const filtersButtonElement = document.querySelectorAll('.img-filters__button');
const filtersFormElement = document.querySelector('.img-filters__form');

const sortRandomly = (array) => {
  const comparePostsRandom = () => Math.random() - 0.5;
  return array
    .slice()
    .sort(comparePostsRandom)
    .slice(0, MAX_RANDOM_POSTS);
};

const sortByComments = (array) => {
  const comparePostsComments = (pictureA, pictureB) =>
    pictureB.comments.length - pictureA.comments.length;
  return array
    .slice()
    .sort(comparePostsComments);
};

const sortByDefault = (array) => {
  const comparePostsDefault = (pictureA, pictureB) => pictureA.id - pictureB.id;
  return array
    .slice()
    .sort(comparePostsDefault);
};

const showImgFilter = () => {
  filtersElement.classList.remove('img-filters--inactive');
};

const clearFilter = (button) => {
  filtersButtonElement.forEach((element) =>
    element.classList.remove('img-filters__button--active')
  );
  button.classList.add('img-filters__button--active');
};

const removePictures = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
};

const sortPost = (array, id) => {
  removePictures();
  switch (id) {
    case 'filter-default':
      renderPosts(sortByDefault(array));
      break;
    case 'filter-discussed':
      renderPosts(sortByComments(array));
      break;
    case 'filter-random':
      renderPosts(sortRandomly(array));
      break;
    default:
      renderPosts(sortByDefault(array));
  }
};

const debouncedRenderPosts = debounce((array, id) => sortPost(array, id), RERENDER_DELAY);

const onFilterClick = (array, evt) => {
  const target = evt.target.closest('.img-filters__button');
  if (!target) {
    return;
  }
  clearFilter(target);
  const id = target.id;
  debouncedRenderPosts(array, id);
};

const setFilterClick = (array) => {
  filtersFormElement.addEventListener('click', (evt) => {
    onFilterClick(array, evt);
  });
};

export { setFilterClick, sortByDefault, showImgFilter };

