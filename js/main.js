import { generateUserPhotoDescription } from './data.js';
import { createPost } from './thumbnail.js';

createPost(generateUserPhotoDescription(10));
