const pictures = document.querySelector('.pictures');
const pictureUsersTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesFragment = document.createDocumentFragment();

const createPost = (similarPictures) => {
  similarPictures.forEach(({ url, comments, likes }) => {
    const pictureElement = pictureUsersTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = 'Случайная фотография';
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;

    picturesFragment.append(pictureElement);
  });

  pictures.append(picturesFragment);
};
export {createPost};
