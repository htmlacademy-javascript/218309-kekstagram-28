import { isEscapeKey } from './util.js';

export const addEventListener = (similarPictures) => {
  const picturesElement = document.querySelector('.pictures');
  const pictureElements = document.querySelectorAll('.picture');
  const commentsElement = document.querySelector('.social__comments');
  const bigPicture = document.querySelector('.big-picture');
  const bigPictureCloseElement = document.querySelector('.big-picture__cancel');

  const socialCommentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');

  const elBody = document.querySelector('body');

  picturesElement.addEventListener('click', (e) => {
    e.preventDefault();
    const currentElement = e.target.parentElement;
    const arr = Array.from(pictureElements);
    const index = arr.indexOf(currentElement);
    if (index >= 0) {
      openBigPicture(similarPictures[index]);
    }

  });

  const onBigPictureEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeBigPicture();
    }
  };

  function openBigPicture(post) {
    bigPicture.classList.remove('hidden');
    bigPicture.querySelector('.big-picture__img img').src = post.url;
    bigPicture.querySelector('.likes-count').textContent = post.likes;
    bigPicture.querySelector('.comments-count').textContent = post.comments.length;
    bigPicture.querySelector('.social__caption').textContent = post.description;

    const commentElement = commentsElement.querySelector('.social__comment').cloneNode(true);

    while (commentsElement.firstChild) {
      commentsElement.removeChild(commentsElement.firstChild);
    }

    post.comments.forEach((comment) => {
      const commentEl = commentElement.cloneNode(true);
      commentEl.querySelector('.social__picture').src = comment.avatar;
      commentEl.querySelector('.social__picture').alt = comment.name;
      commentEl.querySelector('.social__text').textContent = comment.message;
      commentsElement.append(commentEl);
    });

    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');

    elBody.classList.add('modal-open');

    document.addEventListener('keydown', onBigPictureEscKeydown);
  }

  function closeBigPicture() {
    bigPicture.classList.add('hidden');
    document.removeEventListener('keydown', onBigPictureEscKeydown);

    elBody.classList.remove('modal-open');
  }
  bigPictureCloseElement.addEventListener('click', closeBigPicture);
};
