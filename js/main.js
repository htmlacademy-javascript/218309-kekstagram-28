import { renderPosts } from './thumbnail.js';
import { generateUserPhotoDescription } from './mock.js';
import { validateForm, setUploadFormSubmit,openUpLoadPicture,closeUploadPicture} from './form.js';

// renderPosts(generateUserPhotoDescription());
validateForm();

fetch('https://28.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then(() => {
    renderPosts(generateUserPhotoDescription());
  });

setUploadFormSubmit(closeUploadPicture);
