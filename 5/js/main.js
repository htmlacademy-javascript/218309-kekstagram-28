import { generateUserPhotoDescription } from './data.js';
import { renderPosts } from './thumbnail.js';

renderPosts(generateUserPhotoDescription(10));
