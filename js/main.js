import { renderPosts } from './thumbnail.js';
// import { generateUserPhotoDescription } from './mock.js';
import { validateForm, setUploadFormSubmit, closeUploadPicture } from './form.js';
import { getData } from './api.js';

// renderPosts(generateUserPhotoDescription());
validateForm();

getData(renderPosts);

setUploadFormSubmit(closeUploadPicture);
