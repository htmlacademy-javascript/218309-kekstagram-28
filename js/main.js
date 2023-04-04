import { getData } from './api.js';
import { renderPosts } from './thumbnail.js';
import { validateForm, setUploadFormSubmit, closeUploadPicture } from './form.js';
import { showSelectedFile } from './upload-picture.js';

getData(renderPosts);
validateForm();
setUploadFormSubmit(closeUploadPicture);
showSelectedFile();
