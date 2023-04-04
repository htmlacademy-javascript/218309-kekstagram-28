import { renderPosts } from './thumbnail.js';
import { debounce } from './util.js';

const MAX_RANDOM_POSTS = 10;

const filters = document.querySelector('.img-filters');

const filtersButton = document.querySelectorAll('.img-filters__button');
const filtersForm = document.querySelector('.img-filters__form');


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
      renderPosts(array, sortByDefault);
      break;
    case 'filter-discussed':
      renderPosts(array, sortByComments);
      break;
    case 'filter-random':
      renderPosts(array, sortRandomly);
      break;
    default:
      renderPosts(array, sortByDefault);
  }
};

const debouncedRenderPosts = debounce((array, id) => sortPost(array, id), 500);

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
  filtersForm.addEventListener('click', (evt) => {
    onFilterClick(array, evt);
  });
};

export { setFilterClick, sortByDefault, showImgFilter };


// const showFilters = () => {
//   filters.classList.remove('img-filters--inactive');
//   pictures = [...loadedPictures];
//   setOnFilterClick(cb);
// };

// export { showFilters };


