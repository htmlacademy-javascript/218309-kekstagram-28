import { isEscapeKey } from './util.js';

const COMMENTS_PER_PORTION = 5;
const targetParent = '.picture';

const picturesElement = document.querySelector('.pictures');
const commentsElement = document.querySelector('.social__comments');
const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCloseElement = document.querySelector('.big-picture__cancel');

const elBody = document.querySelector('body');

const onBigPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function closeBigPicture() {
  bigPictureElement.classList.add('hidden');
  document.removeEventListener('keydown', onBigPictureEscKeydown);

  elBody.classList.remove('modal-open');
}
bigPictureCloseElement.addEventListener('click', closeBigPicture);

function openBigPicture(post) {
  bigPictureElement.classList.remove('hidden');
  bigPictureElement.querySelector('.big-picture__img img').src = post.url;
  bigPictureElement.querySelector('.likes-count').textContent = post.likes;
  bigPictureElement.querySelector('.social__caption').textContent = post.description;


  const commentElement = commentsElement.querySelector('.social__comment').cloneNode(true);

  while (commentsElement.firstChild) {
    commentsElement.removeChild(commentsElement.firstChild);
  }

  const commentsLoader = document.querySelector('.social__comments-loader');
  const socialCommentCount = document.querySelector('.social__comment-count');

  let loadingComments = 0;

  const renderComments = () => {
    loadingComments += COMMENTS_PER_PORTION;

    while (commentsElement.firstChild) {
      commentsElement.removeChild(commentsElement.firstChild);
    }

    const commentsToShow = Math.min(post.comments.length, loadingComments);

    post.comments.forEach((comment, index) => {
      if (index < commentsToShow) {
        const commentEl = commentElement.cloneNode(true);
        commentEl.querySelector('.social__picture').src = comment.avatar;
        commentEl.querySelector('.social__picture').alt = comment.name;
        commentEl.querySelector('.social__text').textContent = comment.message;
        socialCommentCount.textContent = `${commentsToShow} из ${post.comments.length} комментариев`;

        if (loadingComments >= post.comments.length) {
          commentsLoader.classList.add('hidden');
          loadingComments = post.comments.length;
          commentsLoader.removeEventListener('click', renderComments);
        } else {
          commentsLoader.classList.remove('hidden');
          commentsLoader.addEventListener('click', renderComments);
        }
        commentsElement.append(commentEl);
      }
    });
  };
  renderComments();

  elBody.classList.add('modal-open');

  document.addEventListener('keydown', onBigPictureEscKeydown);
}

export const renderBigPicture = (similarPictures) => {
  const pictureElements = document.querySelectorAll('.picture');

  picturesElement.addEventListener('click', (e) => {
    const currentElement = e.target.closest(targetParent);

    const arr = Array.from(pictureElements);
    const index = arr.indexOf(currentElement);
    if (index >= 0) {
      e.preventDefault();
      openBigPicture(similarPictures[index]);
    }

  });

};

