import { renderPosts } from './thumbnail.js';
// import { generateUserPhotoDescription } from './mock.js';
import { validateForm, setUploadFormSubmit, closeUploadPicture } from './form.js';
import { getData } from './api.js';
import { showSelectedFile } from './upload-picture.js';

import { debounce } from './util.js';
// import { showFilters, getFilteredPictures } from './filters.js';
// import { showAlert } from './util.js';


// renderPosts(generateUserPhotoDescription());
validateForm();

const debouncedRenderGallery = debounce(renderPosts);
getData(debouncedRenderGallery);

setUploadFormSubmit(closeUploadPicture);

showSelectedFile();

