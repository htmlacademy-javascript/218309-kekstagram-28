const PICTURES_COUNT = 10;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filters = document.querySelector('.img-filters');

/* const buttonFilterDefault = document.querySelector('#filter-default');
const buttonFilterRandom = document.querySelector('#filter-random');
const buttonFilterDiscussed = document.querySelector('#filter-discussed'); */

let currentFilter = Filter.DEFAULT;
let pictures = [];

const sortRandomly = () => Math.random() - 0.5;

const sortByComments = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const sortByDefault = (array) => {
  const comparePostsDefault = (pictureA, pictureB) => pictureA.id - pictureB.id;
  return array
    .slice()
    .sort(comparePostsDefault);
};

const showImgFilter = () => {
  filters.classList.remove('img-filters--inactive');
};

const clearFilter = (button) => {
  filtersButton.forEach((element) =>
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

const setOnFilterClick = (cb) => {
  filters.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }

    const clickedButton = evt.target;
    if (clickedButton.id === currentFilter) {
      return;
    }

    filters
      .querySelector('.img-filters__button--active')
      .classList.remove('img-filters__button--active');
    clickedButton.classList.add('img-filters__button--active');
    currentFilter = clickedButton.id;
    // cb(getFilteredPictures());
  });
};

const showFilters = (loadedPictures, cb) => {
  filters.classList.remove('img-filters--inactive');
  pictures = [...loadedPictures];
  setOnFilterClick(cb);
};

export {showFilters, getFilteredPictures};

