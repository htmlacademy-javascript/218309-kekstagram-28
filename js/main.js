import { renderPosts } from './thumbnail.js';
// import { generateUserPhotoDescription } from './mock.js';
// import { debounce } from './util.js';
// import { showAlert } from './util.js';
import { validateForm, setUploadFormSubmit, closeUploadPicture } from './form.js';
import { getData } from './api.js';
import { showSelectedFile } from './upload-picture.js';

// renderPosts(generateUserPhotoDescription());
validateForm();

// const debouncedRenderGallery = debounce(renderPosts);
// getData(debouncedRenderGallery);

getData(renderPosts);

setUploadFormSubmit(closeUploadPicture);

showSelectedFile();

// import {sortByDefault, showImgFilter, setFilterClick} from './filter.js';
// getData()
//   .then((posts) => {
//     renderPosts(posts, sortByDefault);
//     // getPictureClick(posts);
//     showImgFilter();
//     setFilterClick(posts);
//   })
//   .catch(
//     (err) => {
//       showAlert(err);
//     }
//   );

