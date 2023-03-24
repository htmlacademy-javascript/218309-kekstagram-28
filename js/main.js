import { renderPosts } from './thumbnail.js';
import { generateUserPhotoDescription } from './mock.js';
import { validateForm } from './form.js';

renderPosts(generateUserPhotoDescription());
validateForm();

